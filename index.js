exports.custom = (suffix, type) => {
    if (type.length > 20) {
        throw new Error("Invalid type length. Must be under 20 characters.")
    }
    
    if (!suffix) {
        throw new Error("No log message found.")
    }
    
    if (!type) {
        throw new Error("No type found.")
    }

    console.log(`[${type}] ${suffix}`)
}

exports.info = (suffix) => {
    if(!suffix) {
        throw new Error("No log message found.")
    }
    
    console.log(`[info] ${suffix}`)
}

exports.err = (suffix) => {
    if(!suffix) {
        throw new Error("No log message found.")
    }
    
    console.log(`[err] ${suffix}`)
}

exports.warn = (suffix) => {
    if(!suffix) {
        throw new Error("No log message found.")
    }
    
    console.log(`[warn] ${suffix}`)
}

exports.process = (suffix) => {
    if(!suffix) {
        throw new Error("No log message found.")
    }
    
    console.log(`[process] ${suffix}`)
}
