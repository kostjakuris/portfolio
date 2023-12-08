import React, {useState} from "react";
import "./Header.css";
import Nav from "../nav/Nav";

 interface handleData {
    handleAboutClick: () => void;
    handleSkillsClick: () => void;
    handleExperienceClick: () => void;
}

const Header = ({...props}: handleData) => {
    const [navActive, setNavActive] = useState(false);
    return (
        <div>
            <header className="header" onClick={() => navActive ? setNavActive(false) : null}>
                <Nav navActive={navActive}
                     setNavActive={setNavActive}
                     handleAboutClick={props.handleAboutClick}
                     handleSkillsClick={props.handleSkillsClick}
                     handleExperienceClick={props.handleExperienceClick}
                />
                <div className="header__wrapper">
                    <div className="header__info">
                        <h2 className="header__title">Hello, I`m Kostja</h2>
                        <a href="mailto:kostjn04e@gmail.com" className="header__email">kostjn04e@gmail.com</a>
                    </div>
                    <div className="header__img">
                        <img className="header__img-photo" src={"img/my_photo.svg"} alt="my_photo"/>
                    </div>
                    <div className="header__information">
                        <h2 className="header__develop">Junior Frontend Developer</h2>
                        <div className="header__collage">
                            <img className="header__collage-img" src={"img/collage.svg"} alt="collage"/>
                            <h3 className="header__collage-title">Student of college ZIEIT</h3>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;