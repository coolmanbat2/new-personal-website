import "../css/Image.css";
import profilePic from "../static/profile.png";

function Image() {
  return (
    <div className="profile-background">
      <img src={profilePic} alt="profile" className="profile-img" />
    </div>
  );
}

export default Image;
