package com.wafflestudio.waffleraise.repository

import com.wafflestudio.waffleraise.entity.UserAction
import org.springframework.data.jpa.repository.JpaRepository

interface UserActionRepository : JpaRepository<UserAction, Long> {
    fun findTopByWaffleIdOrderByCreatedAtDesc(waffleId: Long): UserAction?

    fun findAllByWaffleIdOrderByCreatedAtDesc(waffleId: Long): List<UserAction>
}
