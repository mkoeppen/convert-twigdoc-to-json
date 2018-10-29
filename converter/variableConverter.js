'use strict';

function variableConverter(twigContent, options) {
    var variables = [];

    var findCommentRegex = /\{\#\#[\s\S]*?\#\}/m,
    findVarLines = /@var.*/g,
    settingsFullString = twigContent.match(findCommentRegex),
    variableLineStrings;

    if(!settingsFullString || settingsFullString.length <= 0) return;

    variableLineStrings = settingsFullString[0].match(findVarLines) || [];

    variableLineStrings.forEach(function(item){
      var variable = item.split(" ").filter(function (el) { return el; });

      variables.push({
        fullname: variable.length >= 2 ? variable[1] : "",
        name: variable.length >= 2 ? variable[1].replace(/.*?__/, "") : "",
        type: variable.length >= 3 ? variable[2] : "",
        comment: variable.length >= 4 ? variable.slice(4).join(" ") : ""
      });
    });

    return variables;
}

module.export = variableConverter;