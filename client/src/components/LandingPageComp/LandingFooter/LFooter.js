import React from 'react';
import styles from "./LandingFooter.module.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';

export default function LFooter() {
  return (
    <wrapper className={styles.wrapper}>
    <MDBFooter className='text-center' >
      <MDBContainer className='p-4'>
        <section >
            <div className={styles.imgSection}>
              <div className={styles.imgLogo}>
                <img src={require('./img/logo.png')}/>
              </div>
              <div className={styles.community}>
                <h1 className={styles.title}>Community: </h1>
                  <img src={require('./img/ds.png')}/>
                  <img src={require('./img/tg.png')}/>
                  <img src={require('./img/inst.png')}/>
                  <img src={require('./img/in.png')}/>
                  <img src={require('./img/yt.png')}/>
              </div>
            </div>
        </section>
        <section className={styles.line}></section>

        <section className={styles.colWrapper}>
          <MDBRow col='6' className={styles.wrapperRow}>
            <MDBCol lg='2' md='4' sx='2' className={styles.col} >
              <div className={styles.title}>
                <h5 >Crypto Brains</h5>
              </div>
              <div className={styles.text}>
                <ul className='list-unstyled mb-0'>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      About Us
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Our Team
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Road Map
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Risk Disclosure
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg='2' md='4' sx='2' className={styles.col} >
              <div className={styles.title}>
                <h5 >Knowledge</h5>
              </div>
              <div className={styles.text}>
                <ul className='list-unstyled mb-0'>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      F.A.Q.
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Articals
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Video Tutorial
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Beginner’s Guide
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg='2' md='4' sx='2' className={styles.col} >
              <div className={styles.title}>
                <h5 >Services</h5>
              </div>
              <div className={styles.text}>
                <ul className='list-unstyled mb-0'>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      API Service
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Token Listing
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      API Document
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Ticket Services
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg='2' md='4' sx='2' className={styles.col} >
              <div className={styles.title}>
                <h5 >Exchange</h5>
              </div>
              <div className={styles.text}>
                <ul className='list-unstyled mb-0'>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      P2P
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Referral
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Markets
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Affiliate Program
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg='2' md='4' sx='2' className={styles.col} >
              <div className={styles.title}>
                <h5 >Support Sevice</h5>
              </div>
              <div className={styles.text}>
                <ul className='list-unstyled mb-0'>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Career <span className={styles.wah}>( We Are Hiring )</span>
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Comunity
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Customer Chat
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Technical Support
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg='2' md='4' sx='2' className={styles.col} >
              <div className={styles.title}>
                <h5 >Press</h5>
              </div>
              <div className={styles.text}>
                <ul className='list-unstyled mb-0'>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Blog
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      News
                    </a>
                  </li>
                  <li className={styles.text}>
                    <a href='#!' className={styles.text}>
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </section>

        <section className={styles.line}></section>

        <MDBContainer lg='6' md='3' className={styles.aboutUs}>
          <div className={styles.textSection}>
            <span className={styles.title}>©Copyright 2022 All Rights Are Reserved.</span>
            <span className={styles.title}>Privacy Policy</span>
            <span className={styles.title}>Terms of Use</span>
          </div>
          <div className={styles.btnSection}>
            <MDBDropdown className={styles.btn}>
              <MDBDropdownToggle>Language</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Russian</MDBDropdownItem>
                  <MDBDropdownItem link>English</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            <MDBDropdown>
              <MDBDropdownToggle>INR</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>RUB</MDBDropdownItem>
                  <MDBDropdownItem link>USD</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        
        </MDBContainer>
      
      </MDBContainer>
    </MDBFooter>
    </wrapper>
  );
}