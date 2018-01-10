const errorHandler = require("errorhandler");


let person = {
    firstName: "John",
    lastName: "Cokos",
    phoneNumbers: {
        home: "425-555-1212",
        cell: "206-555-1212"
    }
};

let person2= {
    firstName: "Cathy",
    lastName: "Cokos",
    phoneNumbers: {
        home: "425-555-1212",
        cell: "206-555-2222"
    },
    addresses: {
        home:"123 Main St",
        work: "222 Elm Ave"
    }
};

try {
    let address = person.addresses.home;
}
catch(e) {
    let error = {
        timestamp: new Date(),
        severity: 3,
        reason: "Address wasn't there",
        timestamp: new Date(),
        severity: 3,
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack
    };
    
    errorHandler.dealWith(error);
}


