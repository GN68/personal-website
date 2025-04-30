<template>
  <div>
    <ContentPanel>
      <MarkdownPage content="
# Projects
In here is where you'll find the projects I have created
"/>
        <div class="category" v-for="category in categories" :key="category.name">
        <h1>{{ category.name }}</h1>
        <div class="thumbnails">
          <ThumbnailButton
          v-for="item in category.items" 
          :key="item.id"
          :title="item.name"
          :desc="item.description || 'No description provided'"
          :img="item.img"
          >
          </ThumbnailButton>
        </div>
      </div>
    </ContentPanel>
  </div>
</template>

<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import MarkdownPage from '@/components/MarkdownPage.vue';
import ThumbnailButton from '@/components/ThumbnailButton.vue';

const categories = [
  {
    name: 'My Games',
    items: [
      { 
        id: 'https://gnui.itch.io/the-great-box-chase',
        name: 'https://img.itch.zone/aW1nLzE2NDk4MTU5LnBuZw==/original/S3zV%2B6.png',
        description: 'Completely Free · Type Action Shooter · Godot',
        img: 'https://img.itch.zone/aW1hZ2UvMjc2NDg2My8xNjQ5NDkyOS5wbmc=/794x1000/4%2BSSbl.png',
      },
      { 
        id: 'https://gnui.itch.io/hallway',
        name: 'Hallway',
        description: 'Completely Free · Type Action Shooter · Godot',
        img: 'https://img.itch.zone/aW1hZ2UvMjkwOTYyOC8xNzQwNDYyMC5wbmc=/original/Jya5%2F9.png',
      },
      { 
        id: 'https://gnui.itch.io/gns-apparatus',
        name: 'https://img.itch.zone/aW1nLzcwMTA3MzIucG5n/original/5oyPSx.png',
        description: 'Optionally Free · Type Action Shooter · Godot',
        img: 'https://img.itch.zone/aW1hZ2UvMTIwMTY5OC83MDE4NTA0LnBuZw==/original/yyeZuv.png',
      }
    ]
  },
]
</script>

<style scoped>
.thumbnails {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media screen and (max-width: 800px) {
  .thumbnails {
    grid-template-columns: 1fr;
  }
}
</style>
