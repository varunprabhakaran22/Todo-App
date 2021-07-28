const {notification} = require('antd');


const openNotification = (mode, msg, duration, top) => {
    const args = {
        message: msg,
        description: '',
        duration: duration,
        top: top !== undefined && top !== '' ? top : 64,
        className: mode === 'success' ? 'success-notification-top' : 'failure-notification-top',
    };
    notification.destroy();
    notification.open(args);
};

export {
    openNotification
}