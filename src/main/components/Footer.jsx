'use strict'

import React from "react";
import styles from "./Footer.css";
const {moment} = require("moment");

export const Footer = () => {
    <div>
        <label>@{moment().format("YYYY")} Marine Life Tracker</label>
    </div>
}

export default (Footer);