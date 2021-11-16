import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function ScriptInfo({script}) {
    return (
        <li>
            <Link to= {{ pathname: "refer-detail", state: { script } }}>
                <span className="num">{script.id}</span>
                <span className="attr">{script.title}</span>
                <span className="desc">{script.desc2}</span>
                <span className="Inline">{script.element}</span>
            </Link>
        </li>
    )
}

ScriptInfo.prototype = {
    script: PropTypes.object.isRequired,
}

export default ScriptInfo;