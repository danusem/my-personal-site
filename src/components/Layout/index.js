import React from "react"

import Footer from "../Footer"
import Header from "../Header"

import "../../styles/reset.scss"
import styles from "./layout.module.scss"

export default (props) => {
    return (
        <>
        <Header />
        <div className={styles.container}>
                <main>
                    {props.children}
                </main>
            <Footer />
        </div>
      </>
    )
}