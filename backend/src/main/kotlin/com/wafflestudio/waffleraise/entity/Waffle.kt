package com.wafflestudio.waffleraise.entity

import jakarta.persistence.*

@Entity
data class Waffle(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L,
    val name: String,
    val level: Int,
    @OneToMany(mappedBy = "waffle")
    val owners: MutableList<User> = mutableListOf(),
    @Embedded
    val status: WaffleStatus
)

@Embeddable
class WaffleStatus(
    var hungry: Double = 50.0,
    var thirsty: Double = 50.0,
    var cleanliness: Double = 50.0,
    var sickness: Double = 50.0
)
