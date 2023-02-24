package com.wafflestudio.waffleraise.controller.response

import com.wafflestudio.waffleraise.entity.Waffle
import com.wafflestudio.waffleraise.entity.WaffleStatus

data class WaffleDto(
    val status: WaffleStatus,
    val level: Int
) {
    companion object {
        fun of(waffle: Waffle): WaffleDto {
            return WaffleDto(
                status = waffle.status,
                level = waffle.level
            )
        }
    }
}
