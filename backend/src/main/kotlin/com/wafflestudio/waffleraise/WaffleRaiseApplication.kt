package com.wafflestudio.waffleraise

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class WaffleRaiseApplication

fun main(args: Array<String>) {
	runApplication<WaffleRaiseApplication>(*args)
}
