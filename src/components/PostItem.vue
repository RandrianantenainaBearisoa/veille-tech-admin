<template>
  <q-item clickable v-ripple @click="open_modal">
    <q-item-section>{{ props.post.title }}</q-item-section>
    <q-item-section avatar>
      <template v-if="props.post.status == false">
        <q-icon color="red" name="cancel" />
      </template>
      <template v-else-if="props.post.status == true">
        <q-icon color="green" name="check_circle" />
      </template>
      <template v-else>
        <q-icon color="warning" name="pending" />
      </template>
    </q-item-section>
  </q-item>
  <ValidatePostModal />
</template>

<script setup lang="ts">
import type { Post } from '@/static/interfaces';
import { ValidatePostModal } from '.';
import { usePostValidationModalStore } from '@/stores/post-modal';

const PostValidationModalStore = usePostValidationModalStore();

interface Props {
  post: Post;
  post_index: number;
  edition_index: number;
}

const props = defineProps<Props>();

const open_modal = () => {
  PostValidationModalStore.show_modal(props.post, props.edition_index, props.post_index);
};
</script>
