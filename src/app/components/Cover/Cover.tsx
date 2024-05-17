import Image from "next/image"
interface CoverProps{
    img? :string,
    alt? :string,
    title? :string,
    subtitle? :string
}
export default function Cover({img, alt, title,subtitle}:CoverProps) {
    return (
        <section className="cover">
            <div className="cover__wrapper">
                <div className="cover__img__container">
                    <Image
                        className="cover__img" 
                        src={`${img}`}
                        alt={`${alt}`}
                        width={984}
                        height={900}
                    />
                </div>
                <h1 className="cover__title">
                    {title ? <span>{title}</span> :null}
                    {subtitle ? <span>{subtitle}</span> :null}
                </h1>
            </div>
        </section>
    )
}