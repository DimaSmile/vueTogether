<template>
  <div>
    <h1>Hello {{ name }}!!!</h1><button @click="changeName">Not {{ name }}?</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    data: function() {
        return {
            name: 'test'
        }
    },
    methods: {
        changeName() {
            this.name = this.name == 'test'? 'Julia' : 'test'
        }
    }
}
</script>

