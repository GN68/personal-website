<template>
  <div>
    <ContentPanel>
      <MarkdownPage content="
# Projects
In here is where you'll find the projects I have created
"/>
        <div class="category" v-for="category in categories" :key="category.name">
        <h1>{{ category.name }}</h1>
        <div class="thumbnails" :style="{ 'grid-template-columns': `repeat(${(aspectRatio > 1) ? category.columns : 1}, 1fr)` }">
          <ThumbnailButton
          v-for="item in category.items" 
          :key="item.id"
          :id="item.id"
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
import { onBeforeUnmount, onMounted, ref } from 'vue';
const aspectRatio = ref(1.777)

const checkAspectRatio = () => {
  aspectRatio.value = window.innerWidth / window.innerHeight
}

onMounted(() => {
  checkAspectRatio()
  window.addEventListener('resize', checkAspectRatio)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkAspectRatio)
})

const categories = [
{
    name: 'My Games',
    columns: 2,
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
  {
    name: 'Online Stuffs',
    columns: 3,
    items: [
      { 
        id: '/othello',
        name: 'othello',
        description: 'Board Game · Javascript',
        img: '/thumbnails/othello.jpg',
      },
      { 
        id: '/pano',
        name: 'Pano',
        description: 'Tool · Panorama · Javascript',
        img: '/thumbnails/pano.jpg',
      },
      { 
        id: '/rocket-miss-dev',
        name: 'Rocket Miss',
        description: 'Top Down Flee · Godot',
        img: '/thumbnails/plane.jpg',
      },
      { 
        id: '/armorstand',
        name: 'Armorstand Poser',
        description: 'Editor · Minecraft 1.16 - 1.20.4 · Godot · Archive',
        img: '/thumbnails/armorstand.jpg',
      },
      { 
        id: '/wack-a-duck',
        name: 'Wack a Duck',
        description: 'Clicker · Godot',
        img: '/thumbnails/duck.jpg',
      },
      { 
        id: '/classic',
        name: 'Legacy Website',
        description: 'Archive · Godot',
        img: '/thumbnails/classic.jpg',
      }
    ]
  },
  {
    name: 'My Minecraft Resource Packs',
    columns: 3,
    items: [
    {
        id: 'https://modrinth.com/resourcepack/gn-fancy-fences',
        name: 'Fancy Fences',
        description: 'Modrinth · Blocks',
        img: 'https://cdn.modrinth.com/data/6Nchtej4/images/5684a49e3eae78f967ad5d3054fe8e47bb92fdfb.png'
      },
      {
        id: 'https://modrinth.com/resourcepack/gnui',
        name: 'GNUI RP',
        description: 'Modrinth · User Interface',
        img: 'https://cdn.modrinth.com/data/fHkNorKr/images/f7a02c7ef72f7c56145e4c173c3fc3dee5a1544f.png'
      },
      {
        id: 'https://modrinth.com/resourcepack/gn-redstone3d',
        name: '3D Redstone Wires',
        description: 'Modrinth · Redstone · Cursed',
        img: 'https://cdn.modrinth.com/data/tIgl7EnR/images/628725a84bb1bdb3db624e7fd3305a579d3b5689.png'
      }
    ]
  },
  {
    name: 'My Figura Stuffs',
    columns: 4,
    items: [
    {
        id: 'https://github.com/lua-gods/RC-Car-Reborn',
        name: 'RC Car Reborn',
        description: 'Avatar · Physics · Cars',
        img: ''
      },
      {
        id: 'https://github.com/lua-gods/GNUI',
        name: 'GNUI',
        description: 'Library · User Interface',
        img: ''
      },
      {
        id: 'https://github.com/lua-gods/GNs-Avatar-3',
        name: 'GN\'s Avatar 3',
        description: 'Avatar · Personal',
        img: ''
      },
      {
        id: 'https://github.com/lua-gods/hamster-ball',
        name: 'Hamster Ball',
        description: 'Avatar · Physics',
        img: ''
      },
      {
        id: 'https://github.com/lua-gods/ena-bbq',
        name: 'ENA Dream BBQ',
        description: 'Avatar · 3D Model · Character',
        img: ''
      },
      {
        id: 'https://github.com/lua-gods/Golf',
        name: 'Golf',
        description: 'Avatar · Physics',
        img: ''
      },
    ]
  }
]
</script>

<style scoped>
.thumbnails {
  display: grid;
  gap: 1rem;
}

.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (aspect-ratio: 1/1) {
  .thumbnails {
    grid-template-columns: 1fr;
  }
}
</style>
