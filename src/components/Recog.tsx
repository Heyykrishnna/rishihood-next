import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel"
import Image from "next/image"

export default function Recog(){
    const recog = [
        {
            img:"https://framerusercontent.com/images/0o2ypf2LrGeSP4JFxacRCOXh6w.png?width=800&height=407",
            quote:"It is encouraging to see that institutions such as Rishihood University are valuable contributors to this vision with dynamic curricula and unique programs to nurture the leaders of tomorrow. This aligns seamlessly with India's broader goal of empowering its youth to build a Viksit Bharat by 2047." ,
            name:"Shri Narendra Modi Ji",
            post:"(Prime Minister of India)"


        },
        {
            img:"https://framerusercontent.com/images/XmAMD2PC6SrwpS5ZyM4VXZw.png?width=400&height=420",
            quote:"I am very happy to inaugurate Rishihood University. I convey my best wishes to the founders, the faculty, and the students of this great institution.",
            name:"Shri M. Venkaiah Naidu Ji",
            post:"(Former VP)"
        },
        {
            img:"https://framerusercontent.com/images/IcQcKZlfwaZTG3LdAQH2v8ETBA.png?width=400&height=420",
            quote:"I am pleased to be part of Rishihood University, which carries forward Swami Vivekananda’s vision of a modern Takshashila. The curriculum is excellent and we are very excited to create “Rishi learners” whose thoughts and actions will contribute to nation building.",
            name:"Motilal Oswal Ji",
            post:"(Co founder and CEO Motilal Oswal Group)"
        },
        {
            img:"https://framerusercontent.com/images/nXwhFgWTtS9TxcCq9Y4WlCGZYU.png?width=400&height=420",
            quote:"India has a historic opportunity to become a developed nation, and educational institutions like Rishihood University play a fundamental role in this journey. I am delighted to join its Advisory Board and I am excited about its culture of problem-solving.",
            name:"Prof. S.P. Kothari",
            post:"(Chairperson, Board of Advisory, Rishihood University Former Deputy Dean, Sloan School of Management, MIT Padma shri Awardee)"

        },
        {
            img:"https://framerusercontent.com/images/nfyU5NYDU1afEFxnLNSyzIGEw.png?width=400&height=420",
            quote:"I have been associated with the founding of two universities. But I must congratulate Rishihood, because in just 10 years, it has achieved what usually takes several decades. This is a remarkable milestone in India’s higher education landscape.",
            name:"Sh Ajay Piramal",
            post:"(Chairman, Piramal Group)"
        },
        {
            img:"https://framerusercontent.com/images/Ln4rXtHYSYBWKVDHG3Umvh4REGc.png?width=391&height=399",
            quote:"As India moves towards the vision of a Viksit Bharat, we need more universities that pulsate with the energy and dynamism of young learners. Rishihood is contributing to that national mission of shaping future-ready leaders.",
            name:"Sh Dharmendra Pradhan",
            post:"(Ministry of Education, Government of India)"
        },
        {
            img:"https://framerusercontent.com/images/yYQ6dREG6YNDUeTtQ9tErjFALOM.png?width=391&height=399",
            quote:"Rishihood University is building a transformative model of higher education that is deeply rooted in India’s civilisational wisdom while maintaining global relevance. As Chancellor, I take pride in witnessing how our students are being nurtured to lead with purpose, innovation, and impact. Together, we are shaping future-ready leaders who are committed to serving Bharat and contributing meaningfully to the world.",
            name:"Sh Suresh Prabhu",
            post:"(Chancellor, Rishihood University Former Union Minister of Railways, Government of India)"
        },
        {
            img:"https://framerusercontent.com/images/IQz6q4HfAYKs4yUhcCv15a6KaL8.png?width=400&height=420",
            quote:"Rishihood University is not just an academic institution. It is a space to nurture courageous minds and compassionate hearts. In a world increasingly shaped by aggression, loneliness, and moral crisis, Rishihood can inspire a new model of education rooted in empathy, responsibility, and healing. I believe India must lead the way in globalising compassion and this school is a powerful beginning.",
            name:"Sh Kailash Satyarthi",
         
        },
        {
            img:"https://framerusercontent.com/images/wH9Fijqb5ZiqKOq1II993ISvVvw.png?width=400&height=420",
            quote:"If I had an option, I would go back in time and study at Rishihood. Its innovative curriculum gives me hope for a better and greater India. Rishihood means behaviour, character, respect for dignity, and growth in a peaceful environment and I hope that  Rishihood will soon become a global university as well.",
            name: "Dr Kiran Bedi",
            post: "(Former Lt. Governor of Puducherry, India's first Women IPS Officer)"
        },
        
    ]

    return(
        <div className="content-center items-center box-border flex flex-col basis-auto gap-2 sm:gap-2.5 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 flex-nowrap text-[12px] w-full" id="recog">
            <div className="content-center items-center box-border gap-6 sm:gap-8 md:gap-10 flex flex-col w-full">
                <p className="box-border text-[#D00636] text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-center w-fit tracking-wider px-4 leading-tight sm:leading-normal ">
                    Recognized by India's Prime Minister <br className="hidden sm:block" /> 
                    <span className="sm:hidden"> </span>& Visionary Leaders
                </p>
                <TestimonialCarousel />
            </div>
            

        </div>
    )
}