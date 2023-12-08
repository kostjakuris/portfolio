import React from "react";
import "./Card.css";
import {useTheme} from "../../useTheme/useTheme";
import {Link} from "react-router-dom";

interface PropsData {
    title: string,
    firstColumn: string,
    secondColumn?: string,
    thirdColumn?: string,
    fourthColumn?: string,
    firstIcon?: string,
    firstDarkIcon?: string,
    secondIcon?: string,
    secondDarkIcon?: string,
    thirdIcon?: string,
    thirdDarkIcon?: string,
}

const Card = ({...props}: PropsData) => {
    const {theme} = useTheme();
    return (
        <article className="card">
            <div className="card__title">{props.title}</div>
            <div className="card__info card__first">
                <div className="card__number-icon">
                    <img src={theme === "dark" ? props.firstIcon : props.firstDarkIcon} alt=""/>
                </div>
                <p className="card__number-link">{props.firstColumn}</p>
            </div>
            <div className="card__info card__second">
                <div className="card__number-icon">
                    <img src={theme === "dark" ? props.secondIcon : props.secondDarkIcon} alt=""/>
                </div>
                <p className="card__number-link">{props.secondColumn}</p>
            </div>
            <div className="card__info card__third">
                <div className="card__number-icon">
                    <img src={theme === "dark" ? props.thirdIcon : props.thirdDarkIcon} alt=""/>
                </div>
                <p className="card__number-link">{props.thirdColumn}</p>
                <Link className="card__number-link" to="/projects">{props.fourthColumn}</Link>
            </div>
        </article>
    );
};

export default Card;