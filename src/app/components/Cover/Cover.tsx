import Image from "next/image"
export default function Cover() {
    return (
        <section className="cover">
            <div className="cover__wrapper">
                <div className="cover__img__container">
                    <Image
                        className="cover__img" 
                        src="/static/img/cover.jpg"
                        alt="Обложка"
                        width={984}
                        height={900}
                    />
                </div>
                <h1 className="cover__title">
                    <span>ООО</span>
                    <span>ЭНЕРГОСИСТЕМЫ</span>
                </h1>
            </div>
        </section>
    )
}