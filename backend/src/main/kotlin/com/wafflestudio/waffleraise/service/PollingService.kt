package com.wafflestudio.waffleraise.service

import com.wafflestudio.waffleraise.controller.response.PollingDto
import com.wafflestudio.waffleraise.controller.response.UserActionDto
import com.wafflestudio.waffleraise.controller.response.WaffleDto
import com.wafflestudio.waffleraise.exception.Exception404
import com.wafflestudio.waffleraise.repository.UserActionRepository
import com.wafflestudio.waffleraise.repository.UserRepository
import com.wafflestudio.waffleraise.repository.WaffleRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
@Transactional
class PollingService(
    private val userRepository: UserRepository,
    private val waffleRepository: WaffleRepository,
    private val userActionRepository: UserActionRepository
) {

    fun poll(userId: Long, waffleId: Long): PollingDto {
        val user = userRepository.findByIdOrNull(userId) ?: throw Exception404("404")
        val waffle = waffleRepository.findByIdOrNull(waffleId) ?: throw Exception404("404")
        val userActions =
            userActionRepository.findAllByCreatedAtBetweenAndWaffleIdOrderByCreatedAtDesc(
                user.lastOnline!!,
                LocalDateTime.now(),
                waffleId
            )
        val userActionsDto = userActions.map { UserActionDto.of(it) }

        return PollingDto(WaffleDto.of(waffle), userActionsDto)
    }
}
