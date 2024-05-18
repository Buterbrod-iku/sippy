import style from './person.module.scss'
import Image from "next/image";
import tg from '@/../public/ico/telegram.ico'

const Person = ({name, type, stack}) => {
    return (
        <div className={style.main}>
            <div className={style.Image}>

            </div>

            <div className={style.posAside}>
                <p className={style.name}>{name}</p>
                <p className={style.typeDev}>{type}</p>
                <p className={style.stack}>{stack}</p>
                <div className={style.telegram}>
                    <Image src={tg} alt={"ads"} />
                </div>
            </div>
        </div>
    );
};

export default Person;