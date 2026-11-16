<template>
  <!-- <div class="q-pa-md q-gutter-sm"> -->
  <div>
    <q-dialog v-model="PostValidationModalStore.is_modal_visible" backdrop-filter="blur(4px)">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ PostValidationModalStore.current_post?.title }}</div>
          <div class="text-subtitle2 text-weight-light grey">
            {{ PostValidationModalStore.current_post?.subtitle }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p class="text-justify">
            {{ PostValidationModalStore.current_post?.content }}
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="between">
          <q-btn
            color="green"
            icon="check_circle"
            label="Valider"
            v-close-popup
            @click="validate_post"
          />
          <q-btn color="red" icon="delete" label="Rejeter" v-close-popup @click="reject_post" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { usePostValidationModalStore } from '@/stores/post-modal';
import { usePostListStore } from '@/stores/post-list';

const PostValidationModalStore = usePostValidationModalStore();
const PostListStore = usePostListStore();

const validate_post = () => {
  const post_index = PostValidationModalStore.current_post_index;
  const edition_index = PostValidationModalStore.current_edition_index;
  if (post_index !== null && edition_index !== null) {
    PostListStore.validate(edition_index, post_index);
  }
};
const reject_post = () => {
  const post_index = PostValidationModalStore.current_post_index;
  const edition_index = PostValidationModalStore.current_edition_index;
  if (post_index !== null && edition_index !== null) {
    PostListStore.reject(edition_index, post_index);
  }
};
</script>
