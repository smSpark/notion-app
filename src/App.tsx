import React from "react";
import { Contacts } from "./pages/Contacts/Contacts";
import { SideWindows } from "./pages/SideWindows/SideWindows";


const App: React.FC = () => (
  <>
    <Contacts />
    <SideWindows />
  </>
);

export { App };
