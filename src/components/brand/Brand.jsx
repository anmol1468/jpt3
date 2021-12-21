import React from 'react';
import './brand.css';
import Google from "../../assets/google.png";
import Slack from "../../assets/slack.png";
import Atlassian from "../../assets/atlassian.png";
import Dropbox from "../../assets/dropbox.png";
import Shopify from "../../assets/shopify.png";

const Brand = () => {
    return (
        <div className='brands'>
        <img src={Google} alt="Google" />
        <img src={Slack} alt="Slack" />
        <img src={Atlassian} alt="Atlassian" />
        <img src={Dropbox} alt="Dropbox" />
        <img src={Shopify} alt="Shopify" />
        </div>
    )
}

export default Brand
