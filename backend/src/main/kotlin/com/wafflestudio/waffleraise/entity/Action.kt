package com.wafflestudio.waffleraise.entity

import jakarta.persistence.Entity
import jakarta.persistence.Id

@Entity
data class Action(
    @Id
    val id: Long,
)

