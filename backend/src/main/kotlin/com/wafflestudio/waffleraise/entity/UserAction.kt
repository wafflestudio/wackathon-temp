package com.wafflestudio.waffleraise.entity

import javax.persistence.*
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime

@Entity
@EntityListeners(AuditingEntityListener::class)
data class UserAction(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L,
    @CreatedDate
    val createdAt: LocalDateTime? = null,
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "action_id")
    val action: Action,
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "waffle_id")
    val waffle: Waffle
) {
    companion object {
        fun create(user: User, action: Action, waffle: Waffle): UserAction {
            return UserAction(
                user = user,
                action = action,
                waffle = waffle
            )
        }
    }
}
