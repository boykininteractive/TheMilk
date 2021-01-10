const url = "https://icanhazdadjoke.com";
const settings = {
  method: "GET",
  headers: {
    Accept: "application/json",
    //,"Content-Type": "application/json"
  },
};

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  STATE

  Ex - this.$store.state.currentJoke;
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

export const state = () => ({
  currentJoke: "This is a Joke",
  allJokes: [],
});

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  MUTATIONS

  Ex - state.commit("setCurrentJoke", j.joke);
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

// commit
export const mutations = {
  // syncrynous
  setCurrentJoke(state, payload) {
    console.log(state);
    state.currentJoke = payload;
    state.allJokes.push(payload);
  },
};

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  GETTERS

    this.joke = this.$store.getters.getCurrentJoke;
    OR
    ...mapGetters("jokes", ["getCurrentJoke", "getAllJokes"]),
    joke() {
      return this.getCurrentJoke;
    },
    allJokes() {
      return this.getAllJokes;
    }
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

export const getters = {
  getCurrentJoke: (state) => state.currentJoke,
  getAllJokes: (state) => state.allJokes,
};

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ACTIONS

    this.$store.dispatch("jokes/setCurrentJoke");
    OR
    export default {
    methods: {
        ...mapActions("jokes", ["setCurrentJoke"])
    },
    mounted() {
        this.setCurrentJoke();
    }
    };
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

// dispatch
export const actions = {
  // Call nuxtServerInit
  async nuxtServerInit({ commit, dispatch }) {
    console.log("ACTION - nuxtServerInit");
    await dispatch("jokes/initStore"); // Hydrate jokes
  },

  // Initialize Store
  async initStore(state) {
    console.log("ACTION - jokes.InitStore");
  },

  // Call Mutation from Action
  async setCurrentJoke(state) {
    const joke = await fetch(url, { headers });
    const j = await joke.json();
    state.commit("setCurrentJoke", j.joke);
  },
};
