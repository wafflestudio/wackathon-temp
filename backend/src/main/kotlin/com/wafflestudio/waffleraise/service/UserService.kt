package com.wafflestudio.waffleraise.service

import com.wafflestudio.waffleraise.controller.response.MyPageDto
import com.wafflestudio.waffleraise.controller.response.UserDto
import com.wafflestudio.waffleraise.controller.response.WaffleDto
import com.wafflestudio.waffleraise.exception.Exception404
import com.wafflestudio.waffleraise.repository.UserRepository
import com.wafflestudio.waffleraise.repository.WaffleRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class UserService(
    private val userRepository: UserRepository
) {

    fun getMyPage(userId: Long): MyPageDto {
        val me = userRepository.findByIdOrNull(userId) ?: throw Exception404("404")
        val users = userRepository.findAllByWaffleId(me.waffle.id)
        var total = 0.0
        for (user in users) {
            total += user.score
        }
        return MyPageDto(WaffleDto.of(me.waffle), UserDto(me.username, me.score / total))
    }
}
