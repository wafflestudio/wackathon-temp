package com.wafflestudio.waffleraise.controller

import com.wafflestudio.waffleraise.controller.request.PollingRequest
import com.wafflestudio.waffleraise.controller.response.PollingDto
import com.wafflestudio.waffleraise.service.PollingService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class PollingController(
    private val pollingService: PollingService
) {

    @PostMapping("/poll")
    fun poll(@RequestBody pollingRequest: PollingRequest): PollingDto {
        return pollingService.poll(pollingRequest.userId, pollingRequest.waffleId)
    }
}
