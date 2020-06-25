const { func } = require('prop-types');

export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    console.log(property);
    let encodeKey = encodeURIComponent(property); //user name=>user%20name
    console.log(params[property]);
    let encodeValue = encodeURIComponent(params[property]); //akash 123=>aaksh%2020123
    formBody.push(encodeKey + '=' + encodeValue);
  }
  return formBody.join('&'); //username=akash&&password=123123
}
