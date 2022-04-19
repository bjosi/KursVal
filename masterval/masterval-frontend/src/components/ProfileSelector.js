import "../styles/MyCourses.css";
import React, {  useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ProfileSelector = ({ onChangeProfileName, onClickSelectProfile, onChangeSelectedProfile, editName, selectedProfileName, localStorageProfileName, profiles, editableText }) => {

    

    return (
        < h3 className = "profile_name" >
    {editableText ?
            <input type="text" onChange={(e) => onChangeProfileName(e)} placeholder={selectedProfileName} />
            : <select onClick={onClickSelectProfile} onChange={(e) => onChangeSelectedProfile(e)}  >
                <option value={localStorageProfileName}>{localStorageProfileName}</option>
                {profiles.map((profile) => <option selected={profile.name == selectedProfileName ? "selected" : ""} value={profile.name}>{profile.name}</option>)}
            </select>
    }
    <FontAwesomeIcon onClick={editName} className="change_profile_name_icon" icon={editableText ? faCircleCheck : faPen} />
        </h3 >
    )

}
export default ProfileSelector;