import React from "react"

import { Link } from "gatsby"

import Layout from "../components/Layout"

export default () => {
    return (
        <Layout>
            <h1>Software Engineer | Tech Enthusiast</h1>
            <p>My name is Daniel Usem and I'm a Chicago-based Software Engineer</p>
            <a href="Daniel_Usem_Resume.pdf" download>Resume <span role="img">⬇</span></a>
            <br></br>
            <br></br>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}
