
import fetch from 'node-fetch';

email_id = 'ruchin@gmail.com';

fetch('https://shielded-fjord-35395.herokuapp.com/find_user/' + email_id)
        .then(function(response) {
          console.log(response);
    });
    
