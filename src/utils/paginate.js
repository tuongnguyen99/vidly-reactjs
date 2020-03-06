import _ from 'lodash';

export function paginate(items, pageSize, currentPage) {
  const startIndex = pageSize * (currentPage - 1);
  return _(items).slice(startIndex).take(pageSize).value();
}