<script setup>
import { RouterView } from 'vue-router'
import Navbars from './views/HeaderPage.vue'
import homepage from './views/HomePage.vue'
</script>

<template>



  <Navbars></Navbars>
  <homepage text_title="ให้เราช่วยคุณดูแลสุขภาพของคุณให้ดีขึ้น"></homepage>



  <router-view></router-view>



</template>

<script>
export default {
  name: 'App',
};
</script>
