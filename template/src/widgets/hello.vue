<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
      widgetParams: {
          type: Object,
          required: true
      }
  },
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped>
</style>
