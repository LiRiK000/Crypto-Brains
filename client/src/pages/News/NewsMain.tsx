import { FC } from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import NewsContent from "components/BlogComp/NewsComp/NewsContent/NewsContent";

const NewsMain = () => {
    return (
        <>
            <MenuCont />
            <NewsContent/>
        </>
    );
}


export default NewsMain;