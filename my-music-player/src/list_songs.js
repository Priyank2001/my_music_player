import React from "react";
const path = require('path');
const fs = require('fs');
export function li(){
    return fs.readdirSync('./music/')[0];;
}
 