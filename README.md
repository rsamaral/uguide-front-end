# UGUIDE

## Description

UGuide is a full-stack web application designed to connect **tour guides** and **tourists** through customizable tour packages. Guides can create and manage their own tour packages (title, description, date, city, time, price), while authenticated users can browse the platform and interact with available tours. The project was built to practice and demonstrate real-world full-stack development concepts, including **authentication**, **role-based access control**, **Redux state management**, and **client–server communication** over a REST API.

On the frontend, UGuide is a Single Page Application (SPA) built with React. Navigation is handled with React Router, allowing the UI to update without full page reloads. Global state (auth, user info, tour lists, feedback messages) is managed with Redux so that data can be shared across screens reliably. On the backend, UGuide uses Node.js + Express to expose a set of API endpoints, and MongoDB (via Mongoose) to persist users, roles, and tours. Authentication uses JSON Web Tokens (JWT), and passwords are hashed with bcrypt.

A key goal of the project was to build the “full loop” of a typical product feature: register/login → authenticated session → role-based capabilities → CRUD operations (create and delete tours) → data persistence → UI updates through Redux.

---

## Main Features

- **Authentication**
  - User registration and login.
  - JWT-based authentication and session persistence on the client (localStorage).
  - Logout clears session state.
- **Role-based access control**
  - Users have roles: `tourist`, `guide`, and `admin`.
  - Role validation ensures the server can enforce business rules regardless of UI state.
- **Tour management**
  - Guides can create new tour packages using the Add Tour form.
  - Guides can view packages they created (“My Packages”).
  - Guides can delete packages they own.
- **SPA Navigation**
  - Client-side routing between pages (`/loginPage`, `/registerPage`, `/add`, `/mypackages`, etc.).
  - UI changes instantly on route updates without forcing a browser refresh.

---

## Project Structure and File Overview

This section explains what the most important files and directories contain and how they work together.

### Frontend (React)

**`src/components/Header/Header.js`**  
Defines the main application shell: navigation menu + routing table (React Router `Switch`/`Route`). This file is responsible for rendering the correct page component based on the current URL and for showing different navigation options depending on whether the user is logged in.  
A notable detail is that I split the component to ensure routing hooks like `useLocation` run inside the Router context (see “Design Choices” below).

**`src/pages/Login/Login.js`**  
Implements the login UI. It dispatches the Redux `login` action and, on success, navigates to the next screen. It also shows error messages stored in the global `message` reducer.

**`src/pages/Register/Register.js`**  
Implements user registration. The form sends user data (including roles) to the backend. One important requirement is that `roles` must be sent as an **array**, e.g. `["guide"]`, because the backend validates role inputs.

**`src/components/AddTour/AddTour.js`**  
Implements the “Add Tour” feature. It collects tour details from a form and dispatches `createTour` to call the backend. When a tour is created successfully, the UI shows a confirmation message and navigates the user to “My Packages” (`/mypackages`) so they can see the new item in the list.  
This component also supports a future “edit” flow by optionally pre-filling the form if an `editTour` prop is provided.

**`src/pages/Tours/Tours.js`**  
Implements the “My Packages” page. It loads tours for the current guide by dispatching `findByGuide(currentUser.id)` when the page mounts (and when the user changes). It renders each tour and provides a delete button that dispatches `deleteTour(id)`.

**`src/services/auth.service.js`** and **`src/services/tour.service.js`**  
Service files centralize the HTTP calls (Axios) to the backend. This keeps the components simpler and makes it easier to change base URLs or endpoints in one place. For example, `tour.service.js` exposes methods like `create`, `getAll`, `findByGuide`, and `delete`.

**Redux: `src/actions/*` and `src/reducers/*`**

- `src/actions/auth-actions/` contains login/register/logout actions, and message actions used for UI feedback.
- `src/actions/uguide-actions/tour.js` contains tour actions (`createTour`, `findByGuide`, `deleteTour`, etc.).
- Reducers store the current auth state (`isLoggedIn`, `user`), tours list, and global messages.

### Backend (Node/Express + MongoDB)

**`server.js` (or main Express entry file)**  
Creates the Express app, sets up middleware (`express.json`, `cors`), connects to MongoDB, loads routes, and starts the server. It also initializes default roles in the database if they do not exist (tourist/guide/admin).

**`models/index.js`**  
Centralizes Mongoose initialization and exports models and configuration. It creates and exports references like `db.user`, `db.role`, and `db.ROLES` for validation and seeding.

**`models/role.model.js` / `models/user.model.js` / `models/uguide.model.js`**  
Defines Mongoose schemas and models. The Role model stores role names and is used during signup and role validation. The User model stores user profile info and hashed password. The Tour model stores tour package data and references to guide/tourist.

**`controllers/auth.controller.js`**  
Contains `signup` and `signin` handlers. `signup` hashes the password and assigns roles. `signin` validates credentials, builds an authorities list like `ROLE_GUIDE`, and returns a JWT token and user info to the client.

**`routes/auth.routes.js`** and **`routes/uguide.routes.js`**  
Defines REST endpoints used by the frontend. For example:

- `/api/auth/signup` and `/api/auth/signin` for authentication
- `/tour`, `/tour/guide/:guideId`, `/tour/id/:id` for tour operations

**`middlewares/verifySignUp.js`** (and related middleware)  
Validates input during signup (duplicate email checks, role existence checks). This is important because it enforces the rules server-side, even if the client sends incorrect data.

---

## Design Choices and Trade-offs

**1) Redux for global state**  
I chose Redux because authentication state, the current user, and tour lists need to be shared across multiple pages. Redux also makes it easier to show consistent error/success messages and keeps the logic for API calls in one place (actions + services).

**2) Roles as server-side truth**  
Even though the UI can hide features from a tourist and show them to a guide, the backend must still enforce permissions. That’s why roles are validated on signup and stored in MongoDB, and why the server checks roles rather than relying only on frontend logic.

**3) Avoiding full page reloads**  
At first, I used `window.location.reload()` after `history.push()` to “force” the new screen to appear. This caused problems because it wipes runtime state and can result in navigation bugs. The correct approach is to rely on React Router navigation and trigger data refreshes through Redux actions (for example, loading the guide’s tours on page mount). After restructuring the Router usage, navigation worked reliably without reloads.

**4) Route hooks inside Router**  
React Router hooks like `useLocation()` only work within a Router context. To clear UI messages when changing routes, I used `useLocation().pathname` in an effect. This required splitting the Header component so that `useLocation()` runs inside the Router instead of in the same component that creates the Router.

---

## How to Run

1. **Backend**

   - Install dependencies: `npm install`
   - Configure MongoDB connection string in your config
   - Start server: `npm start` (server runs on `http://localhost:8080`)

2. **Frontend**
   - Install dependencies: `npm install`
   - Start React app: `npm start` (client runs on `http://localhost:3000`)

---

## Future Improvements

- Booking flow (tourist books a tour) + payment integration
- Better error handling and user-facing notifications
- Tests (unit + integration) for critical flows
- UI polish and accessibility review

---
