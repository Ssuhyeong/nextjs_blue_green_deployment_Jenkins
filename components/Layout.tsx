import React from "react";
import NavBar from "./NavBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
