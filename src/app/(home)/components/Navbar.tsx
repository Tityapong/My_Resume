
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className?:string}){
    const socials=[
        {
            Link:"https://www.linkedin.com/in/sok-tityapong-2194802b6/",
            label :"Linkedin",
            icon : SiLinkedin
        },
        {
            Link:"https://github.com/Tityapong",
            label :"Github",
            icon :SiGithub

        },
        {
            Link:" https://www.instagram.com/tityapong/",
            label :"Instagram",
            icon :SiInstagram
        }
    ]
    return(
        <>
        <nav className={cn(" py-10  flex justify-between items-center",className)}>
            <h1 className=" text-2xl font-bold  underline underline-offset-8 decoration-indigo-600 -rotate-1">Sok_Tityapong</h1>
            <div className=" flex items-center gap-5">
                {
                    socials.map((social,index)=>{
                        const Icon=social.icon
                        return(
                            <Link key={index} href={social.Link}  aria-label={social.label}>
                            <Icon className=" w-5 h-5 hover:scale-125 transition-all "/>
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
        </>
    )
}