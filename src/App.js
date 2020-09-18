import React from 'React';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './App.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import 'moment/locale/ja';

function renderDay(day) {
  return <div title="title">{day.getDate()}</div>;
}

const modifiers = {
  sun: { daysOfWeek: [0] },
  sat: { daysOfWeek: [6] },
  holiday: [new Date('2020-09-30'), new Date('2020-09-25')],
  monday: { daysOfWeek: [1] },
};

const App = (props) => (
  <DayPickerInput
    hideOnDayClick={false}
    formatDate={formatDate}
    parseDate={parseDate}
    dayPickerProps={{
      modifiers: modifiers,
      disabledDays: new Date(),
      localeUtils: MomentLocaleUtils,
      locale: 'ja',
      renderDay: renderDay,
    }}
  />
);
export default App;
