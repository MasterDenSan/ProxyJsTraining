'use strict';

class Human {
    constructor(age, name) {
        this.age = age
        this.name = name
    }
}

const proxyClass = new Proxy(Human, {
    construct(target, argArray, newTarget) {
        console.log('This is Constract')
        return new Proxy(new target(...argArray), {
            get(target, prop, receiver) {
                console.log(`get prop ${prop}`)
                return target[prop]
            }
        })
    }
})

const h = new proxyClass(18, 'Jon')