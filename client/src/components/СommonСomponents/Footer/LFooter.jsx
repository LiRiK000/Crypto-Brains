import React from 'react';
import styles from "./LandingFooter.module.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function LFooter() {
  return (
      <MDBContainer className={styles.wrapper}>
        <MDBFooter className='text-center'>
          <MDBContainer className='p-4'>
            <section>
              <div className={styles.imgSection}>
                <img src={require('./img/logo.png')} alt={'Logo'}/>
                <div className={styles.community}>
                  <h1 className={styles.title}>Community: </h1>
                  <a href="#" target={"_blank"}>
                    <img src={require('./img/ds.png')} alt={'ds'}/>
                  </a>
                  <a href="#" target={"_blank"}>
                    <img src={require('./img/tg.png')} alt={'tg'}/>
                  </a>
                  <a href="#" target={"_blank"}>
                    <img src={require('./img/inst.png')} alt={'inst'}/>
                  </a>
                  <a href="#" target={"_blank"}>
                    <img src={require('./img/in.png')} alt={'in'}/>
                  </a>
                  <a href="#" target={"_blank"}>
                    <img src={require('./img/yt.png')} alt={'yt'}/>
                  </a>
                </div>
              </div>
            </section>
            <section className={styles.line}></section>

            <section>
              <MDBRow col='6' className={styles.wrapperRow}>
                <MDBCol lg='2' md='4' sx='2' className={styles.col}>
                  <div className={styles.title}>
                    <h5>Crypto Brains</h5>
                  </div>
                  <div className={styles.text}>
                    <ul className='list-unstyled mb-0'>
                      <li className={styles.text}>
                        <a href='/about' className={styles.text}>
                          Our Team
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='/road' className={styles.text}>
                          Road Map
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='/risk' className={styles.text}>
                          Risk Disclosure
                        </a>
                      </li>
                    </ul>
                  </div>
                </MDBCol>

                <MDBCol lg='2' md='4' sx='2' className={styles.col}>
                  <div className={styles.title}>
                    <h5>Knowledge</h5>
                  </div>
                  <div className={styles.text}>
                    <ul className='list-unstyled mb-0'>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          F.A.Q.
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          Articles
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='/beginner' className={styles.text}>
                          Beginner’s Guide
                        </a>
                      </li>
                    </ul>
                  </div>
                </MDBCol>

                <MDBCol lg='2' md='4' sx='2' className={styles.col}>
                  <div className={styles.title}>
                    <h5>Services</h5>
                  </div>
                  <div className={styles.text}>
                    <ul className='list-unstyled mb-0'>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          API Service
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='/token' className={styles.text}>
                          Token Listing
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          API Document
                        </a>
                      </li>
                    </ul>
                  </div>
                </MDBCol>

                <MDBCol lg='2' md='4' sx='2' className={styles.col}>
                  <div className={styles.title}>
                    <h5>Exchange</h5>
                  </div>
                  <div className={styles.text}>
                    <ul className='list-unstyled mb-0'>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          Referral
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          Markets
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          Affiliate Program
                        </a>
                      </li>
                    </ul>
                  </div>
                </MDBCol>

                <MDBCol lg='2' md='4' sx='2' className={styles.col}>
                  <div className={styles.title}>
                    <h5>Support Service</h5>
                  </div>
                  <div className={styles.text}>
                    <ul className='list-unstyled mb-0'>
                      <li className={styles.text}>
                        <a href='#' className={styles.text}>
                          Career </a>
                        <span className={styles.wah}>
                          ( We Are Hiring )
                        </span>
                      </li>
                      <li className={styles.text}>
                        <a href='/Community' className={styles.text}>
                          Community
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='/ts' className={styles.text}>
                          Technical Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </MDBCol>

                <MDBCol lg='2' md='4' sx='2' className={styles.col}>
                  <div className={styles.title}>
                    <h5>Press</h5>
                  </div>
                  <div className={styles.text}>
                    <ul className='list-unstyled mb-0'>
                      <li className={styles.text}>
                        <a href='/blog' className={styles.text}>
                          Blog
                        </a>
                      </li>
                      <li className={styles.text}>
                        <a href='/news' className={styles.text}>
                          News
                        </a>
                      </li>
                    </ul>
                  </div>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
        </MDBFooter>
      </MDBContainer>
  );
}