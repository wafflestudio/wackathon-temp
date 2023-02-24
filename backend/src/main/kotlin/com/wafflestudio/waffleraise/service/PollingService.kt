package com.wafflestudio.waffleraise.service

import com.wafflestudio.waffleraise.controller.response.PollingDto
import com.wafflestudio.waffleraise.controller.response.UserActionDto
import com.wafflestudio.waffleraise.controller.response.WaffleDto
import com.wafflestudio.waffleraise.exception.Exception404
import com.wafflestudio.waffleraise.repository.UserActionRepository
import com.wafflestudio.waffleraise.repository.WaffleRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class PollingService(
    private val waffleRepository: WaffleRepository,
    private val userActionRepository: UserActionRepository
) {

    fun poll(waffleId: Long): PollingDto {
        val waffle = waffleRepository.findByIdOrNull(waffleId) ?: throw Exception404("404")
        val lastUserAction = userActionRepository.findByWaffleIdOrderByCreatedAtDesc(waffleId)
        return PollingDto(WaffleDto.of(waffle), UserActionDto.of(lastUserAction))
    }
}
