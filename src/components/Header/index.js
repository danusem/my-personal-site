import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.scss"

export default () => {
    return (
        <header className={styles.header}>
            <h1>Dan Usem</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>    
                    <Link to="/about">About</Link>
                </li>
                <li>    
                    <Link to="/projects">Projects</Link>
                </li>
                <li>    
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    )
}