import React from "react";

export const Main = (props) =>{
		return(
				<div>
					<div>
						<div>
						<button
							 onClick={() => props.changeUsername()}> Change the UseName </button>
						</div>
					</div>
				</div>
		); 
};