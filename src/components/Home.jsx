import React from "react"
import Naresh from '../assets/Naresh.jpg'
import {MdKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll'
// import Footer from './Footer'

const Home=()=>{
    return(
    <div className=" h-fit md:h-screen  w-full bg-gradient-to-b  pt-9       bg-gradient-to-r from-green-400 to-blue-500          via-black to-gray-800" name="home">
    <div className="pt-32 md:pt-0 max-w-screen-lg  ml-5  md:mx-auto pt-5  h-full flex flex-col justify-center md:items-center  md:flex-row">
    <div className="flex flex-col justify-center ">
        <h1 className="text-4xl sm:text-7xl font-bold mt-10 text-white">I'm a Aspiring Full stack Developer</h1>
        <p className="text-[#fdf4ff] py-5 max-w-md italic">Welcome to my portfolio website! I am Naresh Eppakayala, a dedicated and enthusiastic MERN full-stack developer with a passion for creating efficient, scalable solutions. Explore my projects and let's connect to bring your ideas to life</p>
        <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer">Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1"/>
                </span>
            </Link>
        </div>
    </div>
    <div className="mt-5 mb-10 md:mt-0 md:mb-0 rounded-xl w-2/3 md:mx-auto md:w-full ">
        <img className="rounded-xl" src={Naresh} alt="naresh"/> </div>
       {/* <Footer/> */}
    </div> 
</div>)
}

export default Home;