import React from "react"
import { Link } from "gatsby"
import ContentArea from "../components/ContentArea"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/Post001/">
    <ContentArea
    title="【2020年最新】無審査で即日５万円をキャッシングする方法【携帯決済現金化】"
    filename="Post001.jpg" alt ="moppy現金化"
    date=
    "2020/5/26"
    link="../pages/post001/"
    />
    </Link>
  </Layout>
)

export default IndexPage
