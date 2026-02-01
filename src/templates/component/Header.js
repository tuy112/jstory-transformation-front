import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // 햄버거 메뉴 토글
    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

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
                    <ul className="menu-section">
                        <li><Link to="/home">Home</Link></li>
                        <li>
                            <Link to="/profile">About Me</Link>
                        </li>
                        <li>
                            <Link to="/project">프로젝트 모음</Link>
                        </li>
                        <li><Link to="/todo">투두리스트</Link></li>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;