import style from './tileProfileInvite.module.scss'

const TileProfileInvite = ({name}) => {
    return (
        <div className={style.main}>
            <div className={style.pos}>
                <div className={style.avatar}></div>
                <p>{name}</p>
            </div>

            <button className={style.unfollow}>Отписаться</button>
        </div>
    );
};

export default TileProfileInvite;