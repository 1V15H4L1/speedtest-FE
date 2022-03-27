import React from "react";
import { useState, useEffect } from "react";
import SpeedComponent from "./SpeedComponent";
import "../Styles/DisplayComponent.css";

function DisplayComponent() {
	const [Display, SetDisplay] = useState("");
	const [Type, SetType] = useState("");
	const [Message, SetMessage] = useState("");
	const [Diff, SetDiff] = useState("1");
	const [counter, setCounter] = useState(0);
	const [start, setStart] = useState(false);
	const [userSpeed, SetUserSpeed] = useState(0);
	useEffect(() => {
		const timer =
			start && counter >= 0 && setInterval(() => setCounter(counter + 1), 1000);
		return () => clearInterval(timer);
	}, [counter, start]);
	useEffect(() => {
		Check(Type);
		if (Type.length === 1) {
			setStart(true);
		}
	}, [Type]);
	useEffect(() => {
		GetPara();
		SetMessage("Not Matching");
		SetType("");
	}, [Diff]);
	const GetPara = () => {
		let url = "https://baconipsum.com/api/?type=all-meat&sentences=";
		url = url + AppendDiff(Diff);
		url+="&start-with-lorem=1";
		console.log(url);
		fetch(url)
			.then((response) => response.text())
			.then((data) => SetDisplay(data.substring(2,data.length-2)), setCounter(0));
	};
	const AppendDiff = (a) => {
		if (a === "1") {
			return "3";
		}
		if (a === "2") {
			return "4";
		}
		if (a === "3") {
			return "6";
		}
	};
	const typeChangeHandler = (e) => {
		SetType(e.target.value);
	};
	const Check = (a) => {
		if (a === Display) {
			SetMessage("Matched");
			setStart(false);
			const arr = Display.split(" ");
			SetUserSpeed(parseInt((arr.length / counter)*60));
		} else {
			SetMessage("Not Matching");
		}
	};
	const dropDownChangeHandler = (e) => {
		SetDiff(e.target.value);
	};

	return (
		<div className="Container">
			<div class="dropdown">
				<select
					class="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					onChange={dropDownChangeHandler}
				>
					<option class="dropdown-item" value={"1"}>
						Easy
					</option>
					<option class="dropdown-item" value={"2"}>
						Medium
					</option>
					<option class="dropdown-item" value={"3"}>
						Hard
					</option>
				</select>
			</div>
			<div className="counter">{counter}</div>
			<div class="card">
				<div class="card-body">{Display}</div>
			</div>
			<div class="md-form">
				<textarea
					id="form7"
					class="md-textarea form-control"
					rows="10"
					onChange={typeChangeHandler}
					value={Type}
					placeholder="Start to type here...."
				></textarea>
			</div>
			<div className="Success">
				{Message === "Not Matching" && (
					<>
						<div class="spinner-border text-danger spin"></div>
						<div class="alert alert-danger">{Message}</div>
					</>
				)}
				{Message === "Matched" && (
					<>
						<div class="alert alert-success">{Message}</div>
					</>
				)}
			</div>
			<SpeedComponent Speed={userSpeed} Message={Message} />
		</div>
	);
}

export default DisplayComponent;
