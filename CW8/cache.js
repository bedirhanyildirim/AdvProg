class MyCache {
    constructor (name) {
        this.name = name
        this.data = null
        this.urlArray = []
        this.readCache()
    }

    toString () {
        return this.name + ' : ' + this.data
    }

    readCache () {
        caches.open('AdvProg')
            .then(c => { 
                c.keys()
                    .then(h => {
                        this.data = h
                        h.forEach(el => {
                            el.url != undefined ? this.urlArray.push(el.url) : null
                        })
                        return this.urlArray
                    })
                    .then ( ns => {
                        this.urlArray.forEach(el => {
                            console.log(el)
                            fetch(el+'/')
                            .then(res => res.blob())
                            .then(console.log(res.size + " : " + res.type))
                        })
                    })
            })
    }

    readBlob (urls) {

    }
}