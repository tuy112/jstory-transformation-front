import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import bookData from "./data/bookData";

const Book = () => {
    const [page, setPage] = useState(0);

    const nextPage = () => {
        setPage(prev => prev + 1);
    };

    const prevPage = () => {
        setPage(prev => Math.max(prev - 1, 0));
    }

    // 페이지별 콘텐츠 렌더링
    const renderContent = () => {
        if (page === 0) {
        return (
            <div className="page-content cover">
            <h2>📚 끌림의 코드 : 지배의 법칙</h2>
            <p className="subtitle">
                연애 관계에서 상대를 통제·지배하는 전략을 강조하는 구성
            </p>

            <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2"
                alt="romance"
                className="cover-image"
            />
            </div>
        );
        }

        if (page === 1) {
        return (
            <div className="page-content toc">
                <h2>[목차] 끌림의 코드 : 지배의 법칙</h2>
<pre className="toc-text">
{`
부제 : 여자의 본능 위에서 노는 상위 1% 남자의 프레임 전략

[프롤로그] 당신이 그동안 ‘좋은 남자’여서 실패했던 이유
● 여자는 착한 남자를 원한다고 말하고, 나쁜 남자에게 다리를 벌린다
● 진화심리학이 증명하는 잔혹한 진실 : 알파와 베타의 차이
● 이 책을 덮는 순간, 당신의 '착한' 가면은 박살 날 것이다

[PART 1. 포식자의 마인드셋 : 내면의 진화]
제1장 | 프레임의 전쟁 : 관계의 우위는 어떻게 결정되는가
제2장 | 가치의 역설 : 여자가 매달리는 남자의 비밀
제3장 | 언어의 지배 : 무의식을 파고드는 대화법
제4장 | 거절의 미학 : 'No'라고 말할 때 섹시함이 완성된다

[PART 2] ~ [PART 4] 생략
`}
</pre>
            </div>
        );
        } else if (page === 2) {
            <div className="page-content toc">
<pre className="toc-text">
{`
[PART 2. 매력의 시각화 : 말하지 않고 압도하라]
제5장 | 비언어적 패권 : 말하지 않고 압도하는 힘
제6장 | 온라인 생태계의 포식자 : 카톡과 SNS 공략
`}
</pre>
            </div>
        };


        const content = bookData[page - 2];
        if (!content) return null;

        return (
        <div className="page-content">
            <h2>{content.title}</h2>
            <p>{content.body}</p>
        </div>
        );
    };

    return (
        <div id="wrap">
            <Header />
            <main id="container" className="main">
                <section className="book-wrap">
                    <div className="book">
                        <div className="book-spine"></div>

                        <div className="book-pages">
                            {renderContent()}

                            <button className="prev-btn" onClick={prevPage}>
                                ⬅
                            </button>
                            <button className="next-btn" onClick={nextPage}>
                                ➡
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Book;