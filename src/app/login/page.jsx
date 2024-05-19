"use client"
import style from './login.module.scss'
import InputForLogin from "@/components/ui-kit/inputForLogin/inputForLogin";
import {useState} from "react";
import {useFetching} from "@/components/utils/hooks/useFetching";
import Profile from "@/API/profile";
import {onChangeDefault, onChangeLogin} from "@/components/utils/formUtils/change";
import Link from "next/link";
import { useEffect, useMemo } from 'react';
import axios from 'axios';
import {useRouter} from "next/navigation";

const Page = () => {
    const [auth, setAuth] = useState({})
    const [token, setToken] = useState("")

    // TODO: Перепроверить сохранение
    useEffect(() => {
        if (token) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          localStorage.setItem('token',token);
          route.push("/template")
        } else {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem('token');
          console.log("Token deleted");
        }
    }, [token]);
    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );

    const route = useRouter()


    const send = async (e) => {
        e.preventDefault()
        await fetchSendAuth(auth)

        if (token) {
            route.push("/template")
        }
    }
    const [fetchSendAuth, isLoading, error] = useFetching(async (query) => {
        let response = await Profile.sendAuth(query)

        console.log(response)
        if (response.status === 200) {
            setToken(response.data)
        } else {
            setToken("")
        }

    })

    return (
        <div className={style.main}>
            <div className={style.block}>
                <h1>Авторизация</h1>

                <div>
                    <InputForLogin text={"E-mail"} type={"text"} name={"email"} change={(event) => onChangeLogin(event, auth, setAuth)}/>
                    <InputForLogin text={"Пароль"} type={"password"} name={"password"} change={(event) => onChangeLogin(event, auth, setAuth)}/>
                </div>

                {
                    error ? <p style={{color: "red", marginTop: "20px"}}>{error}</p> : null
                }
                <button className={style.button} onClick={send}>Авторизоваться</button>
                <p className={style.aside}>У вас нет учётной записи? <Link href={"/signup"} className={style.Link}>Зарегистрируйтесь</Link></p>
            </div>
        </div>
    );
};

export default Page;