import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log('This is toUpperCase click button.', text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log('This is toLowerCase click button.', text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        // console.log('This is toLowerCase click button.', text);
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('This is handleOnChange.');
        setText(event.target.value);
    }

    return (

        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>You have {text.split(' ').length} words and {text.length} characters type.</p>
                <p>{0.008 * text.split(' ').length} Minutes to read.</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
