package com.zhuixun.api.auth;

import java.util.List;

public record CurrentUser(String id, String displayName, List<String> roles) {
}
