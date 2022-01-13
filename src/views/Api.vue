<template>
  <div style="margin-top: 100px">
    <ul class="connectors-lists" data-cy="connectors-lists">
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getData();
    console.log(this.users, "created");
  },
  mounted() {
    console.log(this.users, "mount");
  },
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          // handle success
          console.log(response);
          this.users = response.data;
          console.log(this.users);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>
