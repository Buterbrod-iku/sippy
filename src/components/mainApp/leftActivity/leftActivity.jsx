'use client'
import style from './leftActivity.module.scss'
import {useState} from "react";

const LeftActivity = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <div className={style.close}
                 onClick={() => setOpen(old => !old)}
                 style={!open ? {right: "-3%"} : {right: "22%"}}
            >
                {
                    open ? "Скрыть меню" : "Показать меню"
                }
            </div>

            <div className={style.main} style={!open ? {width: "0"} : {width: "25%"}}>

                <div className={style.profileButton}  style={!open ? {display: "none"} : {display: "flex"}}>
                    <div className={style.avatar}></div>
                    <p className={style.name}>Игорь Питон</p>
                    <div className={style.try}></div>
                </div>

                <div className={style.hr}></div>
            </div>
        </>

    );
};

export default LeftActivity;