import React from "react";
import ProfileInfo from "./profile-info/ProfileInfo";
import Skills from "./skills/Skills";

const Profile = () => {
    return (
        <div className="Profile">
            <ProfileInfo />
            <Skills />
        </div>
    );
};

export default Profile;
