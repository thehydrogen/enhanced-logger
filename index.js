exports.custom = (suffix, type) => {
    if (type.length > 20) {
        throw new Error("Invalid message type. TypeLengthError: Type too long.")
    }
    
    if (!suffix) {
        throw new Error("Invalid log message. MessageNotFound: There was no message to be logged.")
    }
    
    if (!type) {
        throw new Erorr("Invalid log message type. TypeNotFound: There was no type to be used.")
    }

    console.log(`[${type}] ${suffix}`)
}

exports.info = (suffix) => {
    if(!suffix) {
        throw new Error("Invalid log message. MessageNotFound: There was no message to be logged.")
    }
    
    console.log(`[info] ${suffix}`)
}

exports.err = (suffix) => {
    if(!suffix) {
        throw new Error("Invalid log message. MessageNotFound: There was no message to be logged.")
    }
    
    console.log(`[err] ${suffix}`)
}

exports.warn = (suffix) => {
    if(!suffix) {
        throw new Error("Invalid log message. MessageNotFound: There was no message to be logged.")
    }
    
    console.log(`[warn] ${suffix}`)
}

exports.process = (suffix) => {
    if(!suffix) {
        throw new Error("Invalid log message. MessageNotFound: There was no message to be logged.")
    }
    
    console.log(`[process] ${suffix}`)
}
