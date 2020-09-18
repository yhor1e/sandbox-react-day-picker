import React from 'React';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ja';

function renderDay(day) {
  return <div title="title">{day.getDate()}</div>;
}

const App = (props) => (
  <DayPickerInput
    dayPickerProps={{
      localeUtils: MomentLocaleUtils,
      locale: 'ja',
      renderDay: renderDay,
    }}
  />
);
export default App;
