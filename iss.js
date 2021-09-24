const request=require('request')
const fetchMyIp=function(callback){
request('https://api.ipify.org?format=json',(error,response,body)=>{
  if(error) return callback(error,null);
  
if(response.statusCode !==200){
  const msg=`status Code${response.statusCode} when fetching ip.Response:${body}`;
  callback(Error(msg),null);
  return;
}
const ip=JSON.parse(body).ip;
callback(null,ip)
})
}
const fetchCoordsByIp=(ip,callback)=>{
  request(`https://freegeoip.app/json/${ip}`,(error,response,body)=>{
  if(error) return callback(error,null)
  if(response.statusCode !==200){
    const msg=`status Code${response.statusCode} when fetching ip.Response:${body}`;
    callback(Error(msg),null);
    return;
  }
  
  const { latitude, longitude } = JSON.parse(body);
      callback(null, { latitude, longitude });
})
  
}
module.exports={fetchMyIp,fetchCoordsByIp}