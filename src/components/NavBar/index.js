import {Component} from 'react'

import {FaBars,FaTimes} from 'react-icons/fa'

import {Link} from 'react-scroll'

const links=[
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'about'
    },
    {
        id:3,
        link:'portfolio'
    },
    {
        id:4,
        link:'certifications'
    },
    {
        id:5,
        link:'experience'
    },
    {
        id:6,
        link:'contact'
    },
    
]

class NavBar extends Component{

    state={nav:false}

    onClickTime=()=>{
        this.setState(prevState=>({nav:!prevState.nav}))
    }

    render(){
        const {nav}=this.state
        return(
            <div className="flex justify-between items-center w-full h-20 shadow-2xl  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-white fixed px-4">
                <div>
                    <h1 className="font-signature  font-medium text-5xl ml-2">Naresh Eppakayala</h1>
                </div>
                <ul className="hidden md:flex">
                   {links.map(each=><li key={each.id} className="px-4 cursor-pointer capitalize font-medium text-white  hover:scale-110 duration-200"><Link to={each.link} smooth duration={500}>{each.link}</Link></li>) }
                </ul>
        
                <div onClick={this.onClickTime} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav?<FaTimes className="" size={30}/>:<FaBars className="" size={30}/>}
                </div>
                {nav&&(<ul className="flex flex-col justify-center items-center absolute h-screen w-full left-0 top-0  text-gray-500 bg-gradient-to-b from-black to-gray-800">
                {links.map(each=><li key={each.id} className="cursor-pointer capitalize py-6 text-4xl px-4"><Link onClick={this.onClickTime} to={each.link} smooth duration={500}>{each.link}</Link></li>)}
                </ul>)}
            </div>
        )
    }

}

export default NavBar