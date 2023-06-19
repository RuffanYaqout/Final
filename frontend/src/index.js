/*import React from 'react';
import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './Styling.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
import Home from './pages/home';
import Registration from "./pages/register"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1> SORRY....</h1>
  },
  {
    path: "/home.js",
    element: <Home/>,
    errorElement:<h1> SORRY....</h1>
  },
  {
    path: "/register",
    element: <Registration/>,

  },
]);
ReactDOM.render(
<createBrowserRouter>
<App />
</createBrowserRouter>,
document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
  document.getElementById('root')
);*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

