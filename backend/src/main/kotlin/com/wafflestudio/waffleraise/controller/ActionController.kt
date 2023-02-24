package com.wafflestudio.waffleraise.controller

import com.wafflestudio.waffleraise.controller.request.FeedRequest
import com.wafflestudio.waffleraise.service.ActionService
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class ActionController(
    private val actionService: ActionService
) {

    @PostMapping("/feed")
    fun feed(@RequestBody feedRequest: FeedRequest) {
        actionService.feed(feedRequest.userId, feedRequest.waffleId)
    }
}
