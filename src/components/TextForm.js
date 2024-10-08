import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!",'success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!",'success');
    }
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the Text!",'success');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        // let text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard",'success');
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces",'success');
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const wordCount = (text)=>{
        let wordarray = text.split(/\s+/);
        if(wordarray[wordarray.length-1]===''){
            return wordarray.length-1;
        }
        else {
            return wordarray.length;
        }
    }

    const myStyle = {backgroundColor:props.mode==='light'?'white':props.mode==='dark'?'#202020':props.mode==='danger'?'red':props.mode==='warning'?'yellow':'green', color:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'yellow':props.mode==='warning'?'green':'white'}

    const [text,setText] = useState("");
    // text = "This is a text"; // This is a wrong way to change the state
    // setText("new text");   // This is a correct way to change the state
    return (
    <div style={myStyle}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" style={myStyle} value={text} placeholder='Enter text here' onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={speak} id='toggle'>Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>{wordCount(text)} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
    </div>
  )
}



