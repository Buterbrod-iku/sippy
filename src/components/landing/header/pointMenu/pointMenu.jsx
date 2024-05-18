import style from './pointMenu.module.scss'
import Link from "next/link";

const PointMenu = ({text, href}) => {
    return (
        <Link href={href} className={style.Link}>
            <div className={style.main}>
                {text}
            </div>
        </Link>
    );
};

export default PointMenu;