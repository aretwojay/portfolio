import React, { useState, useRef, useEffect } from "react";
import PFP from "./img/pfp.jpg"
import Moment from 'react-moment';

const About = () => {

    return (
        <div className="profile text-light">
            <div className="profile-container vw-100">
                <div className="d-flex justify-content-around">
                    <div className="ms-5" style={{ width: "350px" }}>
                        <h1 className="text-uppercase mb-0">
                            Ruben KABANGA MUYA
                        </h1>
                        <p>Web Developper</p>
                        <img className="pfp" src={PFP} />
                    </div>

                    <div className="skills p-3">
                        <h3 className="mb-0">
                        </h3>
                        <p>
                            {/* i add a year to my birthdate to get my correct age */}
                            Hi ! My name is Ruben, I'm {<Moment fromNow ago>2005-04-07</Moment>} old. Currently in Web@cademie's formation,
                            I'm searching an apprenticeship in a company where I can get some experience and knowledge.


                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About;