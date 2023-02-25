package com.wafflestudio.waffleraise.controller.response

import com.wafflestudio.waffleraise.entity.Waffle
import com.wafflestudio.waffleraise.entity.WaffleStatus
import kotlin.math.roundToInt

data class WaffleDto(
    val status: WaffleStatus,
    val level: Int
) {
    companion object {
        fun of(waffle: Waffle): WaffleDto {
            return WaffleDto(
                status = WaffleStatus(
                    hungry = String.format("%.1f", waffle.status.hungry).toDouble(),
                    thirsty = String.format("%.1f", waffle.status.thirsty).toDouble(),
                    cleanliness = String.format("%.1f", waffle.status.cleanliness).toDouble(),
                    health = String.format("%.1f", waffle.status.health).toDouble()
                ),
                level = waffle.level / 50 + 1
            )
        }
    }
}
