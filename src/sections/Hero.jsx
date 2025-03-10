import Image from "next/image";
import React from "react";
import Slider from "../components/Slider";

const Hero = () => {
    return (
        <div>
        <div className="pt-20 container">
            <h1 className="text-[5.76rem] font-MonaSansWide text-center leading-[120%] font-medium">Delivering creativity with our design <span><Image src="/laptop.png" alt="Laptop" width={130} height={100} className="inline-block relative top-[-27px]"/></span> solutions</h1>
            <p className="text-center text-2xl font-MonaSans mt-3 w-[50%] mx-auto text-[#949494]">Passionate agency delivering creative design solutions for impactful results.</p>
        </div>
        <Slider />
        </div>
    )
}   

export default Hero;
