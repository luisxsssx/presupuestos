import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './auth/AuthProvider';
import Productos from './routes/Dashboard/Productos';
import Presupuestos from './routes/Dashboard/Presupuestos';
import Historial from './routes/Dashboard/Historial';
import Clientes from './routes/Dashboard/Clientes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/productos",
        element: <Productos />
      },
      {
        path: "/presupuestos",
        element: <Presupuestos />
      },
      {
        path: "/historial",
        element: <Historial />
      },
      {
        path: "/clientes",
        element: <Clientes />
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)