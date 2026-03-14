export default function Blog(){
    const blog=[
        {
            img:"./images/Blog/b1.avif",
            genere:"Artificial Intelligence",
            title:"India’s Deep Tech Ambition: A Call for Innovation",
            desc:"Commerce Minister Piyush Goyal set the stage ablaze at Startup Mahakumbh 2025 (April,3rd) challenging India’s startup ecosystem to pivot from consumer-driven ventures like artisanal ice creams to transformative technologies like AI and semiconductor chips. ",
            date:"11 September 2025"
        },
        {
            img:"./images/Blog/b2.avif",
            genere:"Technology",
            title:"Inside the First-Year Student Outcomes of Rishihood University’s CS & DS Program  ",
            desc:"At Rishihood University, the success of our B.Tech in CS & DS program isn’t measured by grades alone. It shows up in what students build, ",
            date:"09 February 2026"
        },
        {
            img:"./images/Blog/b3.avif",
            genere:"Technology",
            title:"25 Fantastic Career Options in Artificial Intelligence for B.Tech Students",
            desc:"The blog lists 25 fantastic career options in artificial intelligence for B.Tech students in India who want to pursue engineering and CS AI.",
            date:"16 August 2025"
        }
    ]
    return(
        <>
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-25 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 flex flex-col box-border items-center content-center w-full gap-6 sm:gap-8 md:gap-10 bg-[#FBF7EF]" id="blog"> 
            <div className="flex flex-col box-border content-center items-center gap-2 flex-nowrap text-center px-4">
                <p className="text-[#D00636] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold tracking-wider">Explore Our Blogs</p>
                <p className="text-[#3A3A3A] text-sm sm:text-base md:text-lg lg:text-[16px] font-extralight max-w-full md:max-w-3xl">Explore insights, stories, and articles on design, innovation, and creative thinking by faculty, mentors, and students.</p>
            </div>
            <div className="flex flex-col md:flex-row w-full flex-nowrap box-border gap-6 sm:gap-8 md:gap-6 lg:gap-10">
                {blog.map((item,index)=>{
                    return(
                        <div key={index} className="flex flex-col box-border items-start content-start gap-3 sm:gap-4 w-full md:w-[33%] cursor-pointer transition-shadow rounded-lg p-2 sm:p-0">
                            <img src={item.img} alt="blog" className="w-full h-40 sm:h-48 md:h-44 lg:h-50 object-cover rounded-lg"/>
                            <div className="px-2 sm:px-3 py-1 rounded-lg bg-[#FFEDD2]">
                                 <p className="text-[#C65830] text-xs sm:text-sm md:text-[14px] font-medium">{item.genere}</p>
                            </div>
                           
                            <p className="text-[#3A3A3A] text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold text-ellipsis line-clamp-2 w-full leading-tight sm:leading-normal">{item.title}</p>
                            <p className="text-[#3A3A3A] text-xs sm:text-sm md:text-[14px] tracking-wide line-clamp-2 font-extralight w-full">{item.desc}</p>
                            <p className="text-[#3A3A3A] text-xs md:text-[12px] text-right w-full tracking-wide font-extralight">{item.date}</p>
                        </div>
                    )
                })}
            </div>


        


        </div>
        </>
    )

}
