import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
export default function Experience(){
    const experience = [
        {
            src:"https://www.instagram.com/reel/DF5IbndN64-/embed"  
        },
        {
            src:"https://www.instagram.com/reel/DJ_k8ONzIsd/embed"    
        },
        {
            src:"https://www.instagram.com/reel/DKUG-L6IxOG/embed"
        },
        {
            src:"https://www.instagram.com/reel/DJ_k8ONzIsd/embed"
        },
        {
            src:"https://www.instagram.com/reel/DFcBiTBPQr0/embed"
        }
    ]
    return(
        <>
        <div className="content-center items-center bg-[#FBF7EF] w-full flex flex-col flex-nowrap gap-3 sm:gap-3.75 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-50 py-4 sm:py-5 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="content-center items-center box-border flex flex-col lg:flex-row h-full gap-6 md:gap-8 lg:gap-6 flex-nowrap">
                <div className="w-full lg:w-auto">
                    <p className="text-[#D00636] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[32px] xl:text-[50px] mb-3 sm:mb-4">Experience life at Rishihood University</p>
                    <p className="text-[#3A3A3A] text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[26px] font-extralight leading-relaxed">Discover what top academics, entrepreneurs, and your fellow students think about Rishihood University and why they believe in our culture and innovation.</p>
                </div>

                 <AnimatedTestimonials testimonials={experience} />;
            </div>
           

        </div>
        </>
    )
}