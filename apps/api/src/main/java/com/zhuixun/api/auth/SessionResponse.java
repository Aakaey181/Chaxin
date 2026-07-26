package com.zhuixun.api.auth;

public record SessionResponse(boolean authenticated, CurrentUser user) {
}
