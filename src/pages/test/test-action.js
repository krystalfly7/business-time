import ReactDom from 'react-dom';
import React, { Component } from 'react';
import KNB from '@dp/knb/mtnb';
import './assets/styles/test.less';


class TestAction extends Component {

  onConfig = () => {
    KNB.config({
        bizname: "shop-poi"      //配置业务名
    });
    alert('set bizname: shop-poi');
  }

  onOpenWebview = () => {
    KNB.openWebview({
      url: 'http://m.dianping.com', //需要打开的完整http链接,
      //隐藏webview的导航栏功能
      qs: {
        notitlebar: 1  
      } 
    });
  }

  onPublish = () => {
    KNB.publish({
      action: 'onPublish', //自定义的action名称，由webview传给native，业务方需根据业务需求增加相应的action处理
      data: {}, //与native的通信内容，由业务方自由定义data对象体的内容
      success: function(){
        alert('publish data: test');
      },
      fail: function(){
        alert('publish fail');
      }
    });
  }

  onSubscribe = () => {
    KNB.subscribe({
      action: 'onSubscribe',
      handle: function(e){
        alert('onSubscribe');
        alert('receive data>>' + e.value);
        let data = JSON.parse(e.value);
        alert('receive data:' + JSON.stringify(data));
      },
      success: function(data){
        alert('subscribe success:' + JSON.stringify(data));
      },  
      fail: function(){
        alert('subscribe fail');
      }
    });
  }

  onCloseWindow = () => {
    KNB.closeWebview({});
  }

  render() {
    return (
      <div className="container">
        <div className="appeal-btn">
            <a href="javascript:;" onClick={this.onConfig}>config</a>
        </div>
        <div className="test">
            和subscribe、publish一起用，配置业务名
        </div>
        <div className="appeal-btn">
            <a href="javascript:;" onClick={this.onOpenWebview}>openWebview</a>
        </div>
        <div className="test">
            打开新webview:http://apollo.51ping.com/moma/poi/index
        </div>
        <div className="appeal-btn btn-publish">
            <a href="javascript:;" onClick={this.onPublish}>publish</a>
        </div>
        <div className="test">
            发布消息，与subscribe一起用，需要先执行subscribe，在执行publish，切换页面（比如openWebview之后切换回来）之后触发逻辑。用于两个页面的互动，状态变更；
        </div>
        <div className="appeal-btn btn-subscribe">
            <a href="javascript:;" onClick={this.onSubscribe}>subscribe</a>
        </div>
        <div className="test">
            订阅消息，与publish一起用，需要先执行subscribe，在执行publish，切换页面（比如openWebview之后切换回来）之后触发逻辑。用于两个页面的互动，状态变更；
        </div>
        <div className="appeal-btn btn-close">
            <a href="javascript:;" onClick={this.onCloseWindow}>closeWindow</a>
        </div>
        <div className="test">
          关闭当前webview
        </div>
      </div>
    );
  }
}

export default TestAction;
