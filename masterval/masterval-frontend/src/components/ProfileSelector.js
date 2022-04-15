
const ProfileSelector = ({ selectedProfileName, setSelectedProfileName, selectedProfileCourses, setSelectedProfileCourses, setBackdrop, backdrop, selectedProfileCoursesIsLocalStorage, allCourses
}) => {

    const [editableText, setEditableText] = useState(false);
    const [temporaryProfileName, setTemporaryProfileName] = useState("");
    const [isFirstClick, setIsFirstClick] = useState(true);


    const onChangeProfileName = (e) => {
        setTemporaryProfileName(e.target.value);
    }


    const onClickSelectProfile = () => {

        if (isFirstClick) {
            if (!selectedProfileCoursesIsLocalStorage) {
                let transformedProfileCourses = [];

                const preTransformedProfileCourses = profiles.find((profile) => profile.name == selectedProfileName);
                preTransformedProfileCourses.courselist.map((profile) => transformedProfileCourses.push(allCourses.find((course) => course.coursecode == profile.coursecode && course.semester == profile.choosensemester)))

                if (JSON.stringify(transformedProfileCourses) != JSON.stringify(selectedProfileCourses)) {
                    setBackdrop(true);
                }
            }
            setIsFirstClick(false);
        } else {
            setIsFirstClick(true);
        }
    }


    const onChangeSelectedProfile = (e) => {

        setSelectedProfileName(e.target.value);

        if (e.target.value != localStorageProfileName) {
            setSelectedProfileCoursesIsLocalStorage(false);
            let transformedProfileCourses = [];

            const preTransformedProfileCourses = profiles.find((profile) => profile.name == e.target.value);
            preTransformedProfileCourses.courselist.map((profileCourse) => transformedProfileCourses.push(allCourses.find((course) => course.coursecode == profileCourse.coursecode && course.semester == profileCourse.choosensemester)))
            setSelectedProfileCourses(transformedProfileCourses);
        } else {
            setSelectedProfileCoursesIsLocalStorage(true);
            setSelectedProfileCourses(selectedCourses);
        }




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