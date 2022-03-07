import { _normStr } from './_normStr';
import { _validDate, _formatDate } from './_date';
import { _isEmpty } from './_isEmpty';

export const _searchInAOO = (
  arr: Array<object>,
  searchKey: any,
  searchIn: any = undefined
) => {
  const filtered: Array<object> = [];

  const matchInObj = (obj: any, searchBy: any, searchIn: string) => {
    let val = obj[searchIn];
    if (_validDate(val)) {
      val = _formatDate(val, 'DD/MM/YYYY h:mm');
    }
    return _normStr(val)?.includes(_normStr(searchBy)) ? obj : {};
  };

  arr.forEach((item: any) => {
    if (!!searchIn) {
      const result = matchInObj(item, searchKey, searchIn);
      if (!_isEmpty(result)) filtered.push(result);
    } else {
      for (const i in item) {
        if (!_isEmpty(matchInObj(item, searchKey, i))) {
          filtered.push(item);
          return;
        }
      }
    }
  });

  return filtered;
};
