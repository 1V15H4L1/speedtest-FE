import React from "react";
import "../Styles/DisplayComponent.css";
function SpeedComponent(props) {
	let name = sessionStorage.getItem("Name").toUpperCase()
	return (
		<>
			{props.Message === "Matched" && props.Speed>45 && (<div className="speed">Soo fast....!</div>)}
			{props.Message === "Matched" && (<div className="speed">Hello {name} your speed is {props.Speed} words per minute.</div>)}
		</>
	);
}

export default SpeedComponent;
