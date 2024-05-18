"use client"
import style from './pointMenu.module.scss'
import Link from "next/link";
import {handleClickScrollUp} from "@/components/utils/handleScroll";

const PointMenu = ({text, href}) => {
    return (
        <div className={style.main} onClick={() => handleClickScrollUp(href)}>
            {text}
        </div>
    );
};

export default PointMenu;