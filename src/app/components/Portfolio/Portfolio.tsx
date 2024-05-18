"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from'react';
export default function Portfolio() {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        function handleResize() {
            setSlidesPerView(window.innerWidth < 1000 ? 1 : 2.5);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    interface Image {
        src: string
        alt: string
        width: number
        height: number
    }
    const imagesArr : Image [] = [
        {
            src: "/static/img/portfolio-1.jpg",
            alt: "Проект 1",
            width: 350,
            height: 250
        },
        {
            src: "/static/img/portfolio-2.jpg",
            alt: "Проект 2",
            width: 350,
            height: 250
        },
        {
            src: "/static/img/portfolio-3.jpg",
            alt: "Проект 3",
            width: 350,
            height: 250
        },
        {
            src: "/static/img/portfolio-1.jpg",
            alt: "Проект 1",
            width: 350,
            height: 250
        },
        {
            src: "/static/img/portfolio-2.jpg",
            alt: "Проект 2",
            width: 350,
            height: 250
        },
        {
            src: "/static/img/portfolio-3.jpg",
            alt: "Проект 3",
            width: 350,
            height: 250
        },
    ]
    return(
        <section className="portfolio">
            <div className="portfolio__wrapper wrapper">
                <h2 className='portfolio__title'>Наши проекты</h2>
                <Swiper
                    className='portfolio__swiper'
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={slidesPerView}
                    initialSlide={1}
                    centeredSlides={true}
                    onSlideChange={() => console.log('slide change')}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        imagesArr.length != 0
                            ? imagesArr.map((image,index) => <SwiperSlide key={index}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} /></SwiperSlide>)
                            : null
                    }
                </Swiper>
            </div>
        </section>
    )
}