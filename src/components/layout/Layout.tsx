import React, {useRef} from "react";
import Header from "../header/Header";
import General from "../general/General";
import About from "../about/About";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";


const Layout = () => {
    const aboutRef = useRef<HTMLElement | null>(null);
    const skillsRef = useRef<HTMLElement | null>(null);
    const experienceRef = useRef<HTMLElement | null>(null);
    
    const handleAboutClick = () => {
        aboutRef.current?.scrollIntoView({behavior : "smooth"});
    };
    
    const handleSkillsClick = () => {
        skillsRef.current?.scrollIntoView({behavior : "smooth"});
    };
    
    const handleExperienceClick = () => {
        experienceRef.current?.scrollIntoView({behavior : "smooth"});
    };
    return (
        <div>
            <Header
                handleAboutClick={handleAboutClick}
                handleSkillsClick={handleSkillsClick}
                handleExperienceClick={handleExperienceClick}
            />
            <General/>
            <About ref={aboutRef}/>
            <Experience ref={experienceRef}/>
            <Skills ref={skillsRef}/>
        </div>
    );
};

export default Layout;