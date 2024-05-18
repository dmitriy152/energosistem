"use client"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contacts() {
    const mapCenter = [56.353395, 43.874590];
    const customIconImageHref = '/static/img/map-marker.svg';
    const customIconImageSize = [30, 42];
    const customIconImageOffset = [-15, -42];
    return (
        <section className="contacts">
            <div className="contacts__wrapper wrapper">
                <div className="contacts__container">
                    <div className="contacts__info">
                        <div className="contacts__info__phone">
                            <span className="contacts__info__phone__title">Телефон:</span>
                            <a href="tel:+78312910015">+7 (831) 291-00-15</a>
                            <a href="tel:+78312809969">+7 (831) 280-99-69</a>
                        </div>
                        <div className="contacts__info__location">
                            <span className="contacts__info__location__title">Юридический адрес:</span>
                            <a href="https://yandex.ru/maps/org/energosistemy/1682729173/?ll=43.874590%2C56.353395&z=17" target='_blank'>
                                Нижний Новгород, улица Заводской парк, 29
                            </a>
                        </div>
                    </div>
                    <YMaps>
                        <Map defaultState={{ center: mapCenter, zoom: 15 }} width={500} height={400} className='contacts__map'>
                            <Placemark
                                geometry={mapCenter}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: customIconImageHref,
                                    iconImageSize: customIconImageSize,
                                    iconImageOffset: customIconImageOffset
                                }}    
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
    )
}