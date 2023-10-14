import React, { FC } from 'react';
import MenuCont from "components/СommonСomponents/MenuContext/MenuContext";
import NewsContent from "components/PageComponents/BlogComp/NewsComp/NewsContent/NewsContent";
import Nr from "components/PageComponents/BlogComp/NewsComp/NewsRelated/NR";
import LFooter from "components/СommonСomponents/LandingFooter/LFooter";
import './News.css';


const images: string[] =[
    require('./NewsContentImg/1.png'),
    require('./NewsContentImg/2.png'),
    require('./NewsContentImg/3.png'),
    require('./NewsContentImg/4.png'),
    require('./NewsContentImg/5.png'),
    require('./NewsContentImg/6.png'),
    require('./NewsContentImg/7.png'),
    require('./NewsContentImg/8.png'),
    require('./NewsContentImg/9.png'),
    require('./NewsContentImg/10.png'),
    require('./NewsContentImg/11.png'),
    require('./NewsContentImg/12.png'),
];

const imagesNR: string[] = [
    require('./RelatedNewsImg/1.png'),
    require('./RelatedNewsImg/2.png'),
    require('./RelatedNewsImg/3.png'),
    require('./RelatedNewsImg/4.png')
]
const title: string = 'Crypto Has New Announcement About Russia And ...'
const NewsMain: FC = () => {
    return (
        <>
            <MenuCont />
            <NewsContent images={images} title={title}/>
            <Nr images={imagesNR} title={title}/>
            <LFooter />
        </>
    );
}


export default NewsMain;