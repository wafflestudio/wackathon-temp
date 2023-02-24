package com.wafflestudio.waffleraise.controller

import com.wafflestudio.waffleraise.controller.response.MyPageDto
import com.wafflestudio.waffleraise.service.UserService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UserController(
    private val userService: UserService
) {

    @GetMapping("/{user-id}")
    fun getMyPage(@PathVariable("user-id") userId: Long): MyPageDto {
        return userService.getMyPage(userId)
    }
}
