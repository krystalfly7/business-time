import React from 'react';
import PropTypes from 'prop-types';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import { getProps as getDefaultProps, getDefaultDate } from './utils';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { getComponentLocale, getLocaleCode } from './getLocale';
import zh_CN from './zh_CN';
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';
import 'rmc-picker/assets/popup.css';

export default class DatePicker extends React.Component<any, any> {
  static defaultProps = Object.assign({
    triggerType: 'onClick',
    minuteStep: 1,
  }, getDefaultProps());

  render() {
    const { props, context } = this;
    console.log(this)
    const { value, defaultDate } = props;
    const locale = getComponentLocale(props, context, 'DatePicker', () => zh_CN);
    const localeCode = getLocaleCode(context);
    const { okText, dismissText, DatePickerLocale } = locale;

    if (localeCode) {
      if (value) {
        value.locale(localeCode);
      }
      if (defaultDate) {
        defaultDate.locale(localeCode);
      }
    }
    const dataPicker = (
      <RCDatePicker
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        mode={props.mode}
        minDate={props.minDate}
        maxDate={props.maxDate}
        defaultDate={value || getDefaultDate(this.props)}
      />
    );
    const newProps = {
      ...props,
      okText,
      dismissText,
    };
    return (
      <PopupDatePicker
        datePicker={dataPicker}
        {...newProps}
        date={value || getDefaultDate(this.props)}
      >
      </PopupDatePicker>
    );
  }
}
