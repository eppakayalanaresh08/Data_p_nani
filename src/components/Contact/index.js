import React from "react";

const Contact=()=>{
    return (<div name="contact" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
                <form  className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <input type="text" name="email" placeholder="Enter your Email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"/>
                <textarea name="message" rows="10" placeholder="Enter your Message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                <button className="text-white w-fit px-6 py-3 my-8 flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer mx-auto hover:scale-105 duration-300">Let's talk</button>
                </form>
            </div>
        </div>
    </div>)
}

export default Contact