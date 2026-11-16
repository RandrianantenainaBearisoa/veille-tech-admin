<template>
  <router-view />
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { initNotifications } from './static/services/notificationService';

onMounted(() => {
  void initNotifications();
});
</script>
