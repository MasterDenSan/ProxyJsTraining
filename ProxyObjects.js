const simpleObject = {
    name: 'Den',
    age: 25,
    job: 'developer'
}

const proxyObject = new Proxy(simpleObject, {

    get(target, prop) {
        console.log(`This attr ${prop}`)
        return target[prop]
    },

    set(target, prop, value){
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} in target`)
        }
    },

    has(target, prop){
        return ['name', 'age', 'job'].includes(prop)
    },

   deleteProperty(target, prop) {
       console.log('Deleting attr', prop)
       delete target[prop]
       return true
   }
})