import React from "react"

import { Link } from "gatsby"

import Layout from "../components/Layout"

import svg from "../images/symbol.svg"

export default () => {
    return (
        <Layout>
            <h1>Sales Engineer | Tech Enthusiast</h1>
            <p>Hi, my name is Dan Usem and I'm a sales engineer based in Chicago.</p>
            <a style={{ display:"flex", textDecoration:"none" }} href="Dan_Usem_Resume.pdf" download>Resume &nbsp; <img src={svg} style={{ height:"1rem" }} alt="logo"/></a>
           <Link to="/contact">Get In Touch</Link>
        </Layout>
    )
}
