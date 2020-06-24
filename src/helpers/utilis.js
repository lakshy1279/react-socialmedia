const { func } = require('prop-types');

export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodeKey = encodeURIComponent(property); //user name=>user%20name
    let encodeValue = encodeURIComponent(params[property]); //akash 123=>aaksh%2020123
    formBody(encodeKey + '=' + encodeValue);
  }
  return formBody.join('&'); //username=akash&&password=123123
}
