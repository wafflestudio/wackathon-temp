package com.wafflestudio.waffleraise.entity

import jakarta.persistence.*

@Entity
data class Action(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L,
    @Enumerated(EnumType.STRING)
    val type: ActionType,
)

enum class ActionType(val score: Int) {
    FEED(2), WATERING(1), BATHE(4), CURE(20)
}
