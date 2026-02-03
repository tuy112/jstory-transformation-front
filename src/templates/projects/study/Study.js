import React, { useMemo, useState } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

// 임시 데이터
import { wrongnoteList } from './data/studyDummy';
import { memoryList } from './data/memoryData';

function Study() {
  const [activeTab, setActiveTab] = useState('wrongnote');

  const sortedWrongnotes = useMemo(() => {
    return [...wrongnoteList].sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return b.round - a.round;
    });
  }, []);

  return (
    <div id='wrap'>
      <Header/>

      <main className="study-page">
        <div className="study-container">
          <h1 className="study-title">공부 기록방</h1>
          <p className="study-desc">탭 버튼을 눌러 내용을 전환하세요.</p>

          <div className="tab-bar">
            <button
              type="button"
              className={`tab-btn ${activeTab === 'wrongnote' ? 'active' : ''}`}
              onClick={() => setActiveTab('wrongnote')}
            >
              정보처리기사 오답노트
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === 'duum' ? 'active' : ''}`}
              onClick={() => setActiveTab('duum')}
            >
              정보처리기사 두음
            </button>
          </div>

          <section className="tab-panel">
            {activeTab === 'wrongnote' && (
              <div className="panel-inner">
                <h2>정보처리기사 오답노트</h2>
                <p>틀린 문제와 헷갈린 개념을 정리하는 공간입니다.</p>

                <div className="list-wrap">
                  {sortedWrongnotes.map((note, idx) => (
                    <div className="note-card" key={`${note.year}-${note.round}-${idx}`}>
                      <div className="note-head">
                        <span className="note-badge">{note.year}년 {note.round}회차</span>
                        <span className="note-date">{note.createdAt}</span>
                      </div>

                      <h3 className="note-title">{note.title}</h3>

                      <ul className="note-items">
                        {note.items.map((it, i) => (
                          <li key={i} className="note-item">
                            <div className="q">Q. {it.q}</div>
                            <div className="a">A. {it.a}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'duum' && (
              <div className="panel-inner">
                <h2>정보처리기사 두음</h2>
                <p>암기용 두문자와 연상법을 정리하는 공간입니다.</p>

                <div className="list-wrap">
                  {memoryList.map((d, idx) => (
                    <div className="duum-card" key={`${d.topic}-${idx}`}>
                      <h3 className="duum-topic">{d.topic}</h3>
                      <div className="duum-row">
                        <span className="label">키워드</span>
                        <span className="value">{d.keyword}</span>
                      </div>
                      <div className="duum-row">
                        <span className="label">두음</span>
                        <span className="value">{d.mnemonic}</span>
                      </div>
                      <p className="duum-note">{d.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default Study;