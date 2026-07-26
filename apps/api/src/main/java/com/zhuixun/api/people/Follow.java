package com.zhuixun.api.people;

import java.time.Instant;

public record Follow(String id, String userId, String personId, Instant createdAt) {
}
