import ProductsCarousel from "@/components/ui/executive-impact-carousel"
import styled from 'styled-components';
import { Carousel3DSelect} from "@/components/ui/carousel3dselect";
import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel"
import { TestimonialsColumn } from "./blocks/testimonials-columns-1";

export default function Learners(){


    const testimonials = [
        {
            img:"./images/Learners/l1.avif",
            name:"Kokila Hada",
            course:"BBA (Finance)",
            quote:"I loved studying Financial Accounts it taught me how to manage my money and time. My advice to juniors: join clubs, use the sports grounds, and attend every guest lecture!"

        },
        {
            img:"./images/Learners/l2.avif",
            name:"Yashasvi Kaushik",
            course:"Makers BBA",
            quote:"I enjoyed a great rapport with my professors who mentored me throughout my journey — especially Chitra ma’am, whose advice and support guided me constantly."
        },
        {
            img:"./images/Learners/l3.avif",
            name:"Anushika",
            course:"B.Sc (Hons) Psychology",
            quote:"College helped me discover who I am and what I can do. Social Psychology, taught by Richa Goenka ma’am, taught me how to connect with and understand people better."
        },
        {
            img:"./images/Learners/l4.avif",
            name:"Ansh",
            course:"B.Design",
            quote:"In my first year, my professor told me to “stop thinking and start doing.” That one line changed my approach to design and continues to inspire me today."
        },
        {
            img:"./images/Learners/l5.avif",
            name:"Janya Sharma",
            course:"Makers BBA",
            quote:"I’ll always cherish managing college events and fests. Entrepreneurship and Innovation classes taught me real-life lessons, and my professors helped me grow at every step."
        },
        {
            img:"./images/Learners/l6.avif",
            name:"Hema Naga",
            course:"Makers BBA",
            quote:"My faculty, especially Chitra ma’am, were my strongest support system. Project Management became my favorite subject — it taught me planning, strategy, and confidence."
        },
           {
            img:"./images/Learners/l7.avif",
            name:"Kushagri",
            course:"B.Sc (Hons) Psychology",
            quote:" Studying Psychology here has been incredible from hands-on EEG experiments to faculty who treat us as equals. With world-class facilities and an inspiring campus, every day motivates me to do more."
        },
        {
            img:"./images/Learners/l8.avif",
            name:"Puneet Kutharia",
            course:"B.Tech CS and AI",
            quote:"Courses like Principles of Design taught me to think through a problem from concept to prototype. The faculty guided me throughout my startup journey and helped me build valuable industry connections."
        },
        {
            img:"./images/Learners/l9.avif",
            name:"Parth Vardhan Saxena",
            course:"Makers BBA",
            quote:"I’m grateful to my mentors and the Founder for supporting my startup through the Maker’s Fund. The ₹10 lakh grant helped me refine my product and gain real-world experience."
        },
        {
            img:"./images/Learners/l10.avif",
            name:"Khushi Nitin Dhole",
            course:"B.Design",
            quote:"Through the curriculum, I learned to use tools I once overlooked. The faculty here is very supportive too. I can always reach out, and they help me, which I appreciate a lot. The design faculty is excellent and very supportive."
        },
        {
            img:"./images/Learners/l11.avif",
            name:"Sharon Saji",
            course:"B.Design",
            quote:"My internship in France gave me global exposure and the chance to learn from international artists and designers. Rishihood made that possible — it truly opened up the world for me."
        },
        {
            img:"./images/Learners/l12.avif",
            name:"Michelle D'Sa",
            course:"B.Design",
            quote:"The faculty shared their real-world experiences and encouraged me to explore my creative side fearlessly. My time here gave me confidence and clarity about my strengths as a designer.",
        },
       

    ]

    const firstColumn = testimonials.slice(0, 4);
    const secondColumn = testimonials.slice(4, 8);
    const thirdColumn = testimonials.slice(8, 12);
   
    return(
        <div
        className="content-center items-center box-border flex flex-col text-[12px] w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 justify-center flex-nowrap gap-2 sm:gap-2.5 overflow-x-hidden" id="learners">

            
            <p className="box-border text-[#D00636] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-center tracking-wider w-fit px-4">Meet Our Learners</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-[#3A3A3A] wrap-break-word text-center leading-6 font-extralight mb-8 sm:mb-12 md:mb-16 lg:mb-30 px-4 max-w-full md:max-w-3xl">
                Our learners are building startups, coding the future, designing <br className="hidden sm:block" /> 
                <span className="sm:hidden"> </span>brilliance, and shaping minds  with a story worth telling.
            </p>
            {/* Mobile View - Show all learners in 1 column */}
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-20 mt-10 w-full sm:hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                <TestimonialsColumn testimonials={testimonials} duration={20} className="w-full" />
            </div>

            {/* Tablet & Desktop View - Show 2-3 columns */}
            <div className="hidden sm:flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-20 mt-10 w-full [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                <TestimonialsColumn testimonials={firstColumn} duration={15} className="w-1/2 xl:w-1/3" />
                <TestimonialsColumn testimonials={secondColumn} className="w-1/2 xl:w-1/3" duration={19} />
                <TestimonialsColumn testimonials={thirdColumn} className="hidden xl:block w-1/3" duration={17} />
            </div>


        </div>
    )
}

