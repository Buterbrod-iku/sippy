import style from './blockDownload.module.scss'
import Image from "next/image";

const BlockDownload = ({ico, text, download}) => {
    return (
        <div className={style.main}>
            <Image src={ico} alt={"asd"}/>
            <div>
                <p>
                    {
                        download ? "Скачать" : null
                    }
                </p>
                <p className={style.download}>{text}</p>
            </div>
        </div>
    );
};

export default BlockDownload;