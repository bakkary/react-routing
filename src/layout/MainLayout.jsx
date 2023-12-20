import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {

   
    return ( 
        
        <div id="container">

            <div id ="page">
            
            <NavLink to="user">User page</NavLink> |
            <NavLink to="admin"> Admin page</NavLink> |
            <NavLink to="/"> home</NavLink>
        
        <Outlet />

        </div>
      
        <h1> MainLayout skrift</h1>

        </div>
     );
}

export default MainLayout;