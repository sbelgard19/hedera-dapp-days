import React from "react";
import MyButton from "./MyButton.jsx";

function MyDoubleButton(props) {
	return (
		<div>
			<MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} /><MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);

}

export default MyDoubleButton;
