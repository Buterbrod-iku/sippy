import style from './team.module.scss'
import Person from "@/components/landing/team/person/person";

const Team = () => {
    return (
        <div className={style.main}>
            <div className={style.posText}>
                <h2>Команда</h2>
                <p>Добро пожаловать в нашу команду! Мы - группа увлеченных людей, работающих вместе для достижения наших целей.
                    Познакомьтесь с людьми, стоящими за нашим успехом.</p>
            </div>


            <div className={style.posPerson}>
                <Person name={"Мелков Илья"} type={"Frontend developer"} stack={"Next, React, TS, SCSS, Python"}/>
                <Person name={"Шипугин Никита"} type={"Fullstack developer"} stack={"Next, React, TS, SCSS, Python"}/>
                <Person name={"Толматов Дмитрий"} type={"IOS developer"} stack={"Swift"}/>
                <Person name={"Ангальдт Михаил"} type={"Android developer"} stack={"Kotlin"}/>
                <Person name={"Порошин Валерий"} type={"Backend developer"} stack={"PHP, Laravel"}/>
            </div>
        </div>
    );
};

export default Team;