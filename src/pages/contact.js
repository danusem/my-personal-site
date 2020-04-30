import React from "react"
import Layout from "../components/Layout"
import svg from "../images/symbol.svg"

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
            <a style={{ display:"flex", textDecoration:"none" }} href="DanUsemResume.pdf" download>Resume &nbsp; <img src={svg} style={{ height:"1rem" }} alt="logo"/></a>
        </Layout>
    )
}