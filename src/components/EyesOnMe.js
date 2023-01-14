// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
    const handleFocus = () => console.log('Good!');
    const handleBlur = () => console.log('Hey! Eyes on me!');


    return (
        <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
    )
}

export default EyesOnMe