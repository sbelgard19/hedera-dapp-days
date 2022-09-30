import React from "react";


function MyDoubleButton(props) {
	return (
		<div>
{/* 			<MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /><MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /> */} 
	<button onClick={props.fcn1} className="cta-button">{props.buttonLabel1}</button> side-by-side buttons 
	<button onClick={props.fcn2} className="cta-button">{props.buttonLabel2}</button>  
		</div>
	);

}

export default MyDoubleButton;
