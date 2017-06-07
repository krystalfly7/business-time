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
      businStatus: 0, //business status, 营业时段 0, 非营业时段 1
      seasonStatus: 0, // season status 全年0, 分季节1, default 0
      selectedSeason: null,
      day: '请选择',
      formBusinNum: [{businTime: defaultTime, businPeriod: ''}],
      noneBusinStartDay: null,
      noneBusinEndDay: null,
      noneBusinTime: defaultTime 
    };
  }

  componentDidMount() {
    //subsribe dayList event, get dayList string
    //subsribe season event, get season status and selectedSeason
    //for test
    const dayList = '周一,周二,周四,周五,周六,周日';
    const seasonStatus = 1;
    const selectedSeason = ['春季', '秋季'];
    this.setState({ day: dayList, seasonStatus, selectedSeason });
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
    //open webview select-season page
  }

  handleBusinDay = () => {
    console.log('handleBusinDay')
    //open webview pick-day page
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

  submitBusinTime = () => {
    // post data to database
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
              seasonStatus={this.state.seasonStatus}
              selectedSeason={this.state.selectedSeason}
              day={this.state.day}
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
            <a href="javascript:;" className="submitBtn" onClick={this.submitBusinTime}>提交</a>
        </div>
      </div>
    </div>
    );
  }
}

export default AddBusinessTime;
// ReactDom.render(<AddBusinessTime />, document.getElementById('app'));

