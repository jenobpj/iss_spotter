const {fetchMyIp} =require('./iss')

fetchMyIp((error,ip)=>{
  if(error){
    console.log('it did not work!' ,error);
    return
  }
  console.log('it worked Returned IP',ip)
})