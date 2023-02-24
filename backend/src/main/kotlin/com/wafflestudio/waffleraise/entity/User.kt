package com.wafflestudio.waffleraise.entity

import jakarta.persistence.*
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime

@Entity
@EntityListeners(AuditingEntityListener::class)
@Table(name = "users")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L,
    val username: String,
    var score: Int,
    @OneToMany(mappedBy = "user")
    val userActions: MutableList<UserAction> = mutableListOf(),
    @ManyToOne(fetch = FetchType.LAZY)
    val waffle: Waffle,
    @CreatedDate
    val lastOnline: LocalDateTime? = null
)
