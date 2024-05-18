'use client'
import React, {useState} from 'react';
import style from "./signup.module.scss";
import InputForLogin from "@/components/ui-kit/inputForLogin/inputForLogin";
import {onChangeLogin} from "@/components/utils/formUtils/change";
import Link from "next/link";
import {useFetching} from "@/components/utils/hooks/useFetching";
import Profile from "@/API/profile";

function delKey(obj) {
    let result = {...obj}
    const fields = ['email', 'password']
    let objKeys = Object.keys(result)
    objKeys.forEach(function(item) {
        if (fields.indexOf(item) === -1) {
            delete result[item]
        }
    })
    return result
}

const Page = () => {
    const [reg, setReg] = useState({
        "gender": 1,
    })
    const [auth, setAuth] = useState({})
    const [token, setToken] = useState("")

    const send = async (e) => {
        await fetchSendReg(reg)

        await fetchSendAuth(delKey(reg))
        console.log(reg)
    }
    const [fetchSendReg, isLoading, error] = useFetching(async (query) => {
        await Profile.sendNewUser(query)
    })
    const [fetchSendAuth, isLoadingAuth, errorAuth] = useFetching(async (query) => {
        let response = await Profile.sendAuth(query)

        setToken(response.data)
    })

    return (
        <div className={style.main}>
            <div className={style.block}>
                <h1>Регистрация</h1>

                <div>
                    <InputForLogin text={"Имя"} type={"text"} name={"name"} change={(event) => onChangeLogin(event, reg, setReg)}/>
                    <InputForLogin text={"E-mail"} type={"email"} name={"email"} change={(event) => onChangeLogin(event, reg, setReg)}/>
                    <InputForLogin text={"Пароль"} type={"password"} name={"password"} change={(event) => onChangeLogin(event, reg, setReg)} />
                    <InputForLogin text={"Пол"} type={"gender"} name={"gender"} change={(event) => onChangeLogin(event, reg, setReg)}/>
                    <InputForLogin text={"Возраст"} type={"number"} name={"age"} change={(event) => onChangeLogin(event, reg, setReg)}/>
                    <InputForLogin text={"О себе"} type={"textarea"} name={"about_me"} change={(event) => onChangeLogin(event, reg, setReg)}/>
                </div>

                {
                    error ? <p style={{color: "red", marginTop: "20px"}}>{error}</p> : null
                }
                <button className={style.button} onClick={send}>Зарегистрироваться</button>
                <p className={style.aside}>У вас уже есть аккаунт? <Link href={"/login"} className={style.Link}>Авторизируйтесь</Link></p>
            </div>
        </div>
    );
};

export default Page;