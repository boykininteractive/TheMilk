import axios from 'axios'

export default (context, inject) => {
    const apiUrl= "https://api.createsend.com/api/v3.2"
    const apiKey= "I8x+inxLnt/W6t67YhlreoftFJJLuFGQZabMJOyOaTmxxKX20iRtrnsnO0jE+ZIhx3VnlaxZIZeXI3YZqmnPL6fXHGYafwgQcfPorZ7XTQ/GiFdhrWIhi8sMuK9sxL87TgIVY7mLxFoU8BA0j0f9aA=="
    let result = {
        "status": "",
        "message": ""
    }

    inject('campaignmonitor', {
        test,
        addSubscriber
    })

    function test() {
        // console.log("Campaign Monitor - TEST")
        return true
    }

    function addSubscriber(listid,  user_signup) {
        // console.log("Campaign Monitor - addSubscriber")
        axios.post(
          `${apiUrl}/subscribers/${listid}.json`,
          {
            EmailAddress: user_signup.email,
            ConsentToTrack: "Yes",
          },
          {
            credentials: true,
            auth: {
              username:
                `${apiKey}`,
              password: "",
              },
            headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
            }
          }
        )
        .then((response) => {
            // console.log("success")
            // console.log(response);
            result.status = "success"
        })
        .catch((error) => {
          if (error.response) {
            // When response status code is out of 2xx range
            // console.log("Error - Response");
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            result.status = "error"
            result.message = error.response.data.Message
          } else if (error.request) {
            // When no response was received after request was made
            // console.log("Error - Request");
            // console.log(error.request);
          } else {
            // Error
            // console.log("Error - Message");
            // console.log(error.message);
          }
        });
        return result
    }    
}

/* =====================================================================
========================================================================
========================================================================
CAMPAIGN MONITOR

// nuxt.config.js
  plugins: [
      '~/plugins/campaignmonitor.client.js'
    ],


// method
let result = this.$campaignmonitor.addSubscriber(
  "82759f27b97166d17e3719a8dd26834f",
  this.user_signup
);


// data
data() {
  return {
    user_signup: {
      name: "",
      email: "",
    },
    success: false,
    failure: false,
    failure_message: "",
  };
},
========================================================================
========================================================================
======================================================================*/
