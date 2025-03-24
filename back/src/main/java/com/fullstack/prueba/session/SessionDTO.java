package com.fullstack.prueba.session;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SessionDTO {
    private String id;
    private Timestamp timestamp;
    private String user;
    private boolean active;
    private int timeout;
}
