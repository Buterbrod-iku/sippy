import style from './customPopup.module.scss'

import { useState } from 'react';
import { useEffect } from 'react';

import Image from 'next/image';
import pub_img from '@/../public/ico/sippy.svg'
import house_img from '@/../public/ico/house.svg'
import party_img from '@/../public/ico/party.svg'
import film_img from '@/../public/ico/film.svg'
import sport_img from '@/../public/ico/sport.svg'

const PopupInput = ({inputType, label, placeholder}) => {
    if (inputType == "small_text")
        return (
            <div className={style.popupInputBlock}>
                <label>{label}</label>
                <input type="text" placeholder={placeholder}/>
            </div>
        )

    
    const [selectedTypes, setSelectedTypes] = useState({
        type1: true,
        type2: true,
        type3: true,
        type4: true,
        type5: true
    })

    const turnType = (_type) => {
        setSelectedTypes({
            type1: ("type1" == _type),
            type2: ("type2" == _type),
            type3: ("type3" == _type),
            type4: ("type4" == _type),
            type5: ("type5" == _type),
        })
    }

    if (inputType == "event")
        return (
            <div className={style.popupInputBlock}>
                <label>{label}</label>
                <ul className={style.eventTypes}>
                    <li className={!selectedTypes.type1 ? style.unactive : "" } onClick={() => turnType("type1")} > <Image alt="12345" width={28} height={28} className={style.image} src={pub_img}/> </li>
                    <li className={!selectedTypes.type2 ? style.unactive : "" }  onClick={() => turnType("type2")}> <Image width={28} height={28} className={style.image} src={house_img}/> </li>
                    <li className={!selectedTypes.type3 ? style.unactive : "" }  onClick={() => turnType("type3")}> <Image width={28} height={28} className={style.image} src={party_img}/> </li>
                    <li className={!selectedTypes.type4 ? style.unactive : "" }  onClick={() => turnType("type4")}> <Image width={28} height={28} className={style.image} src={film_img}/> </li>
                    <li className={!selectedTypes.type5 ? style.unactive : "" }  onClick={() => turnType("type5")}> <Image width={28} height={28} className={style.image} src={sport_img}/> </li>
                </ul>
            </div>
        )

    if (inputType == "time")
        return (
            <div className={style.popupInputBlock}>
                <label>{label}</label>
                <input aria-label="Time" type="time" />
            </div>
        )
}

const CustomPopup = ({interactionType}) => {

    const send = () => {

    }

    return (
        <div className={style.popupWrapper}>
            <div className={style.popupTitle}>Мероприятие</div>
            <PopupInput name="name" label="Название" inputType="small_text" placeholder="Введите название мероприятия"/>
            <PopupInput name="event_type" label="Тип мероприятия" inputType="event" />
            <PopupInput name="description" label="Описание" inputType="small_text" placeholder="Укажите, что будет происходить"/>
            <PopupInput name="time_start" label="Время начала" inputType="time" />
            <button className={style.send} onClick={send}>Подтвердить</button>
            {/* <div>
                <div>Тип мероприятия</div>
                <input>Пабы, рестораны</input>
            </div>
            <div>
                <div>Время</div>
                <div>picker</div>
            </div>
            <div>
                <div>Время</div>
                <div>picker</div>
            </div> */}


        </div>
    )
    
}


export default CustomPopup;