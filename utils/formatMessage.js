const moment = require('moment');

const formatMsg = (msg) => {
  return {
    ...msg,
    time: moment().format('h:mm a'),
  };
};

module.exports = formatMsg;
