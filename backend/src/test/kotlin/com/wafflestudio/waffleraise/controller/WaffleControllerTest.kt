package com.wafflestudio.waffleraise.controller

import com.wafflestudio.waffleraise.controller.request.ActRequest
import com.wafflestudio.waffleraise.entity.*
import com.wafflestudio.waffleraise.exception.Exception429
import com.wafflestudio.waffleraise.repository.UserRepository
import com.wafflestudio.waffleraise.repository.WaffleRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.transaction.annotation.Transactional

@Transactional
@SpringBootTest
internal class WaffleControllerTest @Autowired constructor(
    private val waffleRepository: WaffleRepository,
    private val userRepository: UserRepository,
    private val waffleController: WaffleController
) {

    @Test
    fun 밥_주기() {
        //given
        val waffle = Waffle(
            name = "waffle", level = 0,
            status = WaffleStatus(25.0, 0.0, 0.0, 0.0)
        )
        waffleRepository.save(waffle)
        val user = User(username = "user", score = 0, waffle = waffle)
        userRepository.save(user)
        //when
        waffleController.act(ActRequest(user.id, waffle.id, ActionType.FEED))
        //then
        val foundWaffle = waffleRepository.findByIdOrNull(waffle.id)
        val foundUser = userRepository.findByIdOrNull(user.id)
        assertThat(foundWaffle!!.status.hungry).isGreaterThan(95.0)
        assertThat(foundWaffle.level).isGreaterThan(0)
        assertThat(foundUser!!.score).isGreaterThan(0)
    }

    @Test
    fun 밥_주기_실패() {
        //given
        val waffle = Waffle(
            name = "waffle", level = 0,
            status = WaffleStatus(50.0, 0.0, 0.0, 0.0)
        )
        waffleRepository.save(waffle)
        val user = User(username = "user", score = 0, waffle = waffle)
        userRepository.save(user)
        //when
        assertThrows(Exception429::class.java) {
            waffleController.act(ActRequest(user.id, waffle.id, ActionType.FEED))
        }
    }

    @Test
    fun 히스토리_가져오기() {
        //given
        val waffle = Waffle(
            name = "waffle", level = 0,
            status = WaffleStatus(25.0, 0.0, 0.0, 0.0)
        )
        waffleRepository.save(waffle)
        val user = User(username = "user", score = 0, waffle = waffle)
        userRepository.save(user)
        waffleController.act(ActRequest(user.id, waffle.id, ActionType.FEED))
        waffleController.act(ActRequest(user.id, waffle.id, ActionType.WATER))
        waffleController.act(ActRequest(user.id, waffle.id, ActionType.BATHE))
        waffleController.act(ActRequest(user.id, waffle.id, ActionType.CURE))
        //when
        val histories = waffleController.getHistories(waffle.id)
        //then
        assertThat(histories[0].action).isEqualTo(ActionType.CURE)
        assertThat(histories[1].action).isEqualTo(ActionType.BATHE)
        assertThat(histories[2].action).isEqualTo(ActionType.WATER)
        assertThat(histories[3].action).isEqualTo(ActionType.FEED)
    }

    @Test
    fun 랭킹_가져오기() {
        //given
        val waffle = Waffle(
            name = "waffle", level = 0,
            status = WaffleStatus(25.0, 0.0, 0.0, 0.0)
        )
        waffleRepository.save(waffle)
        val user1 = User(username = "user1", score = 0, waffle = waffle)
        val user2 = User(username = "user2", score = 0, waffle = waffle)
        userRepository.save(user1)
        userRepository.save(user2)
        waffleController.act(ActRequest(user1.id, waffle.id, ActionType.FEED))
        waffleController.act(ActRequest(user1.id, waffle.id, ActionType.WATER))
        waffleController.act(ActRequest(user2.id, waffle.id, ActionType.BATHE))
        waffleController.act(ActRequest(user2.id, waffle.id, ActionType.CURE))
        //when
        val ranking = waffleController.getRanking(waffle.id)
        //then
        assertThat(ranking.users[0].contribution).isGreaterThan(ranking.users[1].contribution)
    }
}
