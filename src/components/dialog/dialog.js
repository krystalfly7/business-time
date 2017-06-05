import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dialog.less';

class Dialog extends Component {

    render() {
        const { header, text, okText, cancelText, okClick, cancelClick } = this.props;
        return (
            <div className='dialog-modal'>
                <div className='dialog_content'>
                    <div className='dialog-header'>
                        {header}
                    </div>
                    <div className='dialog-text'>
                        {text}
                    </div>
                    {this.props.children}
                </div>
                <div className='dialog_buttons'>
                    <a href="javascript:;" className={cancelText? '' : 'all'} onClick={okClick}>{okText}</a>
                    <a href="javascript:;" className='last' onClick={cancelClick}>{cancelText}</a>
                </div>
            </div>
        );
    }
}

Dialog.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  okClick: PropTypes.func,
  cancelClick: PropTypes.func
}

export default Dialog;