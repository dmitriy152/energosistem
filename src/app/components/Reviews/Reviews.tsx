"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from'react';
export default function Reviews() {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        function handleResize() {
            setSlidesPerView(window.innerWidth < 900 ? 1 : 2);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className="reviews">
            <div className="reviews__wrapper wrapper">
                <div className="reviews__container">
                    <h2 className='reviews__title'>Отзывы</h2>
                    <Swiper
                        className='reviews__swiper'
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        onSlideChange={() => console.log('slide change')}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide-top">
                                <div className="swiper-slide-name">
                                    <div className="initial">О.М.</div>
                                    <div className="name">Олег М.</div>
                                </div>
                                <div className="swiper-slide-order">
                                    <span>Номер заявки </span>
                                    <span>3856</span>
                                </div>
                            </div>
                            <div className="swiper-slide-content">
                                Благодаря компании за отлично выполненную работу по установке системы отопления в нашем доме. Профессиональная команда, внимательное отношение к деталям и высокое качество исполнения. Рекомендую!
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-top">
                                <div className="swiper-slide-name">
                                    <div className="initial">А.Г.</div>
                                    <div className="name">Анастасия Г.</div>
                                </div>
                                <div className="swiper-slide-order">
                                    <span>Номер заявки </span>
                                    <span>3857</span>
                                </div>
                            </div>
                            <div className="swiper-slide-content">
                                Сотрудники компании проявили себя как настоящие профессионалы, ответили на все наши вопросы и подробно проконсультировали по выбору оптимальной системы отопления. Большое спасибо за заботу!
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-top">
                                <div className="swiper-slide-name">
                                    <div className="initial">А.Д.</div>
                                    <div className="name">Аркадий Д.</div>
                                </div>
                                <div className="swiper-slide-order">
                                    <span>Номер заявки </span>
                                    <span>3965</span>
                                </div>
                            </div>
                            <div className="swiper-slide-content">
                                После установки системы отопления, компания продолжила предоставлять отличный сервис. В случае возникновения вопросов или проблем, реагировали оперативно и профессионально.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-top">
                                <div className="swiper-slide-name">
                                    <div className="initial">Н.Л.</div>
                                    <div className="name">Никита Л.</div>
                                </div>
                                <div className="swiper-slide-order">
                                    <span>Номер заявки </span>
                                    <span>8754</span>
                                </div>
                            </div>
                            <div className="swiper-slide-content">
                                Работа сделана качественно, быстро, цены приемлемые. Все обговаривалось заранее - составлялась смету и подписывался договор, понравился подход к работе. Благодарю за результат - буду советовать вас знакомым!
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide-top">
                                <div className="swiper-slide-name">
                                    <div className="initial">И.М.</div>
                                    <div className="name">Илья М.</div>
                                </div>
                                <div className="swiper-slide-order">
                                    <span>Номер заявки </span>
                                    <span>6776</span>
                                </div>
                            </div>
                            <div className="swiper-slide-content">
                                Очень доволен своим выбором, вежливо проконсультировали, до мелочей, создали 2-Д проект для моей дачи, монтажники были приятно удивлены потом. Спасибо!
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}