import React, {forwardRef, LegacyRef, MutableRefObject} from "react";
import "./Skills.css";

interface skillsData {
    ref: MutableRefObject<HTMLElement | null>;
}
const Skills = ({...props}:skillsData,skillsRef:LegacyRef<HTMLElement> | undefined) => {
    return (
        <section className="skills" ref={skillsRef}>
            <h2 className="general__title">Skills</h2>
            <div className="skills__top">
                <div className="skills__wrapper">
                    <h3 className="skills__wrapper-title">React</h3>
                    <div className="skills__wrapper-stats">
                        <div className="skills__wrapper-firstOval">
                            <div className="skills__wrapper-firstBlueOval"></div>
                        </div>
                    </div>
                </div>
                <div className="skills__wrapper">
                    <h3 className="skills__wrapper-title">MongoDB</h3>
                    <div className="skills__wrapper-stats">
                        <div className="skills__wrapper-firstOval">
                            <div className="skills__wrapper-secondBlueOval"></div>
                        </div>
                    </div>
                </div>
                <div className="skills__wrapper">
                    <h3 className="skills__wrapper-title">MySQL</h3>
                    <div className="skills__wrapper-stats">
                        <div className="skills__wrapper-firstOval">
                            <div className="skills__wrapper-thirdBlueOval"></div>
                        </div>
                    </div>
                </div>
                <div className="skills__wrapper">
                    <h3 className="skills__wrapper-title">Typescript</h3>
                    <div className="skills__wrapper-stats">
                        <div className="skills__wrapper-firstOval">
                            <div className="skills__wrapper-forthBlueOval"></div>
                        </div>
                    </div>
                </div>
                <div className="skills__wrapper">
                    <h3 className="skills__wrapper-title">Node js</h3>
                    <div className="skills__wrapper-stats">
                        <div className="skills__wrapper-firstOval">
                            <div className="skills__wrapper-fifthBlueOval"></div>
                        </div>
                    </div>
                </div>
                <div className="skills__wrapper">
                    <h3 className="skills__wrapper-title">C++</h3>
                    <div className="skills__wrapper-stats">
                        <div className="skills__wrapper-firstOval">
                            <div className="skills__wrapper-sixthBlueOval"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default forwardRef (Skills);