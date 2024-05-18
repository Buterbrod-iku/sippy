import style from './person.module.scss'
import Image from "next/image";
import tg from '@/../public/ico/telegram.ico'
import Link from "next/link";

const Person = ({name, type, stack, img, href}) => {
    return (
        <div className={style.main}>
            <div className={style.Image} style={{backgroundImage: `url(${img})`}}>

            </div>

            <div className={style.posAside}>
                <p className={style.name}>{name}</p>
                <p className={style.typeDev}>{type}</p>
                <p className={style.stack}>{stack}</p>
                <Link href={href} target={"_blank"}>
                    <div className={style.telegram}>
                        <Image src={tg} alt={"ads"}/>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Person;