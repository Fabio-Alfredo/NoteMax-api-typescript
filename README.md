# NoteMax-api-typescript

An API to manage notes in a web application.

## Facility

Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

# setting
```
PORT=your_port
DB_URI=db_url
JWT_SECRET= secret_key
```

# Wear

To start the API, run:
```
npm run dev
```

# Endpoints

The main API endpoints are detailed below:

### Create a new user

- **Method:** `POST`
- **Path:** `/auth/register`
- **Description:** Create a new user.

### Access

- **Method:** `POST`
- **Path:** `/auth/login`
- **Description:** Sign in and get an authentication token.

### Update user information
- **Method:** `PUT`
- **Path:** `/user`
- **Description:** Change the user information with new ones.

### Update user password
- **Method:** `PATCH`
- **Path:** `/user/pass`
- **Description:** Change the user's password to a new one.

### Delete a user

- **Method:** `DELETE`
- **Path:** `/user/:id`
- **Description:** Delete a specific user by their ID, only for admin and above.

### Get all users

- **Method:** `GET`
- **Path:** `/user`
- **Description:** Gets all users, only admin and above.

### Change a user's role
- **Method:** `PATCH`
- **Path:** `/user/:id`
- **Description:** Change the role of a specific user, only for superadmin and above.

### Get all notes

- **Method:** `GET`
- **Path:** `/notes`
- **Description:** Gets all notes, only admin and above.

### Get notes for a user

- **Method:** `GET`
- **Path:** `/notes/user`
- **Description:** Gets a specific note for the user, you just need the token.

### Create a new note

- **Method:** `POST`
- **Path:** `/notes`
- **Description:** Create a new note.

### Delete a note

- **Method:** `DELETE`
- **Path:** `/notes/:id`
- **Description:** Deletes a specific note by its ID.

### Change content of a note
- **Method:** `PUT`
- **Path:** `/notes/:id`
- **Description:** Changes the content of a specific note.



### Example request (using cURL)
- **curl http://localhost:3000/notes**