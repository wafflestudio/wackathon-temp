package com.wafflestudio.waffleraise.entity

import jakarta.persistence.*

@Entity
data class User(
    @Id
    val id: Long,
    val username: String,
    val score: Int,
    @OneToMany
    val userActions: MutableList<UserAction> = mutableListOf(),
    @ManyToOne(fetch = FetchType.LAZY)
    val waffle: Waffle
)
