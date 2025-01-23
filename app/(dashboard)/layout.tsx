import React from "react";
const Layout = ({children} : {children : React.ReactNode})=>{
    return (
        <div>
            <h1 className="text-red-300">
               Dashboard Navbar 
            </h1>
            {children}
            <h1 className="text-red-300">
               Dashboard Footer
            </h1>
        </div>
    )
}
export default Layout;