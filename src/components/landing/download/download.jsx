import style from './download.module.scss'
import Image from "next/image";
import logo from '@/../public/image/logo/SippyLogo.png'
import BlockDownload from "@/components/landing/download/blockDownload/blockDownload";
import ios from '@/../public/image/all/ios.svg'
import windows from '@/../public/image/logo/SippyLogo.png'
import android from '@/../public/image/all/android.svg'
import phone from '@/../public/image/background/phone.png'

const Download = () => {
    return (
        <div className={style.main}>
            <div className={style.posTitle}>
                <h2>Sippy</h2>
                <p>Приложение, которое помогает находить людей для совместного времяпрепровождения по интересам</p>
            </div>

            <div className={style.posBlock}>
                <BlockDownload ico={android} text={"на Android"} download={true}/>
                <BlockDownload ico={ios} text={"на IOS"} download={true}/>
                <BlockDownload ico={windows} text={"Web-версия"} download={false}/>
            </div>

            <div className={style.posImage}>
                <Image src={phone} alt={"phone"}/>
            </div>
        </div>
    );
};

export default Download;