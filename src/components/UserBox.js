import React from 'react'



function UserBox() {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4
    transform transition-colors duration-300">
        <img src="https://pbs.twimg.com/profile_images/1496871260990681100/VHj6yBXm_400x400.jpg" 
             alt="Profile"
             className="w-11 h-11 rounded-full">
             
        </img>
        <div className="flex flex-col mr-10">
            <span className="font-bold text-md text-black">
                Zinedine Sinan
            </span>
            <span className="text-sm text-gray-dark">
                @SinanZinedine
            </span>
        </div>
        <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div className="w-1 h-1 bg-gray-900 rounded-full"/>
        </div>
    </div>
  )
}

export default UserBox