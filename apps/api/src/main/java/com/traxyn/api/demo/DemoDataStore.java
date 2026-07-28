package com.traxyn.api.demo;

import com.traxyn.api.feed.FeedItem;
import com.traxyn.api.people.Follow;
import com.traxyn.api.people.Person;
import com.traxyn.api.people.PlatformAccount;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.List;

@Component
public class DemoDataStore {
    private final List<Person> people = List.of(
            new Person("person-ada", "Ada Chen", "AI builders", "Tracks practical AI product systems."),
            new Person("person-maya", "Maya Lin", "Media thinkers", "Writes about information diets and trust.")
    );

    private final List<PlatformAccount> platformAccounts = List.of(
            new PlatformAccount("account-ada-blog", "person-ada", "Blog", "@ada-notes", "https://example.com/ada"),
            new PlatformAccount("account-ada-youtube", "person-ada", "YouTube", "@adabuilds", "https://example.com/ada/videos"),
            new PlatformAccount("account-maya-rss", "person-maya", "RSS", "@maya-digest", "https://example.com/maya")
    );

    private final List<Follow> follows = List.of(
            new Follow("follow-ada", "demo-user", "person-ada", Instant.parse("2026-07-27T00:00:00Z")),
            new Follow("follow-maya", "demo-user", "person-maya", Instant.parse("2026-07-27T00:05:00Z"))
    );

    private final List<FeedItem> feedItems = List.of(
            new FeedItem(
                    "feed-001",
                    "person-ada",
                    "account-ada-blog",
                    "Ada Chen",
                    "Blog",
                    "https://example.com/ada/post-1",
                    Instant.parse("2026-07-27T08:10:00Z"),
                    "A short note about designing durable AI workflows with explicit review gates.",
                    "Ada Chen 讨论了用明确验收门禁来构建更可靠的 AI 工作流。",
                    List.of("AI workflow", "release gate")
            ),
            new FeedItem(
                    "feed-002",
                    "person-maya",
                    "account-maya-rss",
                    "Maya Lin",
                    "RSS",
                    "https://example.com/maya/post-7",
                    Instant.parse("2026-07-27T07:40:00Z"),
                    "A media diet works best when the reader can trace every summary back to its source.",
                    "Maya Lin 强调摘要必须能追溯到原始来源。",
                    List.of("source traceability", "media")
            )
    );

    public List<Person> people() {
        return people;
    }

    public List<PlatformAccount> platformAccounts() {
        return platformAccounts;
    }

    public List<Follow> follows() {
        return follows;
    }

    public List<FeedItem> feedItems() {
        return feedItems;
    }
}
