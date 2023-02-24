package com.wafflestudio.waffleraise.controller

import com.wafflestudio.waffleraise.controller.request.ActRequest
import com.wafflestudio.waffleraise.controller.response.RankingDto
import com.wafflestudio.waffleraise.controller.response.UserActionDto
import com.wafflestudio.waffleraise.service.WaffleService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class WaffleController(
    private val waffleService: WaffleService
) {

    @PostMapping("/act")
    fun act(@RequestBody actRequest: ActRequest) {
        waffleService.act(actRequest.userId, actRequest.waffleId, actRequest.actionType)
    }

    @GetMapping("/{waffle-id}/histories")
    fun getHistories(@PathVariable("waffle-id") waffleId: Long): List<UserActionDto> {
        return waffleService.getHistories(waffleId)
    }

    @GetMapping("/{waffle-id}/ranking")
    fun getRanking(@PathVariable("waffle-id") waffleId: Long): RankingDto {
        return waffleService.getRanking(waffleId)
    }
}
