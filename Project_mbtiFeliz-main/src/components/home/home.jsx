import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
    const url = window.location.href; // url 복사
    const copyAlert = () => {
        alert('링크 생성!');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src="img/mainLogo.png"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>전 애인 MOOD 테스트</h2>
                        <p>전 애인의 무드를 통해 <br />현애인의 무드를 추천해드립니다.</p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/tripMBTI" className={styles.start__button}>
                            테스트 시작하기
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;