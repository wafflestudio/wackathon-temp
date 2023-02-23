package com.wafflestudio.waffleraise.entity

import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.Id

@Entity
data class Action(
    @Id
    val id: Long,
    @Enumerated(EnumType.STRING)
    val type: ActionType,
    val score: Int
)

enum class ActionType {
    EAT, DRINK
}
