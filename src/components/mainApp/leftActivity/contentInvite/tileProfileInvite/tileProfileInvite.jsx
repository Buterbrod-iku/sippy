import style from './tileProfileInvite.module.scss'

const TileProfileInvite = () => {
    return (
        <div className={style.main}>
            <div className={style.pos}>
                <div className={style.avatar}></div>
                <p>Олег Станиславович</p>
            </div>

            <button className={style.unfollow}>Отписаться</button>
        </div>
    );
};

export default TileProfileInvite;