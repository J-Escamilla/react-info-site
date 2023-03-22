import React from 'react'

export default function Title() {
    return (
        
        <div className="title">
            <img src="./images/john_selfie.jpg" className="selfie" />
            <h2 className="name">John Escamilla</h2>
            <p className="job-title">Frontend Developer</p>
            <a className="website" href="http://jescamilla.webflow.io" target="blank_">JEscamilla.Website</a>
            
            <div>
                <a href="mailto:jbescamilla6@gmail.com">
                    <button>
                        <i className="fa-sharp fa-solid fa-envelope"></i> Email </button>
                    </a>
            </div>
        </div>
       
        )
}