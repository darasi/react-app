import React from 'react';
import { Transition } from "semantic-ui-react";

const Errors = (props) => {
	if(!props.formErrors.code || props.formErrors.code && props.code > 499) {
		return null;
	}
	return (
		<React.Fragment>
			{
				props.formErrors.details && props.formErrors.details.length
				? props.formErrors.details.map(error => (
					<Transition key={error.message}>
						<div className="error-message">
							<div className="text">{error.message}</div>
						</div>
					</Transition>
					)
				)
				: <Transition>
						<div className="error-message">
							<div className="text">{props.formErrors.message}</div>
						</div>
					</Transition>
			}
		</React.Fragment>
	)
}

export default Errors;