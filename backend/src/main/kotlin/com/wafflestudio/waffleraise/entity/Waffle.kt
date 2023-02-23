package com.wafflestudio.waffleraise.entity

import jakarta.persistence.*

@Entity
data class Waffle(
    @Id
    val id: Long,
    val name: String,
    val age: Int,
    @OneToMany(mappedBy = "waffle")
    val owners: MutableList<User> = mutableListOf(),
    @Enumerated(EnumType.STRING)
    val status: WaffleStatus
)

enum class WaffleStatus {
    HUNGRY, THIRSTY
}
