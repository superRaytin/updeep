/**
 * Will never freeze a plain javascript object.
 *
 * @function
 * @sig a -> a
 * @param  {object} object Object to return.
 * @return {object} Original object.
 */
function freeze(object) {
  return object;
}

export default freeze;
