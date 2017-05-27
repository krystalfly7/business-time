import ReactDom from 'react-dom';
import React, { Component } from 'react';
import RadioItem from '@components/radio-item/radio-item.js';
import DatePicker from '@components/date-picker/date-picker.js';
import NoneBusiness from './components/none-business.js';
import ActiveBusiness from './components/active-business.js';
import '@styles/button.less';
import '@styles/init.less';


class AddBusinessTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dpValue: null,
      businStatus: 0,
      formBusinNum: [{businTime: '08:00-18:00', businPeriod: ''}]
    };
  }

  onChangeBusinStatus = (status) => {
    console.log('onChangeBusinStatus')
    this.setState({ businStatus: status });
  }

  handleChangeBusinTime = () => {
    console.log('handleChangeBusinTime')
    this.setState({ visible: true })
  }

  handleChangeTimePeriod = (index, data) => {
    console.log('handleChangeTimePeriod')
    const { formBusinNum } = this.state;
    formBusinNum[index].businPeriod = data;
    this.setState({ formBusinNum });
  }

  handleAddFormBusin = () => {
    console.log('handleAddFormBusin')
    const { formBusinNum } = this.state;
    formBusinNum.push({businTime: '08:00-18:00', businPeriod: ''});
    this.setState({ formBusinNum });
  }

  handleDelFormBusin = (index) => {
    console.log('handleDelFormBusin')
    const { formBusinNum } = this.state;
    formBusinNum.splice(index, 1);
    this.setState({ formBusinNum });
  }

  handleBusnSeason = () => {
    console.log('handleBusnSeason')
  }

  handleBusnDay = () => {
    console.log('handleBusnDay')
  }

  // use rmc-date-picker
  renderDatePicker = () => {
    return (
      <DatePicker
        visible={this.state.visible}
        mode="time"
        onOk={() => console.log('onOk')}
        onDismiss={() => console.log('onDismiss')}
        value={this.state.dpValue}
        onChange={v => this.setState({ dpValue: v, visible: false })}
      />
    )
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <RadioItem 
            value={this.state.businStatus}
            onChange={this.onChangeBusinStatus} />
          {
            this.state.businStatus === 0 ?
            <ActiveBusiness
              formBusinNum={this.state.formBusinNum}
              handleBusnSeason={this.handleBusnSeason}
              handleBusnDay={this.handleBusnDay}
              handleDelFormBusin={this.handleDelFormBusin}
              handleChangeBusinTime={this.handleChangeBusinTime}
              handleChangeTimePeriod={this.handleChangeTimePeriod}
              handleAddFormBusin={this.handleAddFormBusin} />
            : <NoneBusiness />
          }
          {this.renderDatePicker()}
        <div className="btnBlock">
            <a href="javascript:;" className="submitBtn">提交</a>
        </div>
      </div>
    </div>
    );
  }
}

ReactDom.render(<AddBusinessTime />, document.getElementById('app'));

