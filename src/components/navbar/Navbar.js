import React from 'react'
import { logo } from '../../Assets'
import { navlinksdata } from '../../constants'
import { Link } from 'react-scroll';
import DarkMode from '../DarkMode/DarkMode';


export const Navbar = () => {
 

  return (
    <div className='rounded-2xl  bg-white border-b-[3.5px] border-color sticky top-0 z-50 wd-auto h-20 flex justify-between items-center pt-3 px-10'>
      <div className='pb-2'>
        <img src={logo} alt='logo'/>
      </div>
      <div>
        <ul className='flex  items-center gap-10  '>
          {navlinksdata.map(({_id, title, link})=>(
            <li className='text-lg font-main font-semibold fcolor tracking-wide cursor-pointer  hover:font-bold duration-100 hover:border-b-2  border-solid self-center hover-border-color'

            key={_id} 
                  >
                    <Link
                    activeClass='active'
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >{title}</Link>
        
                    </li>
          ))}
         <DarkMode/>
        </ul>
        
      </div>
      
    </div> 
  )
}
export  default Navbar