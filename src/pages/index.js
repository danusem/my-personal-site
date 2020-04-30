import React from "react"

import { Link } from "gatsby"

import Layout from "../components/Layout"

import svg from "../images/symbol.svg"

export default () => {
    return (
        <Layout>
            <h1>Software Engineer | Tech Enthusiast</h1>
            <p>My name is Daniel Usem and I'm a Chicago-based Software Engineer</p>
            <a style={{ display:"flex", textDecoration:"none" }} href="DanUsemResume.pdf" download>Resume &nbsp; <img src={svg} style={{ height:"1rem" }} alt="logo"/></a>
            <br></br>
            <br></br>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}
