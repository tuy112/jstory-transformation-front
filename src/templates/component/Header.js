import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import Pika from "../../static/images/pika.png";

function Header() {

    // 1. 햄버거 메뉴 상태 관리
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    // 2. 타이핑 효과
    const text = "안녕하세요! 풀스택 개발자, Jay입니다😊";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
        const timeout = setTimeout(() => {
            setDisplayText((prev) => prev + text.charAt(index));
            setIndex((prev) => prev + 1);
        }, 70);

        return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <header id="header">
            <div className="inner">
                {/* Header Title */}
                <div className="header-title">
                    <h1 className="header-logo">
                        <Link to="/home" className="site-maintitle">Jstory</Link>
                        <span className="site-subtitle"> - Jay's Healing Space</span>
                    </h1>
                </div>
                
                {/* Header HamburgerMenu */}
                <button 
                    className="hamburger-menu" 
                    onClick={toggleMenu}
                    aria-label="메뉴 열기"
                    aria-expanded={isOpen}
                >
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={`side-menu ${isOpen ? "open" : ""}`} id="sideMenu">
                    
                    {/* 햄버거 메뉴 프로필 공간 */}
                    <div className="hamburger-profile">
                        <img src={Pika} alt="프로필 이미지" className="profile-image" />
                        <h2 className="profile-name">JAY</h2>
                        <span className="profile-description">{displayText}</span>
                    </div>
                    
                    <ul className="menu-section">
                        <li><Link to="/home">Home</Link></li>
                        <li>
                            <Link to="/profile">About Me</Link>
                        </li>
                        <li>
                            <Link to="/project">외부 프로젝트 투입 이력</Link>
                        </li>
                        <li>
                            <Link 
                                to="https://github.com/tuy112/Jstory" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Jstory ASIS ver.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="https://jstoryjay.notion.site/Jay-Fullstack-Dev-174211b2c60980839dfef67206e6af66"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                노션이력서 바로가기 
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Header topmenu */}
                <div className="top-menu">
                    <div className="project-buttons">
                        <div className="web-login">
                            <div className="main-button">프로젝트 바로가기</div>
                            <div className="sub-buttons">
                                <Link to="/mountain" className="sub-button">산행기록방</Link>
                                <Link to="/study" className="sub-button">공부기록방</Link>
                                <Link to="/three" className="sub-button">3D공간</Link>
                                <Link to="/todo" className="sub-button">투두리스트</Link>
                                <Link to="/book" className="sub-button">'끌림의 코드 : 지배의 법칙' 책 읽기</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;