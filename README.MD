<img src="https://github.com/user-attachments/assets/cf4d0986-cddb-4b36-aecd-3b33b3b5f5fe" alt="Project Screenshot" width="700" />

# 🔥 Foc API Rest - 16/06/2025

API RESTful para la gestión de usuarios y roles, construida con Node.js y Express. Incluye validaciones robustas, arquitectura modular y middlewares optimizados.

---

## 📘 Descripción

Foc API Rest es un backend que permite gestionar usuarios y roles mediante endpoints REST. Está diseñada para ser fácil de mantener y escalar, con validaciones sólidas y separación clara de responsabilidades.

---

## 🚀 Características

- Arquitectura modular (rutas, controladores, validadores, middlewares)
- Validación de datos con `express-validator`
- CRUD completo para usuarios y roles
- Middleware para manejo eficiente de errores
- Respuestas en formato JSON

---

## 🛠️ Tecnologías utilizadas

- **Node.js** – Entorno de ejecución backend
- **Express.js** – Framework para APIs REST
- **express-validator** – Validación de datos
- **cors** – Permite peticiones desde otros orígenes
- **dotenv** – Variables de entorno

---

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Tuteque-man/Foc-API-Rest.git
   cd Foc-API-Rest-16-06-2025
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. (Opcional) Crea un archivo `.env` en la raíz y define el puerto si lo deseas:
   ```env
   API_PORT=3500
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```

El servidor estará disponible en `http://localhost:3500` (o el puerto que definas).

---

## 📚 Endpoints principales

### Roles
- `GET    /api/role`           → Listar todos los roles
- `GET    /api/role/:id`       → Obtener un rol por ID
- `POST   /api/role`           → Crear un nuevo rol
- `PUT    /api/role/:id`       → Actualizar un rol
- `DELETE /api/role/:id`       → Eliminar un rol

### Usuarios
- `GET    /api/user`                       → Listar todos los usuarios
- `GET    /api/user/:id/:role_id/:status`  → Obtener un usuario por ID, rol y estado
- `POST   /api/user`                       → Crear un nuevo usuario
- `PUT    /api/user/:id/:role_id/:status`  → Actualizar un usuario
- `DELETE /api/user/:id/:role_id/:status`  → Eliminar un usuario

---

## 🧪 Ejemplo de uso (con curl)

```bash
# Crear un rol
curl -X POST http://localhost:3500/api/role \
  -H "Content-Type: application/json" \
  -d '{"name": "admin"}'

# Listar usuarios
curl http://localhost:3500/api/user
```

---

## 📁 Estructura del proyecto

```
Foc-Api-Rest-16-06-2025/
├── src/
│   ├── app.js                # Punto de entrada
│   ├── server/
│   │   └── server.js         # Configuración del servidor
│   ├── controllers/          # Lógica de negocio (usuarios, roles)
│   ├── routes/               # Definición de rutas
│   ├── validators/           # Validaciones de datos
│   └── middleware/           # Middlewares personalizados
├── package.json
├── README.MD
└── mensaje.txt
```

---

## 👤 Autor
- Angello

## 📝 Licencia
Este proyecto está bajo la licencia ISC.
