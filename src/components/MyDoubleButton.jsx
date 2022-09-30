import React from "react";

import MyButton from "./MyButton.jsx";
import MyText from "./MyText.jsx";

function MyDoubleButton(props) {
	return (
		<div>
			<MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} /><MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);

}

export default MyDoubleButton;
