import React from "react"
import Layout from "../components/Layout"

export default () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <a href="mailto:danusem@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <br></br>
            <br></br>
            <a href="https://www.linkedin.com/in/dan-usem/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br></br>
            <br></br>
            <a href="https://github.com/danusem" target="_blank" rel="noopener noreferrer">Github</a>
            <br></br>
            <br></br>
            <a href="DanUsemResume.pdf" download>Resume <span role="img">⬇</span></a>
        </Layout>
    )
}