'use strict';

const typeConverter = require("typeConverter")

function constructorParameterConverter(twigContent, options) {
    var constructorParameter = [];

    var findCommentRegex = /\{\#\#[\s\S]*?\#\}/m,
    findVarLines = /@param.*/g,
    settingsFullString = twigContent.match(findCommentRegex),
    variableLineStrings = [];

    if(!settingsFullString || settingsFullString.length <= 0) return;
    
    variableLineStrings = settingsFullString[0].match(findVarLines);

    variableLineStrings.forEach(function(item){
      var variable = item.split(" ").filter(function (el) { return el; });

      constructorParameter.push({
        fullname: variable.length >= 2 ? variable[1] : "",
        name: variable.length >= 2 ? variable[1].replace(/.*?__/, "") : "",
        type: variable.length >= 3 ? variable[2] : "",
        phpType: variable.length >= 3 ? typeConverter(variable[2], "php") : "",
        comment: variable.length >= 4 ? variable.slice(4).join(" ") : ""
      });
    });

    return constructorParameter;
}

module.export = constructorParameterConverter;