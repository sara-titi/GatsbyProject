import React from "react";
import Navbar from "@components/Navbar";
import { CopyWrite } from "./styledComponent";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />

      <div className="content">{children}</div>
      {/* <div >
        <CopyWrite className='text-center'>copywrite @2022 </CopyWrite>

      </div> */}
    </div>
  );
}
