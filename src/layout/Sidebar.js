import { useState } from 'react'
import TwitterLogo from '../images/twitter.svg'
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'
import {
    HomeIcon, 
    ExploreIcon, 
    NotificationsIcon, 
    MessagesIcon, 
    BookMarksIcon, 
    ListsIcon, 
    ProfileIcon, 
    MoreIcon,
    
} from '../icon/icon'

const sideLinks = [
    {
        name: 'Home',
        icon: HomeIcon,
    },
    {
        name: 'Expolorer',
        icon: ExploreIcon,
    },
    {
        name: 'Notifications',
        icon: NotificationsIcon,
    },
    {
        name: 'Messages',
        icon: MessagesIcon,
    },
    {
        name: 'Bookmarks',
        icon: BookMarksIcon,
    },
    {
        name: 'Lists',
        icon: ListsIcon,
    },
    {
        name: 'Profile',
        icon: ProfileIcon,
    },
    {
        name: 'More',
        icon: MoreIcon,
    }
]

function Sidebar() {
    const [active, setActive] = useState("Home");
    const handleMenuItemClick= (name) => {
        setActive(name);
        
    }
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between bg-white w-72 min-h-screen px-2">
    
        <div>
            <div className="mt-1 mb-4 ml-1 flex items-center justify-center hover:bg-gray-lightest w-11 h-11 rounded-full cursor-pointer transform transition-colors duration-300">
                <img src={TwitterLogo} alt="Twitter Logo" className="w-9 h-9"></img>
            </div>
            
            <nav className="mb-4">
                <ul>
                    {sideLinks.map(({name, icon}) => (
                        <SideLink 
                            active={active} 
                            key={name} 
                            name={name} 
                            Icon={icon}
                            onMenuItemClick ={handleMenuItemClick}>
                        </SideLink>
                    ))}
                </ul>
            </nav>
            <button className="bg-primary-base hover:bg-primary-dark text-white w-11/12 shadow-lg rounded-full font-bold py-3 px-8 transform transition-colors duration-200" >Tweet</button>
        </div>
        <div>
            <UserBox />
        </div>
        
        

    </div>
  )
}

export default Sidebar