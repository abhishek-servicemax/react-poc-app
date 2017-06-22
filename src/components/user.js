import React from "react";

export const User = (props) =>  {
		return(
				<div>
					<div >
						<div >
						<h1>The User Page</h1>
						</div>
					</div>
						
					<div>
						<div>
							<p>User Name: {props.username}</p>
							<p>User Age: {props.userage}</p>
						</div>
					</div>
				</div>
		);
};