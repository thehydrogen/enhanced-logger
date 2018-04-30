module.exports = (suffix, type) => {
    let types = ['info', 'warn', 'error', `process`]

    if (!types.includes(type)) {
        throw new Error("Invalid log message type.")
    }
    
    if (!suffix) {
        throw new Error("Invalid log message.")
    }
    
    if (!type) {
        throw new Erorr("Invalid log message type.")
    }

    console.log(`[${type}] ${suffix}`)
}
