import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />  {/* Ensures pages load dynamically */}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
