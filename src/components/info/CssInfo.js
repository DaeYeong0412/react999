import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function CssInfo({css}) {
    return (
        <li>
            <Link to= {{ pathname: "refer-detail", state: { css } }}>
                <span className="num">{css.id}</span>
                <span className="attr">{css.title}</span>
                <span className="desc">{css.desc2}</span>
                <span className="Inline">{css.element}</span>
            </Link>
        </li>
    )
}

CssInfo.prototype = {
    css: PropTypes.object.isRequired,
}

export default CssInfo;