import style from './lineInfo.module.scss'

const LineInfo = ({name, text}) => {
    return (
        <div className={style.main}>
            <p>{name}</p>

            <p>{text}</p>
        </div>
    );
};

export default LineInfo;