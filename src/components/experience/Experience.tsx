import React, {forwardRef, LegacyRef, MutableRefObject} from "react";
import "./Experience.css";

interface experienceData {
    ref: MutableRefObject<HTMLElement | null>;
}
const Experience = ({...props}:experienceData,experienceRef:LegacyRef<HTMLElement> | undefined) => {
    return (
        <section className="experience" ref={experienceRef}>
            <h2 className="general__title">Experience</h2>
            <div className="about__wrapper">
                <div className="about__img">
                    <img className="experience__img-photo" src={"img/computer.svg"} alt="computer"/>
                </div>
                <div className="about__text experience__text">
                    I had an internship in company
                    Darten-it-Group.During this internship I tought to work in group and
                    made project with called “Service
                    for working with the device”.
                </div>
            </div>
        </section>
    );
};

export default forwardRef (Experience);