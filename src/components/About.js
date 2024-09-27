import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function About() {

    const [myStyle,setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = ()=>{
        if(myStyle.backgroundColor==='white') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light Mode');
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode');
        }
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Rudra Gowda H
                </button>
                </h2>
                {/* <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div> */}
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                        <p>Highly motivated engineering graduate student seeking a challenging position to apply technical skills and innovative thinking, contributing to projects that drive efficiency, sustainability, and growth. Committed to continuous learning and becoming a valuable asset to the organization.</p>
                    </div>
                    <div className="accordion-body"  style={myStyle}>
                        <div className='container'>GitHub:&nbsp;<Link aria-current="page" to="https://github.com/Rudragowdah">https://github.com/Rudragowdah</Link></div>
                    </div>
                    <div className="accordion-body"  style={myStyle}>
                        <div className='container'>Email:&nbsp;<Link aria-current="page" to="mailto:rudragowdahrg@gmail.com">rudragowdahrg@gmail.com</Link></div>
                    </div>
                    <div className="accordion-body"  style={myStyle}>
                        <div className='container'>LinkedIn:&nbsp;<Link aria-current="page" to="https://www.linkedin.com/in/rudra-gowda-h-214980258/">Click Here</Link></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
        </div>
    </div>
  )
}
