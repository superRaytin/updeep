import _omit from 'lodash-es/object/omit';
import wrap from './wrap';

function omit(predicate, collection) {
  return _omit(collection, predicate);
}

export default wrap(omit);
