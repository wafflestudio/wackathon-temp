package com.wafflestudio.waffleraise.entity

import javax.persistence.*

@Entity
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
    @JoinColumn(name = "waffle_id")
    val waffle: Waffle
)
