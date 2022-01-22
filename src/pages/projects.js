import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

export default function projects() {
  return (
    <div>
      <Helmet title="Projects | Vitória Souza" />
      <h1> Projects </h1>
      <Link to="/"> Voltar a home </Link>
    </div>
  )
}
