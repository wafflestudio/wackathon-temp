package com.wafflestudio.waffleraise.repository

import com.wafflestudio.waffleraise.entity.Action
import org.springframework.data.jpa.repository.JpaRepository

interface ActionRepository : JpaRepository<Action, Long> {

}
