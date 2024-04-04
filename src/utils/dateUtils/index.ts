import dayjs from 'dayjs';
import { checkEmpty } from '../checkEmpty';
import { ConfigType } from 'dayjs';

export const getTimezoneOffset = (date: Date) => {
  const timezoneOffset = date.getTimezoneOffset();
  const offset = Math.abs(timezoneOffset);
  const offsetOperator = timezoneOffset < 0 ? '+' : '-';
  const offsetHours = Math.floor(offset / 60)
    .toString()
    .padStart(2, '0');
  const offsetMinutes = Math.floor(offset % 60)
    .toString()
    .padStart(2, '0');

  return `UTC${offsetOperator}${offsetHours}:${offsetMinutes}`;
};

export const ISO8601StringToDayJS = (value: ConfigType) =>
  dayjs(value, 'YYYY-MM-DD[T]HH:mm:ssZ');

export const formatToISO8601 = (value: ConfigType) =>
  !checkEmpty(value) ? dayjs(value)?.format('YYYY-MM-DD[T]HH:mm:ssZ') : '';

export const formatFromISO8601 = (
  value: ConfigType,
  format: string = 'DD/MM/YYYY',
) =>
  !checkEmpty(value)
    ? dayjs(value, 'YYYY-MM-DD[T]HH:mm:ssZ')?.format(format)
    : '';
