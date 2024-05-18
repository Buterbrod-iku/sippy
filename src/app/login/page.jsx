"use client"
import style from './login.module.scss'
import InputForLogin from "@/components/ui-kit/inputForLogin/inputForLogin";
import {useState} from "react";
import {useFetching} from "@/components/utils/hooks/useFetching";
import Profile from "@/API/profile";
import {onChangeDefault, onChangeLogin} from "@/components/utils/formUtils/change";
import Link from "next/link";

const Page = () => {
    const [auth, setAuth] = useState({})
    const [token, setToken] = useState("")

    const send = async (e) => {
        e.preventDefault()
        await fetchSendAuth(auth)
    }
    const [fetchSendAuth, isLoading, error] = useFetching(async (query) => {
        let response = await Profile.sendAuth(query)

        setToken(response.data)
        console.log(response.data)
        console.log(auth)
    })

    return (
        <div className={style.main}>
            <div className={style.block}>
                <h1>Авторизация</h1>

                <div>
                    <InputForLogin text={"E-mail"} type={"text"} name={"email"} change={(event) => onChangeLogin(event, auth, setAuth)}/>
                    <InputForLogin text={"Пароль"} type={"password"} name={"password"} change={(event) => onChangeLogin(event, auth, setAuth)}/>
                </div>

                <button className={style.button} onClick={send}>Авторизоваться</button>
                <p className={style.aside}>У вас нет учётной записи? <Link href={"/signup"} className={style.Link}>Зарегистрируйтесь</Link></p>
            </div>
        </div>
    );
};

export default Page;