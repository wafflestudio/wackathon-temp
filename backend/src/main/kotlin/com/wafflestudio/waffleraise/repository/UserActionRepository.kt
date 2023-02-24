package com.wafflestudio.waffleraise.repository

import com.wafflestudio.waffleraise.entity.UserAction
import com.wafflestudio.waffleraise.entity.Waffle
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDateTime

interface UserActionRepository : JpaRepository<UserAction, Long> {
    fun findAllByCreatedAtBetweenAndWaffleIdOrderByCreatedAtDesc(
        startDate: LocalDateTime,
        endDate: LocalDateTime,
        waffleId: Long
    ): List<UserAction>

    fun findAllByWaffleIdOrderByCreatedAtDesc(waffleId: Long): List<UserAction>
}
