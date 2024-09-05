import img1 from "../asset/imgs/hero-slide-one.jpg"
import img2 from "../asset/imgs/hero-slide-two.jpg"
import img3 from "../asset/imgs/hero-slide-three.jpeg"
import img4 from "../asset/imgs/hero-slide-four.jpg"
import img5 from "../asset/imgs/hero-slide-five.jpg"
import { useEffect, useState } from "react"

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1, img2, img3, img4, img5,
    ]

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000); // Change every 5 seconds
    
        return () => clearInterval(interval); // Clean up the interval on unmount
      }, [images.length]);

    return (
        <section className="w-[90%] lg:w-[70%] mx-auto">
            <h2 className="text-white text-4xl font-semibold my-8">Honey Home of Luxuries</h2>
            <div className="relative h-[400px] lg:h-[550px] overflow-hidden rounded-lg ">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`slide ${index + 1}`}
                    className={`absolute rounded-3xl inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                />
        ))}
            </div>
            {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                    }`}
                ></div>
                ))}
            </div> */}
        </section>
    )
}

export default HeroSection;