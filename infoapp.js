axios({
  method:'get',
  url:'http://node21.codenvy.io:50952/usuarios',
  responseType:'stream'
})
  .then(function (response) {
    console.log(JSON.stringify( response.data , null, 2))  
      
  });