import reject from 'lodash-es/collection/reject';

export default function splitPath(path) {
  return Array.isArray(path) ?
    path :
    reject(path.split('.'), x => !x);
}
