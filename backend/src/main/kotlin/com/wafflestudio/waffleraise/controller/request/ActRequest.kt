package com.wafflestudio.waffleraise.controller.request

import com.wafflestudio.waffleraise.entity.ActionType

data class ActRequest(
    val userId: Long,
    val waffleId: Long,
    val actionType: ActionType
)
