"use client"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useContext } from "react"
import { SidebarExpandContext } from "@/app/(root)/MainLayout"

const NavLink = () => {
    const pathname = usePathname(); 
    const {expanded} = useContext(SidebarExpandContext)

    return (
        <>
            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link 
                        href={item.route} 
                        key={item.label}
                        className={`
                            group relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
                            transition-colors
                            ${isActive ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}
                        `}
                    >
                        {/* <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] inver-0': isActive})}/> */}
                        <Image src={item.imgURL} alt={item.label} width={20} height={20} className={isActive ? "opacity-100" : "opacity-60"}/>
                        <span className={`text-lg overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{item.label}</span>
                    </Link>
                )
            })}
        </>
    )
}

export default NavLink