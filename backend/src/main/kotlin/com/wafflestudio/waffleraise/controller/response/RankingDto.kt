package com.wafflestudio.waffleraise.controller.response

data class RankingDto(
    val waffle: WaffleDto,
    val users: List<UserDto>
)
