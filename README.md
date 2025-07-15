
# 📝 Task Manager (React + Redux + MUI)

A clean and interactive single-page Task Manager app built using **React**, **Redux**, and **Material UI (MUI)**. Designed for internship-level frontend assignment to showcase skills in state management, list rendering, UI logic, and user interaction.

---

## 🚀 Features

- ✅ View a list of tasks
- ➕ Add a new task via a dialog pop-up
- ❌ Delete existing tasks
- 🎯 Filter tasks (All / Completed)
- ✅ Mark task as completed using a dropdown
- 💅 Responsive, accessible UI using MUI components

---

## 🛠️ Tech Stack

| Tool | Description |
|------|-------------|
| [React](https://reactjs.org/) | UI library |
| [Redux](https://redux.js.org/) | Global state management |
| [Material UI](https://mui.com/) | Styled React components |
| [Vite](https://vitejs.dev/) | Build tool (super fast) |

---

## 📂 Folder Structure

src/
src/
│
├── components/
│ └── DialogBox.jsx # Modal for adding new task
├── App.jsx # Main UI layout
├── store.js # Redux store setup
├── todoReducer.js # Reducer logic
└── index.js # Entry point

yaml
Copy
Edit

---

## 📦 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/task-manager.git
cd task-manager

# Install dependencies
npm install

# Start the development server
npm run dev
