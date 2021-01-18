const fetch = require('node-fetch');
const qs = require('querystring');


exports.read_user_num = (req, res) => {
    let userQ = qs.escape(req.params.user);
    fetch(`https://open-api.bser.io/v1/user/nickname?query=${userQ}`, {
    headers: {
        'accept': 'application/json',
        'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
    }
}).then((response) => {

  response.json().then((data)=>{
    fetch(`https://open-api.bser.io/v1/user/games/${data.user.userNum}`, {
    headers: {
        'accept': 'application/json',
        'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
    }
}).then((response) => {
  response.json().then((data)=>{
    console.log(data);
    res.json(data);
  })
})})
}).catch(function(error){
  console.log("There has been error with fetch operation",error.message);
})}
