import style from './header.module.scss'
import Image from "next/image";
import logo from '@/../public/image/logo/SippyLogo.png'
import PointMenu from "@/components/landing/header/pointMenu/pointMenu";

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.posLogo}>
                <Image src={logo} alt={'Логотип'} className={style.logo}/>
            </div>

            <div className={style.menu}>
                <PointMenu text={"Скачать"} href={"home"} />
                <PointMenu text={"Описание"} href={"main"} />
                <PointMenu text={"Команда"} href={"about"} />
            </div>
        </div>
    );
};

export default Header;