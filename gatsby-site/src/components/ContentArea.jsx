import React from "react"
import Image from "../components/image"
import SEO from "../components/seo"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ContentArea=(props)=>(
    <>
    <SEO title={props.title}></SEO>
    <div className="content">
    <Image filename={props.filename} alt={props.alt}/>
    <div className="imageDescription">
    <ArrowRightIcon
    fontSize="large"
    color="Primary"/>
    <div className="ContentArea">
    <h2 className="ContentAreaH2">{props.title}</h2>
    <p >{props.date}</p>
    </div>
    </div>
    </div>
    </>
)


export default ContentArea