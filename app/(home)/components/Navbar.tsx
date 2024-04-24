import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiLinkedin, SiX } from "react-icons/si";
import { SiGithub } from "react-icons/si";

function Navbar({className}:{className?:string}) {


    const socials = [
        {
            Link:"https://github.com/Aryadev19",
            Label:"Github",
            Icon: SiGithub
        },
        {
            Link: "https://www.linkedin.com/in/piyush-aryaprakash-b65762229/",
            Label: "Linkedin",
            Icon: SiLinkedin
        },
        {
            Link:"https://twitter.com/PAryaprakash",
            Label:"Twitter",
            Icon: SiX
        }
    ]

  return (
    <nav className={cn('py-10 flex justify-between items-center',className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Aryadev 👨‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social,index)=>{
                const Icon = social.Icon
                return <Link href={social.Link} key={index} aria-label={social.Label}>
                    <Icon className='size-5 hover:scale-125 transition-all'/>
                </Link>
            })}
        </div>
    </nav>
  )
}

export default Navbar