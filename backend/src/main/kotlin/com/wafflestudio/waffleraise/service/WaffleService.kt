package com.wafflestudio.waffleraise.service

import com.wafflestudio.waffleraise.controller.response.UserActionDto
import com.wafflestudio.waffleraise.entity.Action
import com.wafflestudio.waffleraise.entity.ActionType
import com.wafflestudio.waffleraise.entity.UserAction
import com.wafflestudio.waffleraise.exception.Exception404
import com.wafflestudio.waffleraise.repository.UserActionRepository
import com.wafflestudio.waffleraise.repository.UserRepository
import com.wafflestudio.waffleraise.repository.WaffleRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class WaffleService(
    private val userRepository: UserRepository,
    private val waffleRepository: WaffleRepository,
    private val userActionRepository: UserActionRepository
) {

    fun act(userId: Long, waffleId: Long, type: ActionType) {
        val user = userRepository.findByIdOrNull(userId) ?: throw Exception404("404")
        val waffle = waffleRepository.findByIdOrNull(waffleId) ?: throw Exception404("404")
        val action = Action(type = type)
        user.score += action.type.score
        when (type) {
            ActionType.FEED -> waffle.status.hungry = 100.0
            ActionType.WATER -> waffle.status.thirsty = 100.0
            ActionType.BATHE -> waffle.status.cleanliness = 100.0
            ActionType.CURE -> waffle.status.health = 100.0
        }
        val userAction = UserAction.create(user, action, waffle)
        userActionRepository.save(userAction)
    }

    fun getHistories(waffleId: Long): List<UserActionDto> {
        val histories = userActionRepository.findAllByWaffleIdOrderByCreatedAtDesc(waffleId)
        return histories.map { UserActionDto.of(it) }
    }
}
