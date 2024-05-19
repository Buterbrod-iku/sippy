"use client"
import style from './map.module.scss'

import { MapContainer, TileLayer, CircleMarker, Popup, Marker } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useState } from 'react';
import { useEffect } from 'react';
import L_Icons from "./L_Icons";

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
                        <CustomIconMarker key={point.id} pos={[point.longitude, point.latitude]} _color="blue" popup_content={point.category_id}/>
                            
                    )
                }
                {
                    // В КОМПОНЕНТУ X2 (ЭТО ГЕО)
                    (locationPoint.latitude == 0 && locationPoint.longitude == 0) ? "" : 
                    <CustomCircleMarker pos={[locationPoint.latitude, locationPoint.longitude]} _color="red" popup_content="GEO"/>
                    
                }
                    
                {
                    // В КОМПОНЕНТУ X3 (ЭТО ПО КЛИКУ)
                    (clickPoint.latitude == 0 && clickPoint.longitude == 0) ? "" : 
                    <CustomCircleMarker pos={[locationPoint.latitude, locationPoint.longitude]} _color="red" popup_content="NEW"/>
                }
                
                <MapClickListen setLoc={setLocationPoint} setClick={setClickPoint}/>
            </MapContainer>

            
        </div>
    );
};

export default Map;

const CustomIconMarker = ({pos, _color, popup_content}) => {
    return (
    <Marker icon={L_Icons.pub_icon} position={pos} radius={10} color="transparent" fillColor={_color} opacity={1}>
        <Popup className={style.popup}>
            <div className={style.popupDiv}>
                {popup_content}
            </div>
        </Popup>
    </Marker>
    )
};

const CustomCircleMarker = ({pos, _color, popup_content}) => {
    return (
    <CircleMarker center={pos} radius={10} color="transparent" fillColor={_color} opacity={1}>
        <Popup className={style.popup}>
            <div className={style.popupDiv}>
                {popup_content}
            </div>
        </Popup>
    </CircleMarker>
    )
};




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
