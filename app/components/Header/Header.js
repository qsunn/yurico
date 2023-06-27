"use client";

import { s } from "@/app/styles"
import Link from "next/link"
import { useState } from "react"

export const Header = () => {
    const links = [
        {
            name: 'Homepage',
            href: ''
        }, {
            name: 'About Us',
            href: 'about'
        }, {
            name: 'Services',
            href: 'services'
        }, {
            name: 'Carrers',
            href: 'carrers'
        },
    ]
    const [activeLink, setActiveLink] = useState(links[0])

    const handleClick = (e) => {
        const link = links.find(item => item.name === e.currentTarget.innerText);
        if (link?.name) setActiveLink(link);
    }

    return <header className={`w-full px-[18.75rem] py-5 fixed top-0 z-50 header grid place-items-center`}>
        <div className="hidden md:flex items-center justify-between w-full">
            <div className="bg-no-repeat bg-center bg-contain bg-[url('./images/logo.svg')] w-[14.75rem] h-[3rem]" />
            <ul className="flex items-center justify-center gap-9">
                {links.map((item, i) => <li key={item.name} onClick={handleClick} className={`transition-all relative ${s.gridRow} text-sm`}>
                    <div className="flex items-center">
                        <Link href={item.href} className={links.length - 1 !== i ? "mr-9" : "mr-0"}>{item.name}</Link>
                        {links.length - 1 !== i && <div className="bg-no-repeat bg-center bg-contain h-1.5 w-0.5 bg-[url('./images/decor_line_header.svg')]" />}
                    </div>
                    {activeLink.name === item.name && <div className="bg-blue h-3 w-3 rounded-sm rotate-45 select-none absolute bottom-[-2.5rem] left-[30%]" />}
                </li>)}
            </ul>
            <div className="flex items-center justify-center gap-10">
                <div className="flex items-center justify-center gap-3">
                    <div className={`${s.image} bg-[url('./images/icon_planet.svg')] w-[1.125rem] h-[1.125rem]`} />
                    <div>English</div>
                </div>
                <Link href="contacts" className={s.button3}>Contact Us</Link>
            </div>
        </div>
    </header>
}