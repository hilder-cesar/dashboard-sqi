import { DateTime } from 'luxon';

export const dateToSeconds = (date: null | string) => {
  return date ? DateTime.fromFormat(date, 'yyyy-MM-dd', { zone: 'utc' }).toSeconds() : null;
};

export const dateToMs = (date: null | string) => {
  return date ? DateTime.fromFormat(date, 'yyyy-MM-dd', { zone: 'utc' }).toMillis() : null;
};

export const nowToMs = () => {
  return DateTime.now().setZone('utc').toMillis();
};

export const dateToFormat = (date: number, format: string): string => {
  return DateTime.fromMillis(date).toFormat(format);
};

export const dateToString = (date: null | number): null | string => {
  return date ? DateTime.fromSeconds(date, { zone: 'utc' }).toFormat('yyyy-MM-dd') : null;
};

export const hourToString = (date: null | number): null | string => {
  return date ? DateTime.fromSeconds(date, { zone: 'utc' }).toFormat('HH:mm') : null;
};

export const monthList: any[] = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez'
];

export const shortMoth: any[] = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez'
];

export const weekDays: any[] = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

export const shortWeekDays: any[] = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

export const getDiff = (date: number): number => {
  const dateObject = DateTime.fromMillis(date);
  const today = DateTime.now();
  const days = today.diff(dateObject, 'days').days;
  return days < 1 ? 0 : days | 0;
};

export const getDuration = (startDate: number, endDate: number): number => {
  const startDateObj = DateTime.fromMillis(startDate);
  const endDateObj = DateTime.fromMillis(endDate);
  return endDateObj.diff(startDateObj, 'days').days;
};