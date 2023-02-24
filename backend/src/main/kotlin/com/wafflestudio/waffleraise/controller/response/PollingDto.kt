package com.wafflestudio.waffleraise.controller.response

data class PollingDto(
    val waffle: WaffleDto,
    val userActions: List<UserActionDto>
)
