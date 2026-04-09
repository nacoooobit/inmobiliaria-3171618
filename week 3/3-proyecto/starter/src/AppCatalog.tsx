import React from "react";
import Catalog from "./catalog/components/Catalog";
import Navbar from "./components/Navbar";

export const AppCatalog: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Catalog />
      </main>
    </>
  );
};

export default AppCatalog;
