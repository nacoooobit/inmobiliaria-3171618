import React from "react";
import Catalog from "./components/Catalog";
import Navbar from "./components/Navbar";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Catalog />
      </main>
    </>
  );
};

export default App;
