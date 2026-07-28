package com.traxyn.api.people;

import com.traxyn.api.demo.DemoDataStore;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PeopleController {
    private final DemoDataStore dataStore;

    PeopleController(DemoDataStore dataStore) {
        this.dataStore = dataStore;
    }

    @GetMapping("/people")
    List<Person> people() {
        return dataStore.people();
    }

    @GetMapping("/platform-accounts")
    List<PlatformAccount> platformAccounts() {
        return dataStore.platformAccounts();
    }

    @GetMapping("/follows")
    List<Follow> follows() {
        return dataStore.follows();
    }
}
