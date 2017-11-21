var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, va
lue) {
  return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, delete object[key])
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
