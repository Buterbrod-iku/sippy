import style from './filterBlock.module.scss'
import Image from "next/image";
import sabantuy from '@/../public/ico/party.svg'
import sport from '@/../public/ico/sport.svg'
import sippy from '@/../public/ico/sippy.svg'
import film from '@/../public/ico/film.svg'
import house from '@/../public/ico/house.svg'
import PointFilter from "@/components/mainApp/leftActivity/filterBlock/pointFilter/pointFilter";

const FilterBlock = () => {
    return (
        <div className={style.main}>
            <PointFilter img={sabantuy} text={"Сабантуй"}/>
            <PointFilter img={sport} text={"Спорт"}/>
            <PointFilter img={sippy} text={"Пабы, рестораны"}/>
            <PointFilter img={film} text={"Кино"}/>
            <PointFilter img={house} text={"Вечер дома"}/>
        </div>
    );
};

export default FilterBlock;