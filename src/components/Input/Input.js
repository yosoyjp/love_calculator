import React, { useState } from 'react';
import InputFloat from 'react-floating-input'


const Input = ({placeholder, type, classNames, onChange }) => {
    const [value, setValue] = useState('');

    const onChangeValue = (e) => {
        setValue(e?.target?.value);
        onChange(e?.target?.value);
    }

    return (
        <div className="input-container" >
            <InputFloat
                type={type}
                value={value} onChange={onChangeValue}
                placeholder={placeholder}
                labelZoom
            />
        </div>
    )
}


export default Input;