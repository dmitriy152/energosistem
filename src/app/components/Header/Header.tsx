"use client"
import NavLink from "../UI-Kit/NavLink/NavLink"
import { useState,useEffect } from "react"
export default function Header() {
    const [desctope, setDesctope] = useState(false)
    const [headerOpened , setHeaderOpened] = useState(false)
    useEffect(() => {
        function handleResize() {
            setDesctope(window.innerWidth <= 1200 ? false : true);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <header className="header">
            <div className="header__wrapper wrapper">
                <nav className={`header__navigation ${headerOpened? "header__navigation--opened":""}`}>
                    <ul className="header__navigation__list">
                        <li onClick={():void=>{setHeaderOpened(false)}}><NavLink href="/" title="Главная"/></li>
                        <li onClick={():void=>{setHeaderOpened(false)}}><NavLink href="/advantages" title="Преимущества"/></li>
                        <li onClick={():void=>{setHeaderOpened(false)}}><NavLink href="/about" title="О нас"/></li>
                        <li onClick={():void=>{setHeaderOpened(false)}}><NavLink href="/contacts" title="Контакты"/></li>
                        <li onClick={():void=>{setHeaderOpened(false)}}><NavLink href="/projects" title="Примеры"/></li>
                    </ul>
                    {
                        headerOpened
                            ? <div className="header__navigation__overlay" onClick={():void=>{setHeaderOpened(false)}}></div>
                            : null
                    }
                </nav>
                {
                    desctope
                        ? null
                        :   <button className={`header__gamburger ${headerOpened? "header__gamburger--opened":""}`}onClick={():void=>{setHeaderOpened(!headerOpened)}}>
                                <span className="line"></span>
                            </button>
                }
            </div>
        </header>
    )
}
