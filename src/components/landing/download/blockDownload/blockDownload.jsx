import style from './blockDownload.module.scss'
import Image from "next/image";
import Link from "next/link";

const BlockDownload = ({ico, text, download, href}) => {
    return (
        <Link href={href}>
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
        </Link>
    );
};

export default BlockDownload;