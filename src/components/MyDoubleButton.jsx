import React from "react";

import MyText from "./MyText.jsx";

function MyDoubleButton(props) {
	return (
		<div>
{/* 			<MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /><MyButton fcn={props.fcn1} buttonLabel={props.buttonLabel1} /> */} 
			
<button onClick={props.fcn1} className="cta-button">{props.buttonLabel1}</button><MyText text={props.text1} /> 	
		side-by-side buttons
			<button onClick={props.fcn2} className="cta-button">{props.buttonLabel2}</button>  
<MyText text={props.text2} />	
		</div>
	);

}

export default MyDoubleButton;
