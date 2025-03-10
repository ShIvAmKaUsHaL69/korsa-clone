import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="container nav mx-auto py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Image src="/logo.png" alt="Korsa" width={30} height={30} />
          <div className="flex gap-12 font-MonaSans text-lg font-medium text-[#949494]">
            <Link href="#" className="text-[#000]">Home</Link>
            <Link href="#">Why Us</Link>
            <Link href="#">Services</Link>
            <Link href="#">FAQs</Link> 
          </div>
        </div>
        <div>
            <button className="border border-[#000] text-black px-7 py-3 rounded-full font-MonaSans text-xl hover:bg-[#0367fc] hover:border-[#0367fc] hover:text-white transition-all duration-300 group cursor-pointer min-w-[250px]">
              <span className="block group-hover:hidden">Start New Project</span>
              <span className="hidden group-hover:block">Let's Talk</span>
            </button>
        </div>
      </div>

    </header>
  );
};  

export default Header;
