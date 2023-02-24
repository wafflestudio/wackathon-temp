package com.wafflestudio.waffleraise.controller.response

import com.wafflestudio.waffleraise.entity.User

data class UserDto(
    val username: String,
    val contribution: Double
)
