import React from 'react';
import { Field } from 'redux-form';

export default DropDownBox = (props) => {
	const RenderOptions = () => {
		return(props.values.map((value) => {
			return (
				<option value={value} key={value}>
					{value}
				</option>
			);
		});
	};

	return (
		<div className='form-group col-md-3'>
			<label className='text-secondary'>{props.label}</label>
			<Field name={props.name} component='select' className={props.className}>
				<RenderOptions />
			</Field>
		</div>
	);
};
