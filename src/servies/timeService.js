import { moment } from 'src/plugins/moment';

export default {
  getTodayDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return (today = dd + '/' + mm + '/' + yyyy);
  },

  getTimespanFromDateTime(date, time) {
    return moment(date + ' ' + time, 'DD/MM/YYYY HH:mm').unix();
  },
  //parameters in timestamp
  diffInMinutes(start, end) {
    return (end - start) / 60;
  },
};
