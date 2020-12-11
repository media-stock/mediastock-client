import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

export const getDateAll = (date) => {
    const result = moment(date).format('YYYY-MM-DD HH:mm');
    return result;
};
