package com.wafflestudio.waffleraise.service

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
class ActionService(
    private val userRepository: UserRepository,
    private val waffleRepository: WaffleRepository,
    private val userActionRepository: UserActionRepository
) {

    fun feed(userId: Long, waffleId: Long) {
        val user = userRepository.findByIdOrNull(userId) ?: throw Exception404("404")
        val waffle = waffleRepository.findByIdOrNull(waffleId) ?: throw Exception404("404")
        val action = Action(type = ActionType.FEED)
        user.score += action.type.score
        waffle.status.hungry = 100.0
        val userAction = UserAction.create(user, action, waffle)
        userActionRepository.save(userAction)
    }
}
