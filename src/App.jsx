//Metode inde i metode:
//Vores routing sker herinde, hvor det starter med den koblet til MainLayout (/)
//Herefter tilføjes vores paths,gennem deres respektive pages


import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import UserPage from './page/UserPage';
import AdminPage from './page/AdminPage';
import { useState } from 'react';

function App() {

const [isAdmin, setIsAdmin] = useState(false);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="user" element={<UserPage  isAdmin={isAdmin}/>} />
      <Route path="admin" element={<AdminPage isAdmin={isAdmin} />} />
    </Route>
  )
);



  return <RouterProvider router={routes} />;
}

export default App;