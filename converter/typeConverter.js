'use strict';

function typeConverter(type, destinationContext) {
    if(destinationContext === "php") {
        switch (type) {
            case "KeyValueMap":
                return "array|null";
            default:
                return type + "|null";
        }
    } else {
        throw `Unknown DestinationContext: ${destinationContext}`;
    }
}

module.export = typeConverter;