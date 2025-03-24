package com.fullstack.prueba.session;

import java.sql.Timestamp;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class Session {
    private String id;
    private Timestamp timestamp;
    private String user;
    private boolean active;
    private int timeout;

    @JsonIgnore
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);

    public Session(String id, Timestamp timestamp, String user, int timeout) {
        this.id = id;
        this.timestamp = timestamp;
        this.user = user;
        this.timeout = timeout;
        this.active = true;

        scheduler.schedule(() -> {
            this.active = false;
        }, timeout, java.util.concurrent.TimeUnit.SECONDS);
    }

}
