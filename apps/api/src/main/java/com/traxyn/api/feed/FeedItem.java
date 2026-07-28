package com.traxyn.api.feed;

import java.time.Instant;
import java.util.List;

public record FeedItem(
        String id,
        String personId,
        String platformAccountId,
        String personName,
        String platform,
        String sourceUrl,
        Instant publishedAt,
        String originalText,
        String chineseSummary,
        List<String> topicTags
) {
}
