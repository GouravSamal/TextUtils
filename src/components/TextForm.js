import React, { useState } from "react";


const TextForm = (props) => {

    const [text, setText] = useState("");

    const handleClickUpper = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase successfully','success');
    }

    const handleClickLower=()=>{
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase successfully','success');
    }

    const handleTextChange = (event) => {

        setText(event.target.value);
    }


    //handle copy words
    const handleCopyWords=()=>{

        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    //handle extra spaces
    const handleExtraSpace=()=>{

        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>

            <div className="container">

                <h1 style={{color:(props.mode==='dark')?'white':'black'}}>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleTextChange} id="myBox" rows="3" 
                    style={{backgroundColor:(props.mode==='dark')?'grey':'white',color:(props.mode==='dark')?'white':'black'}}></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleClickUpper}>Convert to Uppercase</button>
            
                <button className="btn btn-primary mx-2" onClick={handleClickLower}>Convert to Lowercase</button>
           
                <button className="btn btn-primary mx-2" onClick={function handleClickClear(){
                        let newText="";
                        setText(newText);
                }}>Clear  Text</button>

                <button className="btn btn-primary mx-2" onClick={handleCopyWords}>Copy words</button>

                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra space</button>



            </div>

            <div className="container my-3">

                <h1 style={{color:(props.mode==='dark')?'white':'black'}}>Your text summary</h1>
                <p style={{color:(props.mode==='dark')?'white':'black'}}>{text.split(" ").length} words and {text.length} characters</p>
                <p style={{color:(props.mode==='dark')?'white':'black'}}>{0.008 * text.split(" ").length} Minutes read</p>
                
                <h2 style={{color:(props.mode==='dark')?'white':'black'}}>Preview</h2>
                <p style={{color:(props.mode==='dark')?'white':'black'}}>{(text.length>0)?text:'ENter some text above the textbox to preview something'}</p>

            </div>

            <div className="container">

            </div>

        </>
    )
}

export default TextForm;