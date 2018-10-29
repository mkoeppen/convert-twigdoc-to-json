'use strict';

const variableConverter = require("./converter/variableConverter"),
    enumConverter = require("./converter/enumConverter"),
    constructorParameterConverter = require("./converter/constructorParameterConverter");

function convertTwigdocToJson(twigContent, options) {

    twigContent = twigContent || "";
    options = options || {};
    console.log("bla");
    return {
        variables: variableConverter(twigContent, options),
        enums: enumConverter(twigContent, options),
        constructorParameters: constructorParameterConverter(twigContent, options)
    }
}

module.exports = convertTwigdocToJson;