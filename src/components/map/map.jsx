"use client"
import style from './map.module.scss'

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useState } from 'react';
import { useEffect } from 'react';

import 'leaflet/dist/leaflet.css'


const Map = ({points, center}) => {
    
    const [locationPoint, setLocationPoint] = useState({
        latitude: 0,
        longitude: 0
    })
    const [clickPoint, setClickPoint] = useState({
        latitude: 0,
        longitude: 0
    })



    return (
        <div>
            <MapContainer center={[center.long, center.lat]} zoom={11}>

                <TileLayer
                    attribution='&copy'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    // В КОМПОНЕНТУ
                    points.map(point => 
                        <CircleMarker key={point.id} center={[point.longitude, point.latitude]} radius={10} color="transparent" fillColor="blue" opacity={0.8}>
                            <Popup class={style.popup}>
                                <div class={style.popupDiv}>
                                    {point.category_id}
                                    Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>
                                </div>
                            </Popup>
                        </CircleMarker>
                    )
                }
                {
                    // В КОМПОНЕНТУ X2 (ЭТО ГЕО)
                    (locationPoint.latitude == 0 && locationPoint.longitude == 0) ? "" : <CircleMarker center={[locationPoint.latitude, locationPoint.longitude]} radius={22} color="transparent" fillColor="red" opacity={1}>
                        <Popup class={style.popup}>
                            <div class={style.popupDiv}>
                                Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>
                            </div>
                        </Popup>
                    </CircleMarker> 
                    
                }
                    
                {
                    // В КОМПОНЕНТУ X3 (ЭТО ПО КЛИКУ)
                    (clickPoint.latitude == 0 && clickPoint.longitude == 0) ? "" : <CircleMarker center={[clickPoint.latitude, clickPoint.longitude]} radius={12} color="transparent" fillColor="black" opacity={1}>
                        <Popup class={style.popup}>
                            <div class={style.popupDiv}>
                                Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>Инфо<br/>
                            </div>
                        </Popup>
                    </CircleMarker>
                }
            
                <MapClickListen setLoc={setLocationPoint} setClick={setClickPoint}/>
            </MapContainer>

            
        </div>
    );
};

export default Map;

// Получает гео пользователя
const MapClickListen = ({setLoc, setClick}) => {
    const map = useMapEvents({
    click: (e) => {
        setClick(
            {
                longitude: e.latlng.lng,
                latitude: e.latlng.lat
            }
        )
    },
    locationfound: (location) => {
        console.log('location found:', location)
        setLoc(location)
    },
    })
    // map.locate() // Получение гео (обработка в locationfound) -- сделать обновление раз в N секунд локации и точек
    
    return null
}