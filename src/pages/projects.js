import React from "react"
import Layout from "../components/Layout"
import Homepage from "../../public/images/Homepage.png"
import Splash  from "../../public/images/Splash.png"
import Music from "../../public/images/Music.png"

export default () => {
    return (
        <Layout>
            <h1>Projects</h1>
            <h3>Feed the Frontline</h3>
            <p>A Django web application for connecting donors, restaurants and healthcare workers on the frontline</p>
            <img src={Homepage} alt="Homepage" />
            <h5><a href="http://feed-the-frontline.herokuapp.com/" target="_blank" rel="noopener noreferrer">Launch Project</a></h5>
            <h3>Xplor</h3>
            <p>Xplor is a travel app that encourages people to travel more and get out there and explore the world</p>
            <img src={Splash} alt="Splash Screen" />
            <h5><a href="https://xplor-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Launch Project</a></h5>
            <h3>Music Discovery</h3>
            <p>A CRUD web app built using MongoDB, Express, EJS, Node.js & Materialize that allows users to track music</p>
            <img src={Music} alt="Music" />
            <h5><a href="https://music-discovery-application.herokuapp.com/" target="_blank" rel="noopener noreferrer">Launch Project</a></h5>
         </Layout>
    )
}