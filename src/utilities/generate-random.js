function getVariant(variants){//Return some variant 
    let _variants = [...variants];
    let random = Math.floor(Math.random() * _variants.length)
    return _variants[random]
}


export {
    getVariant
}