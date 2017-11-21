var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object, key) {
  Object.assign({}, delete object[key])
  return object 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
