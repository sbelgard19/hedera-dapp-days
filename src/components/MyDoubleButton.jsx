import React from "react";


function MyDoubleButton(props) {
	return (
		<div>
			<MyDoubleButton fcn={props.fcn} buttonLabel={props.buttonLabel} /><MyDoubleButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);

}

export default MyDoubleButton;
