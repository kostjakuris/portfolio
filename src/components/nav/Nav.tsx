import React from "react";
import "./Nav.css";
// import {useTheme} from "../useTheme/useTheme";


interface navData {
    navActive: boolean;
    setNavActive: (navActive: boolean) => void;
    handleAboutClick: () => void;
    handleSkillsClick: () => void;
    handleExperienceClick: () => void;
}

const Nav = ({...props}: navData) => {
    // const {theme, setTheme} = useTheme();
    
    // const switchTheme = () => {
    //     if (theme === "dark") {
    //         setTheme("light");
    //     } else {
    //         setTheme("dark");
    //     }
    // };
    //
    return (
        <div>
            <div className={props.navActive ? "nav__wrapper active" : "nav__wrapper"}
                 onClick={() => props.navActive ? props.setNavActive(false) : null}>
                <div className={!props.navActive ? "logo--mobile active" : "logo--mobile"}>Kostja</div>
                <div className="logo">Kostja</div>
                
                <div className="nav__mobile-icon" onClick={() => props.setNavActive(true)}>
                    <img className={!props.navActive ? "nav__mobile-img.active" : "nav__mobile-img"}
                         src={"img/nav_icon.svg"} alt="nav"
                    />
                    
                    <img className={props.navActive ? "nav__mobile-cross.active" : "nav__mobile-cross"}
                         src={"img/cross.svg"} alt="nav"
                    />
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleAboutClick}>About me</button>
                        </li>
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleSkillsClick}>Skills</button>
                        </li>
                        <li className="nav__item">
                            <button className="nav__link" onClick={props.handleExperienceClick}>Experience</button>
                        </li>
                    </ul>
                </nav>
            {/*    <div className="nav__right">*/}
            {/*        <div className="nav__number">*/}
            {/*            <a href="tel:+380667545138" className="nav__number-link">+380 66 754 51 38</a>*/}
            {/*            <div className="nav__number-icon">*/}
            {/*                <img className="nav__number-img"*/}
            {/*                     src={theme === "dark" ? "img/phone.svg" : "img/phone_dark.svg"} alt="phone"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="nav__theme" onClick={switchTheme}>*/}
            {/*            <img className="nav__theme-img"*/}
            {/*                 src={theme === "dark" ? "img/theme-light-dark.svg" : "img/theme-dark.svg"} alt="theme"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            
            {/*<div className={props.navActive ? "nav__mobile-wrapper active" : "nav__mobile-wrapper"}>*/}
            {/*    <div className="nav__theme--mobile" onClick={switchTheme}>*/}
            {/*        <img className="nav__theme-img"*/}
            {/*             src={theme === "dark" ? "img/theme-light-dark.svg" : "img/theme-dark.svg"} alt="theme"/>*/}
            {/*    </div>*/}
            {/*    <nav className="nav__mobile">*/}
            {/*        <ul className="nav__list-mobile">*/}
            {/*            <li className="nav__item" onClick={(e) => e.stopPropagation()}>*/}
            {/*                <button className="nav__link-mobile" onClick={props.handleAboutClick}>About me</button>*/}
            {/*            </li>*/}
            {/*            <li className="nav__item" onClick={(e) => e.stopPropagation()}>*/}
            {/*                <button className="nav__link-mobile" onClick={props.handleSkillsClick}>Skills</button>*/}
            {/*            </li>*/}
            {/*            <li className="nav__item" onClick={(e) => e.stopPropagation()}>*/}
            {/*                <button className="nav__link-mobile" onClick={props.handleExperienceClick}>Experience*/}
            {/*                </button>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*    <div className="nav__right-mobile">*/}
            {/*        <div className="nav__number">*/}
            {/*            <a href="tel:+380667545138" className="nav__number-link">+380 66 754 51 38</a>*/}
            {/*            <div className="nav__number-icon">*/}
            {/*                <img className="nav__number-img"*/}
            {/*                     src={theme === "dark" ? "img/phone.svg" : "img/phone_dark.svg"} alt="phone"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    */}
            {/*    </div>*/}
            </div>
        </div>
    );
};

export default Nav;