import style from './pointFilter.module.scss'
import Image from "next/image";

const PointFilter = ({img, text}) => {
    return (
        <div className={style.block}>
            <Image src={img} alt={"sad"}/>
            <p>{text}</p>
        </div>
    );
};

export default PointFilter;