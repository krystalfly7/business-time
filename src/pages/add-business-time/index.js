import ReactDom from 'react-dom';
import React, { Component } from 'react';
import RadioItem from '@components/radio-item/radio-item.js';
import NoneBusiness from './components/none-business.js';
import ActiveBusiness from './components/active-business.js';
import '@styles/button.less';
import '@styles/init.less';

const defaultTime = '08:00-18:00';
class AddBusinessTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businStatus: 0,
      formBusinNum: [{businTime: defaultTime, businPeriod: ''}],
      noneBusinStartDay: null,
      noneBusinEndDay: null,
      noneBusinTime: defaultTime 
    };
  }

  handleChangeBusinStatus = (status) => {
    console.log('handleChangeBusinStatus')
    this.setState({ businStatus: status });
  }

  handleChangeBusinTime = (index, time) => {
    console.log('handleChangeBusinTime');
    console.log(time);
    this.state.formBusinNum[index].businTime = time;
    this.setState({ formBusinNum: this.state.formBusinNum });
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
    formBusinNum.push({businTime: defaultTime, businPeriod: ''});
    this.setState({ formBusinNum });
  }

  handleDelFormBusin = (index) => {
    console.log('handleDelFormBusin')
    const { formBusinNum } = this.state;
    formBusinNum.splice(index, 1);
    this.setState({ formBusinNum });
  }

  handleBusinSeason = () => {
    console.log('handleBusinSeason')
  }

  handleBusinDay = () => {
    console.log('handleBusinDay')
  }

  handleNoneBusinStartDay = (day) => {
    this.setState({ noneBusinStartDay: day });
  }

  handleNoneBusinEndDay = (day) => {
    this.setState({ noneBusinEndDay: day });
  }

  handleChangeNoneBusinTime = (time) => {
    this.setState({ noneBusinTime: time });
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <RadioItem 
            value={this.state.businStatus}
            onChange={this.handleChangeBusinStatus} />
          {
            this.state.businStatus === 0 ?
            <ActiveBusiness
              formBusinNum={this.state.formBusinNum}
              onBusinSeason={this.handleBusinSeason}
              onBusinDay={this.handleBusinDay}
              delFormBusin={this.handleDelFormBusin}
              onBusinTime={this.handleChangeBusinTime}
              onTimePeriod={this.handleChangeTimePeriod}
              addFormBusin={this.handleAddFormBusin} />
            : <NoneBusiness
                startDay={this.state.noneBusinStartDay}
                endDay={this.state.noneBusinEndDay}
                businTime={this.state.noneBusinTime}
                onBusinStartDay={this.handleNoneBusinStartDay}
                onBusinEndDay={this.handleNoneBusinEndDay}
                onBusinTime={this.handleChangeNoneBusinTime} />
          }
        <div className="btnBlock">
            <a href="javascript:;" className="submitBtn">提交</a>
        </div>
      </div>
    </div>
    );
  }
}

ReactDom.render(<AddBusinessTime />, document.getElementById('app'));

