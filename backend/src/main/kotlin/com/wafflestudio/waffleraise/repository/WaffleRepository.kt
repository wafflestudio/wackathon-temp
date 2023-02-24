package com.wafflestudio.waffleraise.repository

import com.wafflestudio.waffleraise.entity.Waffle
import org.springframework.data.jpa.repository.JpaRepository

interface WaffleRepository : JpaRepository<Waffle, Long> {
}
