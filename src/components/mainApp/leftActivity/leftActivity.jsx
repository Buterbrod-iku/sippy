'use client'
import style from './leftActivity.module.scss'
import {useState} from "react";
import Profile from "@/components/mainApp/leftActivity/profile/profile";
import TopButtonInProflie from "@/components/mainApp/leftActivity/topButtonInProflie/topButtonInProflie";
import ContentInvite from "@/components/mainApp/leftActivity/contentInvite/contentInvite";

// а че лефт а не райт?
const LeftActivity = () => {
    const [open, setOpen] = useState(true)
    const [profile, setProfile] = useState(false)

    const closeProfile = (e) => {
        e.preventDefault()
        setProfile(false)
    }

    return (
        <>
            <div className={style.close}
                 onClick={() => setOpen(old => !old)}
                 style={!open ? {right: "-3%"} : {right: "23%"}}
            >
                {
                    open ? "Скрыть меню" : "Показать меню"
                }
            </div>
            <div className={style.main} style={!open ? {width: "0"} : {width: "25%"}}>
            {
                profile ? (
                    <Profile close={closeProfile}/>
                ) :
                    (
                        <>
                            <TopButtonInProflie setProfile={setProfile}/>

                            <ContentInvite />
                        </>
                    )
            }
            </div>



        </>

    );
};

export default LeftActivity;