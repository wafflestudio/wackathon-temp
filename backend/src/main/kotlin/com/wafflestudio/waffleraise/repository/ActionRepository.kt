package com.wafflestudio.waffleraise.repository

import com.wafflestudio.waffleraise.entity.Action
import com.wafflestudio.waffleraise.entity.ActionType
import org.springframework.data.jpa.repository.JpaRepository

interface ActionRepository : JpaRepository<Action, Long> {
    fun findByType(type: ActionType): Action
}
