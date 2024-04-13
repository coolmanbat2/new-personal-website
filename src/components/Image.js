
import "../css/Image.css";
import profilePic from "../static/profile.png";

function Image() {
    return (
        <img src={profilePic} alt="profile" className="profile-img"/>
    ) 
}

export default Image;