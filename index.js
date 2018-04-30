module.exports = (suffix, type) => {
    let types = ['info', 'warn', 'error', `process`]

    if (!types.includes(type)) {
        throw new Error("Invalid logging type.")
    }

    console.log(`[${type}] ${suffix}`)
}
