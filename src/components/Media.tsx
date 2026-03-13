"use client";

import Image from "next/image";
import { useState } from "react";

interface MediaItem {
  id: number;
  title: string;
  date: string;
  source: string;
  image: string;
  featured?: boolean;
  tag?: string;
}

const featuredCard: MediaItem = {
  id: 1,
  title: "Nobel Laureate Kailash Satyarthi inaugurates Rishihood University's Mahesh Navani School of Brain, Body, and Behaviour (MaNaS)",
  date: "19 August 2025",
  source: "ANI",
  image: "https://framerusercontent.com/images/PV3wjfqG5t5o9w0ZjU9DT0EZVo.png?width=1870&height=1656",
  featured: true,
  tag: "#PillarsOfRishihood"
};

const newsCardsPage1: MediaItem[] = [
  {
    id: 2,
    title: "Rishihood University launches MaNas to redefine mental health, psychology & behavioural education in India",
    date: "19 August 2025",
    source: "Hindustan Times",
    image: "https://framerusercontent.com/images/pJhUCj7MTey229BhTwt2DCqc3E.png?width=1358&height=766.jpg",
    tag:"Hindustan Times"
  },
  {
    id: 3,
    title: "93% of Newton School of Technology's 1st batch lands in internship placement",
    date: "13 May, 2025",
    source: "Inshorts",
    image: "https://framerusercontent.com/images/YHzODagyiBEpAyhCiGUhHkQTiw.png?width=800&height=666.jpg",
    tag: "Inshorts"
  },
  {
    id: 4,
    title: "Rishihood University offers Rs 7 crore Bharat100 scholarship for UG programmes",
    date: "18 June, 2024",
    source: "India Today",
    image:"https://framerusercontent.com/images/chiAL9dJTTcifXyQonbcy040sU.png?width=690&height=388.jpg",
    tag: "India Today"
  }
];

const newsCardsPage2: MediaItem[] = [
  {
    id: 5,
    title: "AI Can Do Everything We Can But Only Humans Can Decide What Should Be Done",
    date: "13 October 2024",
    source: "The Tribune",
    image: "https://framerusercontent.com/images/L8wKA4JPC6lxYTdzhJUXloF6AOY.png?width=1024&height=540",
    tag: "The Tribune"
  },
  {
    id: 6,
    title: "Suresh Prabhu joins Rishihood University as the Founding Chancellor",
    date: "04 July 2020",
    source: "Business Standard",
    image: "https://framerusercontent.com/images/8EjFUfGkHi9AJHlqPy3t6Sp8Aj4.png?width=500&height=500",
    tag: "Business Standard"
  },
  {
    id: 7,
    title: "Rishihood University on-boards Ravinder Pal Singh as its Chief Information & Innovation Officer",
    date: "09 February 2021",
    source: "Hindustan Times",
    image: "https://framerusercontent.com/images/DXD7U1iUAi0Pz6enrieAeXD9JD8.png?width=1050&height=1050",
    tag: "Hindustan Times"
  }
];

export default function Media(){
    const [currentPage, setCurrentPage] = useState(0);
    const newsPages = [newsCardsPage1, newsCardsPage2];
    const totalPages = newsPages.length;

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };
    return(
        <>
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 content-center items-center flex flex-col flex-nowrap justify-center box-border gap-8 sm:gap-10 md:gap-10.5 w-full max-w-7xl mx-auto" id="media">
            <div className="flex w-full flex-col items-center gap-8 sm:gap-10 flex-nowrap">
                <h2 className="text-[#D00636] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] xl:text-[40px] tracking-wider font-semibold text-center">In The Media</h2>
                
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
                    {/* Featured Card - Left Side - Always Static */}
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] group cursor-pointer">
                        <img 
                            src={featuredCard.image}
                            alt={featuredCard.title}
                      
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                            <p className="text-xs sm:text-sm mb-2">{featuredCard.source} | {featuredCard.date}</p>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">{featuredCard.title}</h3>
                            {featuredCard.tag && (
                                <p className="text-xs sm:text-sm opacity-80">{featuredCard.tag}</p>
                            )}
                        </div>
                    </div>

                    {/* News Cards - Right Side - Changes on Navigation */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {newsPages[currentPage].map((item) => (
                            <div 
                                key={item.id}
                                className="flex gap-3 sm:gap-4 overflow-hidden border-b border-gray transition-shadow cursor-pointer p-3 sm:p-4 hover:bg-gray-50"
                            >
                                <div className="relative w-24 sm:w-32 md:w-40 h-24 sm:h-32 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden">
                                    <img 
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover h-full w-full"
                                    />
                                </div>
                                <div className="flex flex-col justify-between flex-1">
                                    {item.tag && (
                                        <span className="inline-block px-2 sm:px-3 py-1 bg-[#FFEDD2] text-xs rounded-sm w-fit mb-1 sm:mb-2">
                                            {item.tag}
                                        </span>
                                    )}
                                    <h4 className="font-semibold text-sm sm:text-base md:text-lg line-clamp-2 mb-1 sm:mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-500">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 sm:gap-4 items-center justify-center mt-4 sm:mt-8">
                    <button 
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition ${
                            currentPage === 0
                                ? 'border-2 border-gray-300 opacity-50 cursor-not-allowed'
                                : 'bg-[#D00636] hover:bg-[#B00528] cursor-pointer'
                        }`}
                    >
                        <svg 
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${currentPage === 0 ? 'text-gray-400' : 'text-white'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition ${
                            currentPage === totalPages - 1
                                ? 'border-2 border-gray-300 opacity-50 cursor-not-allowed'
                                : 'bg-[#D00636] hover:bg-[#B00528] cursor-pointer'
                        }`}
                    >
                        <svg 
                            className={`w-5 h-5 sm:w-6 sm:h-6 ${currentPage === totalPages - 1 ? 'text-gray-400' : 'text-white'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}