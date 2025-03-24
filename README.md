# Prueba Fullstack

## API Endpoints  

- `GET /session/{id}` – Obtener una sesión por id
- `GET /session/` – Obtener todas las sesiones
- `POST /session/` – Crear una nueva sesión
- `DELETE /session/{id}` – Eliminar una sesión por id

## Frontend  

Para correr el frontend, ejecutar los siguientes comandos:

```bash
cd front
npm install
npm start
```

El frontend corre en `http://localhost:3000`. Podemos ir a `http://localhost:3000/user` para ver la vista de un usuario normal 
y a `http://localhost:3000/admin` para ver la vista de un usuario administrador.

## Backend
Para el backend se usa Spring Boot con Java 17 y gradle. Para correr el backend, ejecutar los siguientes comandos:

```bash
cd back
./gradlew build
./gradlew bootRun
```

El backend corre en `http://localhost:8080`.