import Link from "next/link";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer__wrapper wrapper">
                <div className="footer__column">
                    <Link className="footer__logo" href="/">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_166_605)">
                            <path d="M24.4374 7.90504V0.875039H20.5624V4.34129L16.0587 0.227539L0.929932 13.7688L3.22993 16.3613L5.56243 14.255V31.75H26.4374V14.385L28.7324 16.4913L31.0937 13.9638L24.4374 7.90504ZM12.0124 25.9463C10.3249 25.9463 8.96243 24.81 8.96243 23.4113C8.96243 23.08 9.07493 22.7475 9.15243 22.5013C9.20243 22.345 12.0412 17.5238 12.0412 17.5238V17.4813L14.7937 22.4588C14.7937 22.4588 15.0337 22.875 15.0624 23.4113C15.0624 24.8163 13.6999 25.9463 12.0124 25.9463ZM20.9399 17.9763C20.9474 18.0338 20.9512 18.0925 20.9512 18.1525V28.22C20.9512 28.6288 20.7837 29 20.5149 29.2688C20.2449 29.5375 19.8749 29.705 19.4662 29.705C18.6487 29.705 17.9799 29.0375 17.9799 28.22V18.1525C17.9799 18.0925 17.9837 18.0338 17.9912 17.9763C16.9087 17.435 16.1649 16.3163 16.1649 15.0238C16.1649 13.6263 17.0337 12.4325 18.2599 11.9513V15.0238H20.6724V11.9513C21.8974 12.4325 22.7662 13.6263 22.7662 15.0238C22.7662 16.3163 22.0224 17.435 20.9399 17.9763Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_166_605">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <div>
                            <span>ООО</span>
                            <span>ЭНЕРГОСИСТЕМЫ</span>
                        </div>
                    </Link>
                </div>
                <div className="footer__column">
                    <div className="footer__column__title">Режим работы:</div>
                    <div className="footer__column__value">
                        <span>Будние дни с 9:00 до 17:00</span>
                    </div>
                    <div className="footer__column__value">
                        <span>Сб,Вс - выходной</span>
                    </div>
                </div>
                <div className="footer__column">
                    <div className="footer__column__title">Контакты:</div>
                    <div className="footer__column__value">
                        <span>Телефон:</span>
                        <a href="tel:+78312910015">+7 (831) 291-00-15</a>
                        <a href="tel:+78312809969">+7 (831) 280-99-69</a>
                    </div>
                    <div className="footer__column__value">
                        <span>Email: </span>
                        <a href="mailto:energosysteminfo@gmail.com">energosysteminfo@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}