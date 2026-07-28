package com.traxyn.api.auth;

public record SessionResponse(boolean authenticated, CurrentUser user) {
}
