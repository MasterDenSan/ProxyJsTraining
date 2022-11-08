
const upperCaseFn = text => `Changed text ${text}`

const proxyFn = new Proxy(upperCaseFn, {
    apply(target, thisArg, argArray) {
        console.log('function worked...')
        console.log(thisArg)
        target.apply(thisArg, argArray).toUpperCase()
    }
})