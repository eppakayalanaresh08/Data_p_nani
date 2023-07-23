import React from "react";
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import bootstrap from '../assets/bootstrap.svg'
import express from '../assets/express.svg'
import mongodb from '../assets/mongodb.svg'
import python from '../assets/python.svg'

const Experience =()=>{
    const experience=[
        {
            id:1,
            src:html,
            title:"HTML",
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:"JAVASCRIPT",
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src:bootstrap,
            title:"BOOTSTRAP",
            style: 'shadow-sky-500'
        },
        {
            id:5,
            src:github,
            title:"GITHUB",
            style: 'shadow-gray-500'
        },
        {
            id:6,
            src:node,
            title:"NODE",
            style: 'shadow-green-500'
        },
        {
            id:7,
            src:react,
            title:"REACT",
            style: 'shadow-cyan-500'
        },       
        {
            id:8,
            src:express,
            title:"EXPRESS",
            style: 'shadow-blue-500',
            backgroundcolor:'bg-white'
        },
        {
            id:9,
            src:tailwind,
            title:"TAILWIND",
            style: 'shadow-sky-500'
        },
        {
            id:10,
            src:mongodb,
            title:"MONGODB",
            style: 'shadow-green-500'
        },
        {
            id:11,
            src:python,
            title:"PYTHON",
            style: 'shadow-yellow-500'
        },
     
        
    ]
return(
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800
    w-full h-fit">
        <div className="
        max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12
            sm:px-8">
            {experience.map(each=>(
                <div key={each.id} className={`shadow-md hover:scale-105 duaration-500 py-2 rounded-lg ${each.style}`}>
                    <img src={each.src} alt="" className={`w-20 mx-auto  ${each.backgroundcolor} rounded-lg`}/>
                    <p className="mt-4">{each.title}</p>
                </div>
            ))}
                
                
            </div>
        </div>
    </div>
)
}

export default Experience