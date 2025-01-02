//import Image from "next/image";
import Landing from "./_components/Landing";
import WhatToExpect from "./_components/WhatToExpect";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <div className="w-full h-fit">
      <Landing />      
      <WhatToExpect />
      <Footer />
    </div>
  );
}