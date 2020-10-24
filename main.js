registrationForm.onsubmit = function() {
  event.preventDefault();
  var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
  var params = {
    Key: {
     "email": {
       S: "yamato.jonah@gmail.com"
      }
    },
    TableName: "userlogininfo"
   };
   dynamodb.getItem(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);
   });
 }
