package com.wafflestudio.waffleraise.controller

import com.wafflestudio.waffleraise.controller.request.ActRequest
import com.wafflestudio.waffleraise.service.ActionService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class ActionController(
    private val actionService: ActionService
) {

    @PostMapping("/act")
    fun act(@RequestBody actRequest: ActRequest) {
        actionService.act(actRequest.userId, actRequest.waffleId, actRequest.actionType)
    }
}
