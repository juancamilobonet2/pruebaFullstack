package com.fullstack.prueba.session;

import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/session")
@CrossOrigin(origins = "http://localhost:3000")
public class SessionController {
    private final ConcurrentHashMap<String, Session> sessions = new ConcurrentHashMap<>();

    @GetMapping("/{id}")
    public Session getSessionById(@PathVariable("id") String id) {
        return sessions.get(id);
    }

    @GetMapping("/")
    public List<Session> getAllSessions() {
        return List.copyOf(sessions.values());
    }

    @PostMapping("/")
    public Session createSession(@RequestBody String user) {
        String id = UUID.randomUUID().toString();
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Session session = new Session(id, timestamp, user, 10);
        sessions.put(id, session);
        return session;
    }

    @DeleteMapping("/{id}")
    public String destroySession(@PathVariable String id) {
        Session sessionToRemove = sessions.get(id);
        if (sessionToRemove != null) {
            sessionToRemove.setActive(false);
            sessions.remove(id);
            return "Session " + id + " has been terminated.";
        }
        return "Session not found.";
    }
}
