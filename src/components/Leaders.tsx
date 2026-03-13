"use client";

import { HeroSection } from "@/components/ui/feature-carousel";
import OrbitCarousel from "@/components/ui/orbiting-carousel-with-animated-icons";

import { title } from "process";





const people = [
    {
        img:"https://framerusercontent.com/images/qPuKtFOkq7X2Uijn99W8JlKOT4.png",
        name:"Shobhit Mathur",
        occupation:"Co-Founder & Vice Chancellor, Rishihood University",
        edimg:"https://framerusercontent.com/images/MzyyufpM2EqML8IjkODFh2g10s.png"
    },
     {
        img:"https://framerusercontent.com/images/nKWsNAXGeoexDi6yWSETwBa6XjQ.png",
        name:"Sahil Aggarwal",
        occupation:"Co-Founder & CEO, Rishihood University",
        edimg:"https://framerusercontent.com/images/WUli7Ysmb3KQUFIZO6yDhSBrQYY.webp"
    },
     {
        img:"https://framerusercontent.com/images/9sQQNm8JEF3dKUVKbNA0PDBcCJg.png?width=500&height=500",
        name:"Motilal Oswal",
        occupation:"MD and CEO,Motilal Oswal Group",
        edimg:"https://framerusercontent.com/images/qjjknbSSqZgWBsjpkebigGscLNs.webp?width=90&height=90"
    },
     {
        img:"https://framerusercontent.com/images/cXgtCkGsydpBdAf3c4hyPFrROc.png",
        name:"Aditya Pittie",
        occupation:"Entrepreneur | Angel Investor | Mentor for India's Innovation Ecosystem",
        edimg:"https://framerusercontent.com/images/i4vAwLSHGIYfi7aI6hN4VPAUSE.webp"
    },
     {
        img:"https://framerusercontent.com/images/BEAkQRWICGa8CVNjsIfnhSdyU.png",
        name:"Ajay Gupta",
        occupation:"Founder & CEO,Bachpan Play School",
        edimg:"https://framerusercontent.com/images/ZTEKXDB0dDx6PnSu4DD6wBFUofM.webp"
    },
]
export default function Leaders(){
    return(
        <div className="w-full flex flex-col py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#FBF7EF]" id="leaders">
            <div className="items-center content-center box-border gap-4 sm:gap-5 md:gap-6 flex flex-col basis-auto flex-nowrap text-[12px]">
                <div className="items-center content-center box-border gap-4 sm:gap-5 md:gap-6 flex flex-col basis-auto w-full">
                    <div className="content-center items-center box-border gap-2 sm:gap-3 flex flex-col flex-nowrap max-w-full px-4 sm:px-6 md:px-8 text-center">
                        <p className="text-[#D00636] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold tracking-wide">Guided by Excellence</p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-[#3A3A3A] font-light max-w-full md:max-w-3xl lg:max-w-4xl">Leaders from business, tech, and education support Rishihood in shaping a self-reliant, future-ready India.</p>



                    </div>

                    <div className="box-border basis-auto bg-[#D00636] p-2 sm:p-3 md:p-3.5 rounded-[8px] hover:bg-[#B00528] transition-colors">
                        <a href="" className="content-center items-center rounded-[8px] text-white text-sm sm:text-base md:text-[16px] box-border whitespace-nowrap px-2 sm:px-3">
                            See all Rishihood members
                        </a>
                    </div>
                   

                </div>
               
                <HeroSection
                    className="bg-[#FBF7EF]"
                    people={people}
                />
            </div>
        </div>
    )
}