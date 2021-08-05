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
                            <p>I create java developer who specializes in software engineering and web development to intergrate java into business software,applications and website</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={mobiledev} alt="" />
                        </div>
                        <div className="details">
                            <h3>Mobile App developer</h3>
                            <p>I develop mobile apps for both Ios and Android. These app can be pre-installed on phones during developemt for testing</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={webdev} alt="" />
                        </div>
                        <div className="details">
                            <h3>Web Developer</h3>
                            <p>I can create or develop world wide web applications using a client server model in any specified way. This include database side like E-commerce site or any static site with one to multiple page</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={sysdev} alt="" />
                        </div>
                        <div className="details">
                            <h3>Systems Developer</h3>
                            <p>As system developer i implement applications and programs for backend processing used in businessess or organisations.They are mostly used in online banking and HR systems</p>
                        </div>
                    </div>
                    <div className="home-card glass-blue">
                        <div className="imgbx">
                            <img src={softeng} alt="" />
                        </div>
                        <div className="details">
                            <h3>Software Engineer</h3>
                            <p>I apply principles of analysis to figure out user requirements and the build ,design and test software appication according to those requirements</p>
                        </div>
                    </div>
                </div>  
            </div> 
            );
    }
}
 
export default HomePage;