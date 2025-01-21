# User Management Dashboard

This is a React-based User Management Dashboard that allows users to view, add, edit, and delete user details. The application includes features like pagination, loading indicators, and user feedback messages. It has been deployed on [Vercel](https://user-management-dashboard-chi.vercel.app/).

---

## Features

1. **View Users:** Displays a list of users in a responsive table.
2. **Pagination:** Users can navigate through pages if the user list is large.
3. **Add Users:** Add new user details using a form.
4. **Edit Users:** Update user details through a pre-filled form.
5. **Delete Users:** Remove a user from the list.
6. **Loading Indicator:** Shows a loading message when data is being fetched.
7. **No User Message:** Displays a message if no users are available.
8. **Responsive Design:** Built with React Bootstrap for responsiveness.
9. **Icons:** Utilizes `react-icons` for edit and delete actions.

---

## Future Enhancements

1. **Dark and Light Modes:** Add theme switching functionality.
2. **Login Page:** Implement authentication for users.
3. **Enhanced API Integration:** Use real APIs for backend interactions.
4. **Search and Filter:** Add search and filter functionality to the user list.

---

## Installation and Setup Instructions

### Prerequisites

- Node.js (>=14)
- npm or yarn

### Steps to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adityaamaiya/user-management-dashboard
   cd user-management-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open the app in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## Deployment

This project is deployed on Vercel. To deploy your version:

1. Push the code to a GitHub repository.
2. Connect the repository to Vercel.
3. Deploy the application by following Vercel's instructions.

### Live Demo

[User Management Dashboard on Vercel](https://user-management-dashboard-chi.vercel.app/)

---

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── UserList.jsx
│   └── UserForm.jsx
├── pages/
│   ├── Home.js
│   ├── AddUser.js
│   └── EditUser.js
├── services/
│   └── api.js
├── App.js
├── index.css
└── index.js
```

---

## Challenges Faced

1. **Pagination Logic:** Implementing efficient slicing and navigation for paginated data.
2. **State Management:** Ensuring proper updates to the user list on add/edit/delete operations.
3. **Responsive Design:** Making the table and UI elements look good across different screen sizes.

### How They Were Overcome

- Used React's `useState` and `useEffect` for state and lifecycle management.
- Applied React Bootstrap for consistent styling and responsiveness.
- Added fallback messages for loading and empty user states.

---

## Tech Stack

- **Frontend:** React, React Bootstrap, React Icons
- **HTTP Client:** Axios
- **Deployment:** Vercel

---

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm run build`

Builds the app for production.

### `npm test`

Runs test cases.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
