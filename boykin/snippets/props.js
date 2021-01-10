props: ["firstName", "lastName", "email"],


OR

props: {
    firstName: {
        type: String,
            required: false,
      default: "First"
    },
    lastName: {
        type: String,
            required: false,
      default: "First"
    },
    email: {
        type: String,
            required: false,
      default: "First"
    }
}