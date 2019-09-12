import axios from "axios";

export default {
  
   sendEmail: function(from, subject, text) {
     return axios.post("/api/email", {
       from,
       subject,
       text
     });
   }

}