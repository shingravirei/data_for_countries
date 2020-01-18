import React from 'react';

const Input = ({ handleInputChange }) => {
    return (
        <>
            <label labelfor={'country'}>Find Countries -> </label>
            <input
                onChange={handleInputChange}
                id={'country'}
                placeholder={'Country'}
            />
        </>
    );
};

export default Input;
