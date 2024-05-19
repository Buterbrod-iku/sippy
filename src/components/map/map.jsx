"use client"
import style from './map.module.scss'

import { MapContainer, TileLayer, CircleMarker, Popup, Marker, ZoomControl } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useState } from 'react';
import { useEffect } from 'react';
import L_Icons from "./L_Icons";
import CustomPopup from '../customPopup/customPopup';

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
            <MapContainer center={[center.long, center.lat]} zoom={13} zoomControl={false}>

                <TileLayer
                    attribution=''
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {

                    points.map(point => 
                        <CustomIconMarker key={point.id} pos={[point.longitude, point.latitude]} _color="blue" popup_content={point.category_id} category={point.category_id}/>     
                    )
                }
                {

                    (locationPoint.latitude == 0 && locationPoint.longitude == 0) ? "" : 
                    <CustomCircleMarker pos={[locationPoint.latitude, locationPoint.longitude]} _color="red" popup_content="GEO"/>
                    
                }
                    
                {

                    (clickPoint.latitude == 0 && clickPoint.longitude == 0) ? "" : 
                    <CustomIconMarker pos={[clickPoint.latitude, clickPoint.longitude]} popup_content="Добавление" category={"add"}/>
                }

                
                
                <ZoomControl position="bottomleft"/>
                <MapClickListen setLoc={setLocationPoint} setClick={setClickPoint}/>
            </MapContainer>

            
        </div>
    );
};

export default Map;

const CustomIconMarker = ({pos, _color, popup_content, category}) => {
    const iconPairs = {
        "pubs": L_Icons.pub_icon,
        "at_home": L_Icons.house_icon,
        "sabantui": L_Icons.party_icon,
        "cinema": L_Icons.film_icon,
        "sport": L_Icons.sport_icon,
        "add": L_Icons.add_icon
    }
    
    
    return (
    <Marker icon={iconPairs[category]} position={pos} radius={10} color="transparent" fillColor={_color} opacity={1}>
        <Popup>
            <CustomPopup/>
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
