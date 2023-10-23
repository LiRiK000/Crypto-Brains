import React, {FC} from "react";
import BlogTradeComp from "../../components/PageComponents/BlogTradeComp/BlogTradeComp";
import BlogCards from "../../components/PageComponents/BlogTradeComp/BlogTradeComp";
import LFooter from "../../components/СommonСomponents/Footer/LFooter";
import MenuCont from "../../components/СommonСomponents/MenuContext/MenuContext";



const FirstBlog = [require('./img'), require('./img'), require('./img'), require('./img')];
const SecondBlog = [require('./img'), require('./img'), require('./img'), require('./img')];
const ThirdBlog = [require('./img'), require('./img'), require('./img'), require('./img')];

const cardData1 = [
    {imageIndex: 0},
    {imageIndex: 1},
    {imageIndex: 2},
    {imageIndex: 3}
]

const cardData2 = [
    {imageIndex: 4},
    {imageIndex: 5},
    {imageIndex: 6},
    {imageIndex: 7},
]

const cardData3 = [
    {imageIndex: 8},
    {imageIndex: 9},
    {imageIndex: 10},
    {imageIndex: 11}
]

const BlogTradePage = () => {
    return (
        <>
            <MenuCont/>
            <BlogCards images={FirstBlog} cardData={cardData1}/>
            <BlogCards images={SecondBlog} cardData={cardData2}/>
            <BlogCards images={ThirdBlog} cardData={cardData3}/>
            <LFooter/>
        </>
    );
}

export default BlogTradePage;