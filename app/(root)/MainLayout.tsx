"use client"
import NavLink from '@/components/NavLink';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface SidebarExpandContextType {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}

// Sidebar expand context
export const SidebarExpandContext = createContext<SidebarExpandContextType>({
    expanded: false,
    setExpanded: () => {}, 
});

const MainLayout = ({child, loggedIn} : {child: ReactNode, loggedIn: any }) => {
    const [expanded, setExpanded] = useState(false)
    
    return (
        <SidebarExpandContext.Provider value={{expanded, setExpanded}}>
            <Sidebar user={loggedIn}>
                <NavLink/>
            </Sidebar>
        
            
            <div className={`w-full h-full grow-0 shrink fixed top-0 left-0 flex flex-col items-center justify-center ${expanded ? "md:pl-80" : "md:pl-24"} md:p-6 transition-all`}>
                <Navbar/>
                <div className="w-full h-full bg-base-300 p-12 rounded-lg shadow-lg overflow-hidden relative">{child}</div>
            </div>
        </SidebarExpandContext.Provider>
    )
}

export default MainLayout