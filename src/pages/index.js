import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import Helmet from 'react-helmet';
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <div>
      <SEO
        pageTitle="Home"
        description="Front End Developer, developing apps and web pages"
        keywords="Js, React, Front-end"
      />
      <h1 className="title has-text-centered"> Vitória Souza </h1>
      <h2 className="subtitle has-text-centered"> Web Developer </h2>
      <section className="section content is-size-4-desktop is-size-4-touch">
        <h4> Hello, I am Vitória Souza</h4>
        <p> I'm a Web Developer, I work with Front-end creating apps and web pages</p>
      </section>
      <Link to="/projects"> Projects </Link>
    </div>
  )
}

export default IndexPage
