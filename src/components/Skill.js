import "../css/Skill.css";

function Skill(props) {
    return (
       <div className="pill">
            {props.children}
       </div> 
    )
}

export default Skill;