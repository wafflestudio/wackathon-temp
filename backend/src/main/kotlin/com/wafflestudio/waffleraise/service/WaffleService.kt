package com.wafflestudio.waffleraise.service

import com.wafflestudio.waffleraise.controller.response.*
import com.wafflestudio.waffleraise.entity.Action
import com.wafflestudio.waffleraise.entity.ActionType
import com.wafflestudio.waffleraise.entity.UserAction
import com.wafflestudio.waffleraise.exception.Exception403
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
        waffle.level += action.type.score
        when (type) {
            ActionType.FEED -> {
                if (waffle.status.hungry > 30) {
                    throw Exception403("배불러")
                }
                waffle.status.hungry = 100.0
            }

            ActionType.WATER -> {
                if (waffle.status.thirsty > 30) {
                    throw Exception403("목 안말라")
                }
                waffle.status.thirsty = 100.0
            }

            ActionType.BATHE -> {
                if (waffle.status.cleanliness > 30) {
                    throw Exception403("아직 뽀송뽀송해")
                }
                waffle.status.cleanliness = 100.0
            }

            ActionType.CURE -> {
                if (waffle.status.health > 30) {
                    throw Exception403("이미 건강해")
                }
                waffle.status.health = 100.0
            }
        }
        val userAction = UserAction.create(user, action, waffle)
        userActionRepository.save(userAction)
    }

    fun getHistories(waffleId: Long): List<UserActionDto> {
        val histories = userActionRepository.findAllByWaffleIdOrderByCreatedAtDesc(waffleId)
        return histories.map { UserActionDto.of(it) }
    }

    fun getRanking(waffleId: Long): RankingDto {
        val waffle = waffleRepository.findByIdOrNull(waffleId) ?: throw Exception404("404")
        val users = userRepository.findAllByWaffleId(waffleId)
        var total = 0.0
        for (user in users) {
            total += user.score
        }
        val userDtos = mutableListOf<UserDto>()
        for (user in users) {
            userDtos.add(UserDto(user.username, user.score / total))
        }
        userDtos.sortByDescending { it.contribution }
        return RankingDto(WaffleDto.of(waffle), userDtos)
    }

    fun poll(waffleId: Long): PollingDto {
        val waffle = waffleRepository.findByIdOrNull(waffleId) ?: throw Exception404("404")
        val lastUserAction = userActionRepository.findByWaffleIdOrderByCreatedAtDesc(waffleId)
        return PollingDto(WaffleDto.of(waffle), UserActionDto.of(lastUserAction))
    }
}
