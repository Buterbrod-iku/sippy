'use client'
import React, {useState} from 'react';
import style from "./signup.module.scss";
import InputForLogin from "@/components/ui-kit/inputForLogin/inputForLogin";
import {onChangeLogin} from "@/components/utils/formUtils/change";
import Link from "next/link";
import {useFetching} from "@/components/utils/hooks/useFetching";
import Profile from "@/API/profile";

function delKey(obj) {
    const fields = ['name', 'password']
    let objKeys = Object.keys(obj)
    objKeys.forEach(function(item) {
        if (fields.indexOf(item) === -1) {
            delete obj[item]
        }
    })
    return obj
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
    }
    const [fetchSendReg, isLoading, error] = useFetching(async (query) => {
        await Profile.sendNewUser(query)
        console.log("YEEES")
        console.log(delKey(reg))
    })
    const [fetchSendAuth, isLoadingAuth, errorAuth] = useFetching(async (query) => {
        let response = await Profile.sendAuth(query)

        setToken(response.data)
        console.log('hello')
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

                <button className={style.button} onClick={send}>Зарегистрироваться</button>
                <p className={style.aside}>У вас уже есть аккаунт? <Link href={"/login"} className={style.Link}>Авторизируйтесь</Link></p>
            </div>
        </div>
    );
};

export default Page;