import style from './profile.module.scss'
import LineInfo from "@/components/mainApp/leftActivity/profile/lineInfo/lineInfo";

const Profile = ({close}) => {
    return (
        <div className={style.main}>

            <div className={style.posProfile}>
                <div className={style.avatar}></div>
                <p>Мелков Илья</p>
            </div>

            <div className={style.posAbout}>
                <p>Люблю читать книги</p>
                <div className={style.aside}>Можно указать любые подробности</div>
            </div>

            <div className={style.posMainInfo}>
                <LineInfo name={"E-mail"} text={"melkov@mail.ru"}/>
                <LineInfo name={"Пол"} text={"Мужской"}/>
                <LineInfo name={"Возраст"} text={"19"}/>
            </div>

            <div className={style.close} onClick={close}>+</div>
        </div>
    );
};

export default Profile;