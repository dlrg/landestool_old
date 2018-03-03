import moment from 'moment'
moment.locale('de')
export default function (value, format) {
  if (!value) return
  return moment(value).format(format)
}
