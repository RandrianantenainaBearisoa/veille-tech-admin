<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> </q-toolbar-title>
        <!-- #5de0e6 #0078a6 -->
        <div>Veille-Tech-Admin</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.label" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from '@/components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    label: 'Accueil',
    caption: "Page d'acceuil",
    icon: 'home',
    route: '/',
  },
  {
    label: 'Validation',
    caption: 'Valider les Posts',
    icon: 'check',
    route: '/validation',
  },
  {
    label: 'Statistiques',
    caption: 'Données sur les publications',
    icon: 'bar_chart',
    route: '/stats',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
