'use strict';

function enumConverter(twigContent, options) {
    var enums = [];

    var findCommentRegex = /\{\#\#[\s\S]*?\#\}/m,
    findEnumLines = /@enum.*/g,
    settingsFullString = twigContent.match(findCommentRegex),
    enumLineStrings = [];

    if(!settingsFullString || settingsFullString.length <= 0) return;

    enumLineStrings = settingsFullString[0].match(findEnumLines);

    enumLineStrings.forEach(function(item){
      var enumItems = item.split(" ").filter(function (el) { return el; });

      enums.push({
        name: enumItems.length >= 2 ? stringToUpperCamelCase(enumItems[1]) : "",
        items: enumItems.length >= 2 ? enumItems.slice(2).map(function(enumItem) { 
          return {
            name: stringToUpperCamelCase(enumItem),
            value: enumItem
          } 
        }) : []
      });
    });
    
    return enums;
}

module.export = enumConverter;