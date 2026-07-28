package com.traxyn.api.people;

public record PlatformAccount(
        String id,
        String personId,
        String platform,
        String handle,
        String profileUrl
) {
}
