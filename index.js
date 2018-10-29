'use strict';

const variableConverter = require("converter/variableConverter"),
    enumConverter = require("converter/enumConverter"),
    constructorParameterConverter = require("converter/constructorParamterConverter");

function convertTwigdocToJson(twigContent, options) {

    twigContent = twigContent || "";
    options = options || {};

    return {
        variables: variableConverter(twigContent, options),
        enums: enumConverter(twigContent, options),
        constructorParameters: constructorParameterConverter(twigContent, options)
    }
}

module.export = convertTwigdocToJson;