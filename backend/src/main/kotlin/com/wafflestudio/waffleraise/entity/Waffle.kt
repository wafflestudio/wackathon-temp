package com.wafflestudio.waffleraise.entity

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.OneToMany

@Entity
data class Waffle(
    @Id
    val id: Long,
    val name: String,
    val age: Int,
    @OneToMany(mappedBy = "waffle")
    val owners: MutableList<User> = mutableListOf()
)
