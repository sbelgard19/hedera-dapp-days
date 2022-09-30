import React from "react";

import MyButton from "./MyButton.jsx";
import MyText from "./MyText.jsx";

function MyDoubleButton(props) {
	return (
		<div>
			<MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /><MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} />
		</div>
	);

}

export default MyDoubleButton;
