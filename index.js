const {fetchMyIp, fetchCoordsByIp} =require('./iss')

fetchMyIp((error,ip)=>{
  if(error){
    console.log('it did not work!' ,error);
    return
  }
  console.log('it worked Returned IP',ip)
})
fetchCoordsByIp('99.227.137.11',(error,data)=>{
  if(error){
    console.log('it did not work',error)
    return;
  }
  console.log('it worked',data)

})