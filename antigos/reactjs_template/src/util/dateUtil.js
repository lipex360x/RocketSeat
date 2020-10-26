import { parseISO, formatDistance, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export function dateDistance(beforeDate, currentDate) {
  return formatDistance(parseISO(beforeDate), currentDate, {
    addSuffix: true,
    locale: pt,
  });
}

export function dateFormatted(date, stringFormat) {
  return format(date, stringFormat, { locale: pt });
}

export function dateTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function dateIso(data) {
  if (typeof data === 'object') {
    return parseISO(format(data, "yyyy-MM-dd'T'HH:mm:ssxxx"));
  }
  return parseISO(data);
}

export function dateFormat(data, formato) {
  return format(data, formato, { locale: pt });
}
