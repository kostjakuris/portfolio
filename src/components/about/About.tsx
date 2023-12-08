import React, {forwardRef, LegacyRef, MutableRefObject} from "react";
import "./About.css";

interface aboutData {
    ref: MutableRefObject<HTMLElement | null>;
}

const About = ({...props}: aboutData, aboutRef: LegacyRef<HTMLElement> | undefined) => {
    return (
        <section className="about" ref={aboutRef}>
            <h2 className="general__title">About me</h2>
            <div className="about__wrapper">
                <div className="about__img">
                    <img className="about__img-photo" src={"img/collage1.svg"} alt="collage"/>
                </div>
                <p className="about__text">
                    My name is Kostja and I`m 19 years old.I`m living in Zaporoshye.
                    Now I`m student of the fourth course in collage ZIEIT at the faculty IPZ-110K9.I want to find job
                    with flexible hours.I like to get new knowledges and I very motivated to find a job. I`ll do my best
                    to make my work perfect.
                </p>
            </div>
        </section>
    );
};

export default forwardRef(About);