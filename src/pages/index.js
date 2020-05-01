import React from "react"

import { Link } from "gatsby"

import Layout from "../components/Layout"

import svg from "../images/symbol.svg"

export default () => {
    return (
        <Layout>
            <h1>Software Engineer | Tech Enthusiast</h1>
            <p>Hi, my name is Dan Usem and I'm a software engineer based in Chicago.</p>
            <a style={{ display:"flex", textDecoration:"none" }} href="/static/DanUsemResume.pdf" download>Resume &nbsp; <img src={svg} style={{ height:"1rem" }} alt="logo"/></a>
            <button><Link to="/contact">Get In Touch</Link></button>
        </Layout>
    )
}
