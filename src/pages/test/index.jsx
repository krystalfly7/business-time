/**
 * Created by madlord on 16/5/4.
 */
import Hippo from '@cortex/hippo';//对于cortex包的引入,需在包名前加上@cortex/的前缀以示区分
import './assets/styles/global.less';//以*.less为后缀的样式文件将以全局作用域模式载入到DOM中
import React from 'react';
import icon from './assets/i/icon-wrong.png';
import RLU from 'rlu';//response layout util
import styles from './assets/styles/index.less.module';//css module

export default class Test extends React.Component {
    constructor (props) {
        super(props);

        /*
        * hippo打点
        * */
        _hip.push(['_setPageId', 123456789]);
        _hip.push(['pv']);

        /*
         * 响应式布局
         * */
        RLU.init(375);//375 or 320 视觉搞基准宽度

        /*
         * 初始化state
         * */
        this.state = {};
    }

    componentDidMount () {
        require.ensure([],(require)=>{//异步加载JS示例
            var Hello = require('@lib/hello.es6').default;
            Hello.sayHelloWorld();
        });
    }

    render() {
        return (
            <div >
                <div className={styles.wrap}>
                    Hello World
                </div>
                <div>
                    <img className="image" src="./static/i/icon-right.png"/>
                </div>
                <duv>
                    <img className="img" src={icon}/>
                </duv>
            </div>
        );
    }
}

/*
 * 指定props类型
 * */
Test.propTypes = {
    // onMaskTap:React.PropTypes.func
};

/*
* 初始化props
* */
Test.defaultProps = {
};