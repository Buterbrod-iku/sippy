import style from './team.module.scss'
import Person from "@/components/landing/team/person/person";
import ilya from '@/../public/image/developers/Ilya.jpg'
import dmitry from '@/../public/image/developers/Dmitry.jpg'
import miha from '@/../public/image/developers/miha.jpg'
import nikita from '@/../public/image/developers/nikita.jpg'
import valera from '@/../public/image/developers/valera.jpg'

const Team = () => {
    return (
        <div className={style.main} id={"about"}>
            <div className={style.posText}>
                <h2>Команда</h2>
                <p>Добро пожаловать в нашу команду! Мы - группа увлеченных людей, работающих вместе для достижения наших целей.
                    Познакомьтесь с людьми, стоящими за нашим успехом.</p>
            </div>


            <div className={style.posPerson}>
                <Person name={"Мелков Илья"} type={"Frontend developer"} stack={"Next, React, TS, SCSS, Python"} img={ilya.src} href={"https://t.me/setInterval_iku"}/>
                <Person name={"Шипугин Никита"} type={"Fullstack developer"} stack={"Next, React, TS, SCSS, Figma"} img={nikita.src} href={"https://t.me/absent_today"}/>
                <Person name={"Толматов Дмитрий"} type={"IOS developer"} stack={"Swift, UI/UX"} img={dmitry.src} href={"https://t.me/incandesc3nce"}/>
                <Person name={"Ангальдт Михаил"} type={"Android developer"} stack={"Kotlin, Jetpack Compose"} img={miha.src} href={"https://t.me/za1nds"}/>
                <Person name={"Порошин Валерий"} type={"Backend developer"} stack={"PHP, Laravel, Postgres"} img={valera.src} href={"https://t.me/b6dbde"}/>
            </div>
        </div>
    );
};

export default Team;