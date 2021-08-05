  import React from 'react';
import profile from "../images/profilepic.jpg";
  const About=()=>{
    return(
        <div>
            <div className="header">
                <div className="c"><h1>Carriculum Vitae</h1>
                <img className="myprofile" src={profile} alt="" /></div>
            </div>
            <div className="personal-info">
                <div className="header-div"><h3>Personal Information</h3></div>
                <div className="padding">
                    <p><span>Name: Terrence Tebatso Manaka</span></p>
                    <p><span>ID no#: 901204 2332 080</span></p>
                    <p><span>Address: Makgofe village</span></p>
                    <p><span>Gender: Male</span></p>
                    <p><span>Nationality: South African</span></p>
                    <p><span>DoB: 08-12-1990</span></p>
                </div>
            </div>
            <div className="profile">
                <div className="header-div"><h3>Profile</h3></div>
                <div className="padding"><p>I am a computer science graduate of the University of Limpopo,but far more important to me a a coder. I solve problem and innovate solutions using computatonal skills.</p></div>
            </div>
            <div className="objective">
                <div className="header-div"><h3>Objective</h3></div>
                <div className="padding"><p>The act of programming itsef can be very satifying and creative.For any particular problem there are lots of different ways you could write a problem to solve it.But a good program has certain beaty and elegance about it and an elegant program is easy for other people to understand and its also easy for you to extend and adapt later as requirement change. My goal is to be an elegent programmer</p></div>
            </div>
            <div className="education">
                <div className="header-div"><h3>Education</h3></div>
                <div className="padding">
                    <p><span>Name of Institution: University of Limpopo</span></p>
                    <p><span>Qualification: Computer Science</span></p>
                    <p><span>Year of complition: 2020</span></p>
                </div>
            </div>
        </div>
    );
  };

  export default About;