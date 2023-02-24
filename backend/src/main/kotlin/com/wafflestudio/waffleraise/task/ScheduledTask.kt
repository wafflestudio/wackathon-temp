package com.wafflestudio.waffleraise.task

import com.wafflestudio.waffleraise.repository.WaffleRepository
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional

@Component
@Transactional
class ScheduledTask(private val waffleRepository: WaffleRepository) {

    @Scheduled(fixedDelay = 1000)
    fun changeState() {
        val waffles = waffleRepository.findAll()
        for (waffle in waffles) {
            waffle.status.hungry -= 1
            waffle.status.thirsty -= 2
            waffle.status.cleanliness -= 0.5
            waffle.status.sickness -= 0.1
            if (waffle.status.hungry < 0) {
                waffle.status.hungry = 0.0
            }
            if (waffle.status.thirsty < 0) {
                waffle.status.thirsty = 0.0
            }
            if (waffle.status.cleanliness < 0) {
                waffle.status.cleanliness = 0.0
            }
            if (waffle.status.sickness < 0) {
                waffle.status.sickness = 0.0
            }
        }
    }
}
