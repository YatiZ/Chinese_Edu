import { Link } from "react-router-dom"

import {MdOutlineInvertColors, MdOutlineInvertColorsOff} from "react-icons/md";
import { useThemeContext } from "@/context/ThemeContext";
import {PiSignInBold} from "react-icons/pi";
import {FaUserCircle} from "react-icons/fa";

const NavBar = () => {
    const {darkTheme, setDarkTheme} = useThemeContext();
    const isAuthenticated = false;
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 dark:shadow-white bg-gray-200'>
      <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <p className='flex items-center justify-center gap-2'>
          <Link to='/'>
          <h2 className='text-gray-500 text-3xl'>Learn Chinese</h2>
          </Link>
            
            {darkTheme? <MdOutlineInvertColorsOff className="text-xl cursor-pointer text-[#500A16]" onClick={()=>{
                setDarkTheme(false);
                localStorage.removeItem('mode-theme')
        }}/>:
            <MdOutlineInvertColors className="text-[#500A16] text-xl cursor-pointer" onClick={()=>{
                setDarkTheme(true);
                localStorage.setItem('mode-theme','true')
            }}/>
        }
        </p>
        <section className="flex gap-4 items-center text-black">
        <li className='hover:-translate-y-2 duration-500 transition-all list-none'>
        <Link to='/library'>Library</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all list-none'>
        <Link to='/blogs'>Blogs</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all list-none'>
        <Link to='/discussion'>Discussion</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all list-none'>
          {isAuthenticated ? 
           <Link to='/profile'>
            <FaUserCircle/>
           </Link>:
           <Link to='/sign-in'><PiSignInBold/></Link> 
          }
        
        </li>
        
      </section>
      </div>
      
    </nav>
  )
}

export default NavBar