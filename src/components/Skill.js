import "../css/Skill.css";

function Skill(props) {
    return (
       <div className="pill center round small-text">
            {props.children}
       </div> 
    )
}

export default Skill;