import React from "react";
import MyButton from "./MyButton.jsx";
import MyText from "./MyText.jsx";

function MyGroup(props) {
	return (
		<div>
			<MyText text={props.text} link={props.link} />
			<MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);
function MyDoubleButton(props) {
	return (
		<div>
			<MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} /><MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);

}

export default MyGroup;
export default MyDoubleButton;
