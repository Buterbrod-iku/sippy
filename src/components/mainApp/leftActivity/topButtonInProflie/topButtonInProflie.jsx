import React from 'react';
import style from "./topButtonInProflie.module.scss";

const TopButtonInProflie = ({setProfile}) => {
    return (
        <>
            <div className={style.profileButton} onClick={() => setProfile(old => !old)}
                 style={!open ? {display: "none"} : {display: "flex"}}>
                <div className={style.avatar}></div>
                <p className={style.name}>Игорь Питон</p>
                <div className={style.try}></div>
            </div>

            <div className={style.hr}></div>
        </>
    );
};

export default TopButtonInProflie;