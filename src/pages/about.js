import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>I'm a Software Engineer with 8 years experience in the tech startup world. Feel free to reach out with any questions.</p>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}