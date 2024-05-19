import React from 'react';
import style from "./contentInvite.module.scss";
import TileProfileInvite from "@/components/mainApp/leftActivity/contentInvite/tileProfileInvite/tileProfileInvite";

const ContentInvite = () => {
    return (
        <div className={style.main}>
            <h3>Мероприятия</h3>

            <div className={style.info}>
                <div className={style.posButton}>
                    <button>Подписан</button>
                    <button>Подробнее</button>
                </div>

                <div className={style.listProfile}>
                    <TileProfileInvite name={"Зайцев Матвей"}/>
                    <TileProfileInvite name={"Хорошев Кирилл"}/>
                    <TileProfileInvite name={"Екатерина Василькова"}/>
                </div>
            </div>
        </div>
    );
};

export default ContentInvite;