import style from './inputForLogin.module.scss'

const InputForLogin = ({text, type, name, change}) => {
    if(type === "gender"){
        return (
            <div className={style.main}>
                <label>{text}</label>
                <select className={style.select} name={name} onChange={(e) => change(e)}>
                    <option value={1}>Мужчина</option>
                    <option value={0}>Женщина</option>
                </select>
            </div>
        )
    } else if (type === "textarea") {
        return (
            <div className={style.main}>
                <label>{text}</label>
                <textarea name={name} onChange={change}/>
            </div>
        )
    }

    return (
        <div className={style.main}>
            <label>{text}</label>
            <input type={type} name={name} onChange={change}/>
        </div>
    );
};

export default InputForLogin;