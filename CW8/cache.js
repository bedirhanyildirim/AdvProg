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
                            fetch(el)
                            .then(function(res) {
                                if (res.status !== 200) {
                                    throw new Error("Not 200 response")
                                } else {
                                    res.blob()
                                    .then(abc => {
                                        console.log(abc)
                                    })
                                }
                            })
                        })
                    })
            })
    }

    readBlob (urls) {

    }
}