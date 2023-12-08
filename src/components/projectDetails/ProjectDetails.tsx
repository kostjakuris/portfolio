import React from "react";
import "./ProjectDetails.css";


const ProjectDetails = () => {
    return (
        <div className="details">
            <h2 className="details__title">Service for work with device</h2>
            <p className="details__text">Service for work with device was my intern project in company
                Darten-it-Group.This project contained 4 roles:customer,owner,regional admin and admin.This service
                allowed you to control your devices,which you can buy if you are a customer or have your own ones,if you
                are an owner,regional admin or admin.
            </p>
            
            <p className="details__second-title">There are a few screenshots of my project</p>
            
            <div className="details__screenshots">
                <span className="details__screenshots-title">Homepage</span>
                <img className="details__screenshots-img" src={"img/homepage.svg"} alt="homepage"/>
                <span className="details__screenshots-title">Devices</span>
                <img className="details__screenshots-img" src={"img/devices.svg"} alt="devices"/>
                <span className="details__screenshots-title">Groups of devices</span>
                <img className="details__screenshots-img" src={"img/groups.svg"} alt="groups"/>
            
            </div>
        </div>
    );
};

export default ProjectDetails;