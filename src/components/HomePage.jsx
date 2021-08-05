import React, { Component } from 'react';
import javadev from '../images/javadev.jpeg'
import mobiledev from '../images/mobiledev.jpeg'
import webdev from '../images/webdev.jpeg'
import sysdev from '../images/sysdev.jpeg'
import softeng from '../images/softeng.jpeg'


class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-container">

                <div className="home-header">
                    <h1>Welcome To My Site</h1>
                    <p>learn about me</p>
                </div>
                <div className="home-container--container">

                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={javadev} alt="" />
                        </div>
                        <div className="details">
                            <h3>Java Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum tempora deleniti repellendus praesentium aut ipsa accusantium impedit porro explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae dicta autem distinctio nam facilis nemo earum enim quas ut.</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={mobiledev} alt="" />
                        </div>
                        <div className="details">
                            <h3>Mobile App developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum tempora deleniti repellendus praesentium aut ipsa accusantium impedit porro explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae dicta autem distinctio nam facilis nemo earum enim quas ut.</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={webdev} alt="" />
                        </div>
                        <div className="details">
                            <h3>Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum tempora deleniti repellendus praesentium aut ipsa accusantium impedit porro explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae dicta autem distinctio nam facilis nemo earum enim quas ut.</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={sysdev} alt="" />
                        </div>
                        <div className="details">
                            <h3>Systems Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum tempora deleniti repellendus praesentium aut ipsa accusantium impedit porro explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae dicta autem distinctio nam facilis nemo earum enim quas ut.</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={softeng} alt="" />
                        </div>
                        <div className="details">
                            <h3>Software Engineer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum tempora deleniti repellendus praesentium aut ipsa accusantium impedit porro explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae dicta autem distinctio nam facilis nemo earum enim quas ut.</p>
                        </div>
                    </div>
                </div>  
            </div> 
            );
    }
}
 
export default HomePage;