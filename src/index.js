import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login';
import CreateAccount from './components/createAccount';
import Layout from './components/layout';
import NoteEdit from './components/noteEdit';
import Note from './components/note';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'create-account/',
    element: <CreateAccount />
  },
  {
    path: 'home/:username',
    element: <Layout />,
    children: [
      {
        path: 'create-note/',
        element: <Note />
      },
      {
        path: 'edit-note/',
        element: <NoteEdit />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
