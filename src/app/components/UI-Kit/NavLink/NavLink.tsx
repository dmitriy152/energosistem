"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavLinkProp {
    href: string,
    icon? :() => JSX.Element,
    title? :string,
    additionalClassName?:string,
}
export default function NavLink({href, icon, title,additionalClassName}:NavLinkProp){
    const pathname = usePathname()
    const [path, setPath] = useState(href)

    let isActive = pathname == path ? "navlink-active" : "";
    return(
        <Link className={`navlink ${additionalClassName? additionalClassName : ""} ${isActive}`} href={href}>
            {icon? <figure>{icon()}</figure> : null}
            {title? <span>{title}</span> : null}
        </Link>
    )
}