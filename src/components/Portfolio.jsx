import React from "react"
import TastyKitchens from '../assets/portfolio/TastyKitchens.png'
import NxtTrendz from '../assets/portfolio/NxtTrendz.png'
import Destination from '../assets/portfolio/Destination.png'

// import foodmuch from '../assets/portfolio/foodmunch.png'
import EmojiGame from '../assets/portfolio/EmojiGame.png'
import moneyManagerApp from '../assets/portfolio/moneyManagerApp.png'
import MatchGame from '../assets/portfolio/MatchGame.png'
// import designwebpage from '../assets/portfolio/designwebpage.png'
// import digitaltimer from '../assets/portfolio/digitaltimer.png'
import passwordmanager from '../assets/portfolio/passwordmanager.png'

import stopwatch from '../assets/portfolio/stopwatch.png'
// import todo from '../assets/portfolio/todo.png'

const Portfolio=()=>{
    const portfolio=[
        {
            id:1,
            src:NxtTrendz,
            demo:'https://nareshnxttrend.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/nxt-trends-React-Context-Part-4---Empty-Cart-View.git',
            title:'NxtTrendz',

        },
        {
            id:2,
            src:EmojiGame,
            demo:'https://nareshemojigam.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/Emoji-Game-tests-real.git',
            title:'Emoji Game',

        },
        {
            id:3,
            src:MatchGame,
            demo:'https://nareshmatchgame.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/Match-Game-tests-real.git' ,
            title:'Match Game',


        },
       
      
        // {
        //     id:1,
        //     src:foodmuch,
        //     demo:'https://eshwarfoodpage.ccbp.tech/',
        //     code:'https://github.com/ESHWAR-333/Food-Munch',
        //     title:'FoodMunch',

        // },
        {
            id:4,
            src:TastyKitchens,
            demo:'https://nareshzomato.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/Tasty-Kitchens-App-real.git',
            title:'TastyKitchens',

        },
       
        {
            id:5,
            src:stopwatch,
            demo:'https://nareshstopwatch.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/Stopwatch-tests.git' ,
            title:'stopwatch',


        },
       
       
        {
            id:5,
            src:passwordmanager,
            demo:'https://naripasswormang.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/Password-Manager.git',
            title:'Password Manager',


        },
        // {
        //     id:6,
        //     src:EmojiGame,
        //     demo:'https://nareshemojigam.ccbp.tech/',
        //     code:'https://github.com/eppakayalanaresh08/Emoji-Game-tests-real.git',
        //     title:'Emoji Game',

        // },
     
      
        {
            id:8,
            src:moneyManagerApp, 
            demo:'https://moneymanganer.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/Money-Manager-tests.git',
            title:'Money Manager App',


        },
      
        
        {
            id:8,
            src:Destination,
            demo:'https://nareshdestina.ccbp.tech/',
            code:'https://github.com/eppakayalanaresh08/Destination-Search-tests.git' ,
            title:'Destination',


        }
        
     
        
    ]
    

    return(
        <div name="portfolio" className="w-full bg-gradient-to-b from-black to-gray-800 text-white p-4 md:h-fit ">
            <div className="max-w-screen-lg flex flex-col justify-center w-full mx-auto  h-full pb-11">
                <div className="pb-8">
                    <p className="font-bold text-4xl inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="text-xl py-6">Check out some of my Work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolio.map(each=>(<div key={each} className="shadow-md shadow-gray-600 rounded-lg ">
                        <img src={each.src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                        {/* <p className="text-center text-gray-500 font-medium pt-2">{each.title}</p> */}
                        <div className="flex items-center justify-center">
                        
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={each.demo}>Demo</a></button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={each.code}>Code</a></button>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio