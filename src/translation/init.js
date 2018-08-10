import { addLocaleData } from 'react-intl';
import ka from 'react-intl/locale-data/ka';
import en from 'react-intl/locale-data/en';

export default () => {
  addLocaleData(ka);
  addLocaleData(en);
}
