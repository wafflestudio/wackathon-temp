package com.wafflestudio.waffleraise

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableJpaAuditing
@EnableScheduling
class WaffleRaiseApplication

fun main(args: Array<String>) {
    runApplication<WaffleRaiseApplication>(*args)
}
