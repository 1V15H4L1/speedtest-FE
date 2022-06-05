import React from "react";
import './../Styles/ToggleButton.css'
import { useState } from "react";
function ToggleButton(props) {
  const[value,SetValue] = useState(false);
  const ToggleChangeHandler=(e)=>{

    SetValue(!value);
    props.value(!value);
    console.log(value);
  }
	return (
		<div>
      <p className="desc">{props.Message}</p>
			<label class="switch">
				<input type="checkbox" onChange={ToggleChangeHandler} value={value}/>
				<span class="slider round"></span>
			</label>
		</div>
	);
}

export default ToggleButton;
