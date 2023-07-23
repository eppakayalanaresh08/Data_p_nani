import React,{useState,useEffect} from "react";
import staticpage from '../assets/certifications/static.png';
import responsive from '../assets/certifications/responsive.png';
import dynamic from '../assets/certifications/dynamic.png';
import javascript from '../assets/certifications/javascript.png';
import databases from '../assets/certifications/databases.png';
import developer from '../assets/certifications/developer.png';
import flexbox from '../assets/certifications/flexbox.png';
import node from '../assets/certifications/node.png';
import python from '../assets/certifications/python.png';
import cppfundamentals from '../assets/certifications/cppfundamentals.png';
import react from '../assets/certifications/react.png';
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";




const Certifications =()=>{

    const images=[
        {
            id:1,
            src:staticpage
        },
        {
            id:2,
            src:responsive
        },
        {
            id:3,
            src:dynamic
        },
        {
            id:4,
            src:javascript
        },
        {
            id:5,
            src:flexbox
        },
        {
            id:6,
            src:python
        },
        {
            id:7,
            src:developer
        },
        {
            id:8,
            src:node
        },
        {
            id:9,
            src:databases
        },
        {
            id:10,
            src:cppfundamentals
        },
        {
            id:11,
            src:react
        },
    ]

    // const totalSlides=images.length


        const [currentIndex, setCurrentIndex] = useState(0);
      
        const previousSlide = () => {
          const lastIndex = images.length - 1;
          const shouldResetIndex = currentIndex === 0;
          const index = shouldResetIndex ? lastIndex : currentIndex - 1;
          setCurrentIndex(index);
        };
      
        const nextSlide = () => {
          const lastIndex = images.length - 1;
          const shouldResetIndex = currentIndex === lastIndex;
          const index = shouldResetIndex ? 0 : currentIndex + 1;
          setCurrentIndex(index);
        };

        useEffect(() => {
            const interval = setInterval(() => {
              setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              );
            }, 3000); // Change slide every 3 seconds
        
            return () => {
              clearInterval(interval); // Cleanup the interval on component unmount
            };
          }, [images.length]);
      
        return (
            <div className="container mx-auto h-fit md:h-screen w-full m-auto  bg-gradient-to-b  from-gray-800 to-black text-white" name="certifications">
                
                <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Certifications</p>
                        <p className="py-6">These are the my Certifications</p>
                    </div>
                    <div className="hidden  md:relative md:flex justify-center items-center">
                    <img
                      className="h-fit  object-cover flex justify-center items-center w-[50%]"
                      src={images[currentIndex].src}
                      alt="Slider"
                      
                    />
                    <button
                      className="md:absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 rounded-full text-white hidden md:block"
                      onClick={previousSlide}
                    >
                      <BsChevronCompactLeft/>
                    </button>
                    <button
                      className="ml-20 md:absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 rounded-full text-white hidden md:block"
                      onClick={nextSlide}
                    >
                      <BsChevronCompactRight/>
                    </button>
                </div>
                <div className="flex justify-center items-center md:hidden ">
                    <img
                      className="h-fit  object-cover flex justify-center items-center w-[50%]"
                      src={images[currentIndex].src}
                      alt="Slider"
                    />
                    </div>
                </div>
                
          </div>
        );
        

}

export default Certifications