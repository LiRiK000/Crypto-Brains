import React from "react";
import styles from './RelatedBlog.module.css';
import {Container} from "react-bootstrap";
import BlogCards from "../../components/PageComponents/BlogTradeComp/BlogTradeComp";


const FirstBlog = [require('../../pages/BlogTrade/img/1.png'), require('../../pages/BlogTrade/img/2.png'), require('../../pages/BlogTrade/img/3.png'), require('../../pages/BlogTrade/img/4.png')];

const cardData = [
    { imageIndex: 0 },
    { imageIndex: 1 },
    { imageIndex: 2 },
    { imageIndex: 3 }
]


export const RelatedBlog = () => {

    return (
        <>
            <Container fluid className={styles.wrapper}>
                <>
                    <div className={styles.hold_wrapper}>
                        <div className={styles.card}>
                            <div className={styles.imgSection}>
                                <img src={require('../BlogTrade/img/stonks.png')} alt="Bitcoin"/>
                            </div>
                            <div className={styles.textSection}>
                                <div className={styles.Date}>
                                    <div className={styles.year}>
                                        <span>Created On: </span>
                                        <span style={{color: "#ADB3BF"}}>20 Mar, 2022</span>
                                    </div>
                                    <div className={styles.user}>
                                        <img src={require('../BlogTrade/img/face.png')} alt={'face'} className={styles.img}/>
                                        <span>Smith Watson</span>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <h2 className={styles.h2}>Crypto Traders Has News About Crypto Currency.</h2>
                                    <div className={styles.textR}>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br/><br/>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                    </div>
                                    <h4 className={styles.h4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                                    <div className={styles.textR}>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span><br/><br/>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                    </div>
                                    <h4 className={styles.h4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                                    <div className={styles.textR}>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</span>
                                    </div>
                                </div>
                                <div className={styles.annotation}>
                                    <span>“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”</span><br/>
                                    <span className={styles.user}>Jerry Smith</span>
                                </div>
                                <div className={styles.text}>
                                    <h4 className={styles.h4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                                    <div className={styles.textR}>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span><br/><br/>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                                    </div>
                                    <h4 className={styles.h4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                                    <div className={styles.textR}>
                                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</span>
                                    </div>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.foot}>
                                    <div className={styles.wrappShare}>
                                        <span className={styles.textR} style={{margin: '0'}}>Share This on  -</span>
                                        <div className={styles.links}>
                                            <a href="#"><img src={require('../../components/СommonСomponents/Footer/img/ds.png')} alt="discord" /></a>
                                            <a href="#"><img src={require('../../components/СommonСomponents/Footer/img/tg.png')} alt="telegram" /></a>
                                            <a href="#"><img src={require('../../components/СommonСomponents/Footer/img/inst.png')} alt="instagram" /></a>
                                            <a href="#"><img src={require('../../components/СommonСomponents/Footer/img/in.png')} alt="in" /></a>
                                            <a href="#"><img src={require('../../components/СommonСomponents/Footer/img/yt.png')} alt="youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Container>
            <BlogCards images={FirstBlog} cardData={cardData}></BlogCards>
        </>
    )
}

export default RelatedBlog;
