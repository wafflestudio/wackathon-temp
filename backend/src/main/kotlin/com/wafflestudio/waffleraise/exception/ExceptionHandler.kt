package com.wafflestudio.waffleraise.exception

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class ExceptionHandler {
    @ExceptionHandler(value = [Exception::class])
    fun handle(e: Exception) = ResponseEntity<Any>(e.message, e.status)
}
