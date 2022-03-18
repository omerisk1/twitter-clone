import { useState } from 'react'

function SideLink({ name, Icon, active, onMenuItemClick }) {
    const isActive = active === name;
    return (
        <li className="cursor-pointer group" onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="mb-2 block pointer-events-none">
                <div className="inline-block">
                    <div className={`flex group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
                         ${isActive ? "text-primary-base bg-primary-light" : ""}   
                         `}>
                        <Icon />
                        <span className="ml-4 font-bold">
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SideLink