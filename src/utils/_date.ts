import moment from 'moment';
import isDate from 'date-fns/isDate';

export const _formatDate = (date: Date | any, format: string) =>
  moment(date).format(format);

export const _compareDate = (date1: Date, date2: Date) =>
  moment(_formatDate(date1, 'DD-MM-YYYY')).isSame(
    _formatDate(date2, 'DD-MM-YYYY')
  );

export const _validDate = (date: any) => isNaN(date) && moment(date).isValid();
