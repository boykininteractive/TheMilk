async register() {
    this.$axios.setHeader("Content-Type", "application/json", ["post"]);
    this.$axios.setHeader("Access-Control-Allow-Origin", "*", ["post"]);
    try {
        this.records = await this.$axios.$post(
            "https://api.v2.boykin-framework.com/coreandbridge/register",
            this.new_user
        );
        // success
        // DEBUG - console.log(this.records);
        // localStorage.setItem("user", this.records.DATA.FUSIONAUTH.DATA.user.id); // store the token in localstorage
    } catch (error) {
        // error
        // DEBUG - console.log(error.response);
    }
},




getUserData() {
    axios({
        url: "https://auth.boykin-hosting.com/api/user",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`
        }
    }).then(res => {
        this.user = res.data.user;
        console.log("Sync Get User Data");
        console.log(res);
    });

}





<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`https://api.nuxtjs.dev/mountains`);
    return { mountains: data };
  },
  created() {
    console.log(this.mountains);
  },
};
</script>