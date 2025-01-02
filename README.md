# CreateStackx 🚀

CreateStackx is a CLI tool that helps you quickly initialize full-stack projects. It allows you to create both frontend (React with Vite) and backend (Node.js with Express) projects with customizable dependencies, enabling you to kickstart your development with minimal setup.

---

## Features ✨
- 🖥️ **Frontend**: Initializes a React project with Vite and Tailwind CSS.
- 🛠️ **Backend**: Initializes a Node.js backend with Express and Mongoose, allowing you to choose the required dependencies.
- ⚡ **Full-stack**: Initializes both frontend and backend projects for full-stack applications in one command.
- 📦 **Dependency Management**: Choose the dependencies you need for the backend, including popular libraries like Express, Mongoose, and more.
  
---

## Installation 📦

To get started, you need to install CreateStackx globally on your system.

### Install globally:
```bash
npm install -g create-stackx
```

---

## Usage 🧑‍💻

### 1. **Initialize a Frontend Project**:
Use this command to create a React project with Vite and Tailwind CSS.
```bash
create-stackx init:frontend <projectName>
```

#### Example:
```bash
create-stackx init:frontend my-frontend-app
```

### 2. **Initialize a Backend Project**:
Use this command to create a Node.js backend with Express and Mongoose. You'll also be able to select the dependencies you want to install.
```bash
create-stackx init:backend <projectName>
```

#### Example:
```bash
create-stackx init:backend my-backend-app
```

### 3. **Initialize a Full-stack Project**:
This command initializes both frontend and backend projects in one go.
```bash
create-stackx init <projectName>
```

#### Example:
```bash
create-stackx init my-fullstack-app
```

---

## Dependencies 💻

When initializing the backend, you'll have the option to select from the following popular dependencies:

- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling for Node.js.
- `dotenv`: Loads environment variables from `.env` files.
- `cors`: Enables Cross-Origin Resource Sharing (CORS) for your backend.
- `bcrypt`: Library for password hashing.
- `jsonwebtoken`: JSON Web Tokens for authentication.
- `nodemon`: Automatically restarts your server during development.

---

## Commands 📜

| Command                          | Description                                          |
|----------------------------------|------------------------------------------------------|
| `init:frontend <projectName>`    | Initialize a frontend project with React and Vite.   |
| `init:backend <projectName>`     | Initialize a backend project with Node.js and Express. |
| `init <projectName>`             | Initialize a full-stack project (frontend + backend). |

---

## Example Workflow ⚙️

1. **Initialize a Full-Stack Project**:
   ```bash
   create-stackx init my-fullstack-app
   ```

2. **Select Backend Dependencies**:
   When prompted, select the backend dependencies you need (e.g., Express, Mongoose, etc.).

3. **Run your Frontend and Backend**:
   After installation, go into each directory and run the appropriate commands:
   - For the frontend: `npm run dev`
   - For the backend: `npm start`

---

## Contributing 🤝

Feel free to open issues, fork the repository, or submit pull requests. Contributions are always welcome!

### To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## License 📄

MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contact 📧

For any questions, feel free to reach out to:
- **Email**: [brijeshpujari333@gmail.com](mailto:brijeshpujari333@gmail.com)
- **GitHub**: [https://github.com/brijesh1802](https://github.com/brijesh1802)

---

