import React, { FC } from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import NewsContent from "components/PageComponents/BlogComp/NewsComp/NewsContent/NewsContent";

const NewsMain: FC = () => {
    return (
        <>
            <MenuCont />
            <NewsContent/>
        </>
    );
}


export default NewsMain;