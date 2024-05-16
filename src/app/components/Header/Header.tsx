"use client"
import NavLink from "../UI-Kit/NavLink/NavLink"
export default function Header() {
    return(
        <header className="header">
            <nav className="header__wrapper wrapper">
                <ul className="header__navigation">
                    <li><NavLink href="/" title="Главная"/></li>
                    <li><NavLink href="/advantages" title="Преимущества"/></li>
                    <li><NavLink href="/about" title="О нас"/></li>
                    <li><NavLink href="/contacts" title="Контакты"/></li>
                    <li><NavLink href="/projects" title="Примеры"/></li>
                </ul>
            </nav>
        </header>
    )
}
