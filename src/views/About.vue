<template>
  <form v-on:submit.prevent="submit" style="margin-top: 200px">
    <input
      v-model="formData.email"
      class="email"
      type="email"
      placeholder="Email"
    />
    <br />
    <br />
    <input
      data-cy="password"
      v-model="formData.password"
      class="password"
      type="password"
      placeholder="Password"
    />
    <br />
    <br />
    <button data-cy="submit" type="submit" class="submit btn btn-primary">
      Submit
    </button>
    <br />
    <span v-if="show" :class="msg === 'validate' ? 'bg-danger' : 'bg-success'">
      {{ msg }}
    </span>
  </form>
</template>

//https://github.com/cypress-io/cypress-example-conduit-app/blob/master/cypress/integration/new-post-spec.js

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      show: false,
      msg: "",
    };
  },
  methods: {
    submit() {
      if (this.formData.email === "" || this.formData.password === "") {
        this.msg = "validate";
      } else {
        this.msg = "validated";
      }
      this.show = true;
    },
  },
};
</script>
