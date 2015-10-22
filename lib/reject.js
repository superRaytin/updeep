import _reject from 'lodash-es/collection/reject';
import wrap from './wrap';

function reject(predicate, collection) {
  return _reject(collection, predicate);
}

export default wrap(reject);
