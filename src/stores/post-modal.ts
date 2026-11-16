import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Post } from '@/static/interfaces';

export const usePostValidationModalStore = defineStore('post-validation-modal', {
  state: () => ({
    is_modal_visible: ref<boolean>(false),
    current_post: ref<Post | null>(null),
    current_post_index: ref<number | null>(null),
    current_edition_index: ref<number | null>(null),
  }),

  getters: {},

  actions: {
    show_modal(current_post: Post, edition_index: number, post_index: number) {
      this.current_post = current_post;
      this.current_post_index = post_index;
      this.current_edition_index = edition_index;
      this.is_modal_visible = true;
    },
    close_modal() {
      this.is_modal_visible = false;
      this.current_post = null;
    },
  },
});
