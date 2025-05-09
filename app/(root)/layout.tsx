import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";
import LeftSiderBar from "@/components/navigation/navbar/LeftSiderBar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <LeftSiderBar />
      {children}
    </main>
  );
};

export default RootLayout;
