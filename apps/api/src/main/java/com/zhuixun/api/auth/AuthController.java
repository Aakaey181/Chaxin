package com.zhuixun.api.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @GetMapping("/session")
    SessionResponse session() {
        return new SessionResponse(true, new CurrentUser("demo-user", "Demo User", List.of("beta")));
    }
}
