import React from 'react';

// no longer being used
const CheckBoxField = (field) => (
    <div className='custom-control custom-checkbox text-muted'>
        <input name={field.name} id={field.id} type='checkbox' className='custom-control-input' {...field.input} />
        <label htmlFor={field.htmlFor} className='custom-control-label'>
            {field.label}
        </label>
    </div>
);

export default CheckBoxField;
