import style from './template.module.scss'
import LeftActivity from "@/components/mainApp/leftActivity/leftActivity";
import FilterBlock from "@/components/mainApp/leftActivity/filterBlock/filterBlock";

const Page = () => {
    return (
        <div className={style.main}>
            <FilterBlock />
            <LeftActivity />
        </div>
    );
};

export default Page;