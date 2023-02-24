package com.wafflestudio.waffleraise.repository

import com.wafflestudio.waffleraise.entity.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long> {
}
