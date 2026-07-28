package com.traxyn.api.feed;

import com.traxyn.api.demo.DemoDataStore;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/feed")
public class FeedController {
    private final DemoDataStore dataStore;

    FeedController(DemoDataStore dataStore) {
        this.dataStore = dataStore;
    }

    @GetMapping("/mock")
    List<FeedItem> mockFeed() {
        return dataStore.feedItems();
    }
}
