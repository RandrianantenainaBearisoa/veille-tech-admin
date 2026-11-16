<template>
  <div class="q-pa-md" style="width: 100%">
    <q-card
      class="my-card"
      v-for="(edition, i) in edition_list"
      :key="`edition_${i}`"
      style="margin: 10px"
    >
      <q-card-section>
        <div class="text-h6 text-weight-light">
          Edition du {{ get_string_simple_date(edition.date) }}
        </div>
        <q-separator />
        <q-list bordered>
          <PostItem
            v-for="(post, j) in edition.posts"
            :post="post"
            :key="`post_item_${i}_${j}`"
            :edition_index="i"
            :post_index="j"
          />
        </q-list>
        <q-separator />
        <q-btn
          color="primary"
          class="full-width"
          label="Publier sur Linkedin"
          icon="publish"
          @click="publish(i)"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { PostItem } from '@/components';
import { usePostListStore } from '@/stores/post-list';
import { showNotifConfirmation, showNotifError } from '@/components/notification/notification';
import { useConfirm } from '@/components/dialog/confirm';

const confirm = useConfirm();

const PostListStore = usePostListStore();

const edition_list = PostListStore.editions;

const get_string_simple_date = (date: Date) => {
  const month_fr: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  return `${date.getDate()} ${month_fr[date.getMonth()]} ${date.getFullYear()}`;
};

const can_be_published = (edition_index: number) => {
  const post_list = PostListStore.editions[edition_index]?.posts;
  if (post_list !== undefined) {
    for (const post of post_list) {
      if (post.status === null) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const publish = async (edition_index: number) => {
  const it_be_published = can_be_published(edition_index);
  if (it_be_published) {
    const confirmed = await confirm('Vous voulez vraiment publier ça ?');
    if (confirmed) showNotifConfirmation('Tout est publié');
  } else {
    showNotifError('Vous devez tout verifier (Valider/Rejeter) avant de publier');
  }
};
</script>
