import React, {FC} from "react";
import BlogTradeComp from "../../components/PageComponents/BlogTradeComp/BlogTradeComp";
import BlogCards from "../../components/PageComponents/BlogTradeComp/BlogTradeComp";
import LFooter from "../../components/СommonСomponents/Footer/LFooter";
import MenuCont from "../../components/СommonСomponents/MenuContext/MenuContext";
import { Button, Container } from "react-bootstrap";
import styles from './BlogTrade.module.css';
import { style } from "@mui/system";



const FirstBlog: string[] = [require('../../pages/BlogTrade/img/1.png'), require('../../pages/BlogTrade/img/2.png'), require('../../pages/BlogTrade/img/3.png'), require('../../pages/BlogTrade/img/4.png')];
const SecondBlog: string[] = [require('../../pages/BlogTrade/img/5.png'), require('../../pages/BlogTrade/img/6.png'), require('../../pages/BlogTrade/img/7.png'), require('../../pages/BlogTrade/img/8.png')];
const ThirdBlog: string[] = [require('../../pages/BlogTrade/img/9.png'), require('../../pages/BlogTrade/img/10.png'), require('../../pages/BlogTrade/img/11.png'), require('../../pages/BlogTrade/img/12.png')];

const cardData = [
    {imageIndex: 0},
    {imageIndex: 1},
    {imageIndex: 2},
    {imageIndex: 3}
];

const BlogTradePage = () => {
    return (
        <>
            <Container fluid className={styles.wrapper}>
                <>
                    <div className={styles.class_wrapper}>
                        <div className={styles.imgSection}>
                            <img src={require('./img/stonks.png')} alt="Bitcoin" />
                        </div>
                        <div>
                            <div className={styles.card_wrapper}>
                                <div className={styles.date}>
                                    <div>
                                        <span>Created On: </span>
                                        <span className={styles.year}> 20 Mar, 2022</span>
                                    </div>
                                    <span>10 Mins Read</span>
                                </div>
                                <div className={styles.title}>
                                    <span>Crypto Traders Has News About Crypto Currency.</span>
                                </div>
                                <div className={styles.annotation}>
                                    <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</span>
                                </div>
                                <div className={styles.user}>
                                    <img src={require('./img/face.png')} alt="face" className={styles.img}/>
                                    <span className={styles.nameUser}>Smith Watson</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Container>
            <BlogCards images={FirstBlog} cardData={cardData}/>
            <BlogCards images={SecondBlog} cardData={cardData}/>
            <BlogCards images={ThirdBlog} cardData={cardData}/>
        </>    
    );
}

export default BlogTradePage;