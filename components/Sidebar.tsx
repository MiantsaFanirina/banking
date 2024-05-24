// "use client"
// import Link from 'next/link'
// import Image from 'next/image'
// import React from 'react'
// import { sidebarLinks } from '@/constants'
// import { cn } from '@/lib/utils'
// import { usePathname } from 'next/navigation'
// import Footer from './Footer'
// import PlaidLink from './PlaidLink'

import { SidebarExpandContext } from "@/app/(root)/MainLayout"
import { SiderbarProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import {  useContext } from "react"

// const Sidebar = ({user} : SiderbarProps) => {
//     const pathname = usePathname(); 
//     return (
//         <section className="sidebar">
//             <nav className='flex flex-col gap-4'>
//                 <Link 
//                     href="/"
//                     className='mb-12 cursor-pointer flex items-center gap-2'
//                 >
//                     <Image 
//                         src="/icons/logo.svg"
//                         width={34}
//                         height={34}
//                         alt="Horizon logo"
//                         className='size-[24px] max-xl:size-14'
//                     />
//                     <h1 className='sidebar-logo'>Horizon</h1>
//                 </Link>


//                 {sidebarLinks.map((item) => {
//                     const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
//                     return (
//                         <Link 
//                             href={item.route} 
//                             key={item.label}
//                             className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
//                         >
//                             <div className="relative size-6">
//                                 <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] inver-0': isActive})}/>
//                             </div>
//                             <p className={cn('sidebar-label', {'!text-white' : isActive})}>
//                                 {item.label}
//                             </p>
//                         </Link>
//                     )
//                 })}
//                 {/* {sidebarLinks.map((item) => {
//                     const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
//                     return (
//                         <Link 
//                             href={item.route} 
//                             key={item.label}
//                             className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
//                         >
//                             <div className="relative size-6">
//                                 <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] inver-0': isActive})}/>
//                             </div>
//                             <p className={cn('sidebar-label', {'!text-white' : isActive})}>
//                                 {item.label}
//                             </p>
//                         </Link>
//                     )
//                 })} */}

//                 <PlaidLink user={user} />

//             </nav>

//             <Footer user={user}/>
//         </section>
//     )
// }

// export default Sidebar

const Sidebar = ({children, user} :  SiderbarProps) => {
    const {expanded, setExpanded} = useContext(SidebarExpandContext)
    return (
        <div 
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)} 
            className="h-screen z-[1000] fixed cursor-pointer md:block hidden">
            <div 
                className="h-full flex flex-col bg-base-300 shadow-sm w-fit">
                <ul className="flex-1 z-[1000] px-3 mt-6">
                    {/* <Link 
                        href="/"
                        className='mb-12 cursor-pointer flex items-center gap-2'
                    >
                        <Image 
                            src="/icons/logo.svg"
                            width={34}
                            height={34}
                            alt="Horizon logo"
                            className='size-[24px] max-xl:size-14'
                        />
                        <h1 className='sidebar-logo'>Horizon</h1>
                    </Link>                     
                    */}
                    {children}
                </ul>
            </div>
        </div>
    )
}
  
export default Sidebar