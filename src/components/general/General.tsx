import React from "react";
import "./General.css";
import Card from "./card/Card";

const General = () => {
    return (
        <section className="general">
            <h2 className="general__title">General info</h2>
            <div className="cards">
                <div className="cards__first">
                    <Card
                        title={"Contacts"}
                        firstIcon={"img/phone.svg"}
                        firstDarkIcon={"img/phone_dark.svg"}
                        secondIcon={"img/clarity_email-solid.svg"}
                        secondDarkIcon={"img/clarity_email-dark.svg"}
                        thirdIcon={"img/simple-icons_github.svg"}
                        thirdDarkIcon={"img/simple-icons_github-dark.svg"}
                        firstColumn={"+380 66 754 51 38"}
                        secondColumn={"kostjn04e@gmail.com"}
                        thirdColumn={"https://github.com/kostjakuris"}/>
                    
                    <Card title={"Education"}
                          firstColumn={"College ZIEIT"}
                          secondColumn={"faculty IPZ-110K9"}
                          thirdColumn={"4 course"}
                    />
                </div>
                <div className="cards__first">
                    <Card
                        title={"Languages"}
                        firstColumn={"English – (B1-B2)"}
                        secondColumn={"Ukrainian – native"}
                    />
                    <Card
                        title={"Projects"}
                        firstColumn={"https://test-site-mu-henna.vercel.app/users"}
                        fourthColumn={"More details"}
                    />
                </div>
            </div>
        </section>
    );
};

export default General;