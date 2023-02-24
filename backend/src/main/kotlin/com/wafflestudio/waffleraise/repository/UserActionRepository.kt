package com.wafflestudio.waffleraise.repository

import com.wafflestudio.waffleraise.entity.UserAction
import com.wafflestudio.waffleraise.entity.Waffle
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDateTime

interface UserActionRepository : JpaRepository<UserAction, Long> {
    fun findAllByCreatedAtBetweenAndWaffleId(
        startDate: LocalDateTime,
        endDate: LocalDateTime,
        waffleId: Long
    ): List<UserAction>

    fun findAllByWaffleId(waffleId: Long): List<UserAction>
}
