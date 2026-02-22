import { useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header";
import Footer from "../../component/Footer";

function Home() {
    // STAR!!
    useEffect(() => {
        const starContainer = document.querySelector('.stars');
        if (!starContainer) return;

        const createStar = () => {
            const star = document.createElement('div');
            const size = Math.random() * 3 + 1;
            
            star.style.cssText = `
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                width: ${size}px;
                height: ${size}px;
            `;
            
            return star;
        };

        const stars = Array.from({ length: 100 }, createStar);
        starContainer.append(...stars);

        return () => {
            starContainer.innerHTML = '';
        };
    }, []);

    return (
        <div id="wrap">
            <div className="stars"></div>
            <Header />

            <main id="container" className="main">
                <section className="main-wrap">
                    <h2>저만의 힐링공간에 오신 모든 분들을 환영합니다 ^_^</h2>
                    <div className="main-intro">
                        <div className="main-detail detail1">
                            <h3>About Me</h3>
                            <p>안녕하세요! Developer Jay입니다.</p>
                            <p>새로운 도전과 배움을 즐기는 개발자입니다.</p>
                            <Link to="/profile" className="cta-button">
                                PROFILE로 바로가기
                            </Link>
                        </div>
                        <div className="main-detail detail2">
                            <h3>다이어트 기록방</h3>
                            <p>식단 및 다이어트 기록이 담긴 공간입니다.</p>
                            <Link to="/diet" className="cta-button">
                                다이어트 기록 보러가기
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default Home;