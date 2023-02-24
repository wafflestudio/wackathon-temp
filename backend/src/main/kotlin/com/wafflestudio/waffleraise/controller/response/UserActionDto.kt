package com.wafflestudio.waffleraise.controller.response

import com.wafflestudio.waffleraise.entity.ActionType
import com.wafflestudio.waffleraise.entity.UserAction
import java.time.LocalDateTime

data class UserActionDto(
    val createdAt: LocalDateTime?,
    val action: ActionType?,
    val username: String?,
    val userId: Long?
) {
    companion object {
        fun of(userAction: UserAction?): UserActionDto {
            return UserActionDto(
                createdAt = userAction?.createdAt,
                action = userAction?.action?.type,
                username = userAction?.user?.username,
                userId = userAction?.user?.id
            )
        }
    }
}
