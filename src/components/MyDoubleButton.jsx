import React from "react";

import MyButton from "./MyButton.jsx";
import MyText from "./MyText.jsx";

function MyDoubleButton(props) {
	return (
		
{/* A JSX comment */}

		<div>
{/* 			<MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /><MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /> */}
		<button onClick={props.fcn1} className="cta-button">{props.buttonLabel1}</button> NEXT <button onClick={props.fcn1} className="cta-button">{props.buttonLabel1}</button>  
		</div>
	);

}

export default MyDoubleButton;
