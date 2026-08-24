<template>
  <div>
    <ContentPanel>
        <div class="category" v-for="category in categories" :key="category.name">
        <h1>{{ category.name }}</h1>
        <div>{{ category.description}}</div>
        <div class="thumbnails" :style="{ 'grid-template-columns': `repeat(${(aspectRatio > 1) ? category.columns : 1}, 1fr)` }">
          <ThumbnailButton
          v-for="item in category.items" 
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :desc="item.description"
          :tags="item.tags"
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
import ThumbnailButton from '@/components/buttons/ThumbnailButton.vue';
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
    description: 'Games I made during game jams! they are all completely free to play',
    columns: 2,
    items: [
      //{ 
      //  id: 'https://gnui.itch.io/the-great-box-chase',
      //  name: 'https://img.itch.zone/aW1nLzE2NDk4MTU5LnBuZw==/original/S3zV%2B6.png',
      //  description: 'Completely Free · Type Action Shooter · Godot',
      //  img: 'https://img.itch.zone/aW1hZ2UvMjc2NDg2My8xNjQ5NDkyOS5wbmc=/794x1000/4%2BSSbl.png',
      //},
      { 
        id: 'https://gnui.itch.io/hallway',
        name: 'Hallway',
        description: 'Free · GMTK Game Jam 2024 · Godot',
        img: 'https://img.itch.zone/aW1hZ2UvMjkwOTYyOC8xNzQwNDYyMC5wbmc=/original/Jya5%2F9.png',
      },
      { 
        id: 'https://gnui.itch.io/gns-apparatus',
        name: 'https://img.itch.zone/aW1nLzcwMTA3MzIucG5n/original/5oyPSx.png',
        description: 'Free · Godot Wild Jam #37 · Godot',
        img: 'https://img.itch.zone/aW1hZ2UvMTIwMTY5OC83MDE4NTA0LnBuZw==/original/yyeZuv.png',
      },
      { 
        id: 'https://gnui.itch.io/paint-favor',
        name: 'Paint Favor',
        description: 'Web · GMTK Game Jam 2026 · Godot',
        img: 'https://img.itch.zone/aW1nLzI4Nzk3NTU0LnBuZw==/315x250%23c/GPIRlY.png',
      }
    ]
  },
  {
    name: 'My Web Projects',
    description: 'online projects you can play around with!',
    columns: 3,
    items: [
      { 
        id: '/othello',
        name: 'Othello',
        description: 'Board Game · Javascript',
        tags: ["Javascript","Web"],
        img: '/thumbnails/othello.jpg',
      },
      { 
        id: '/pano',
        name: 'Panorama viewer',
        description: 'Tool · Panorama · Javascript',
        tags: ["Javascript","Web","Tool"],
        img: '/thumbnails/pano.jpg',
      },
      { 
        id: '/rocket-miss',
        name: 'Rocket Miss',
        description: 'Top Down Flee · Godot',
        tags: ["Godot","Game"],
        img: '/thumbnails/plane2.webp',
      },
      { 
        id: '/armorstand',
        name: 'Armor Stand',
        description: 'Editor · Minecraft 1.16 - 1.20.4 · Godot · Archive',
        tags: ["Godot","Tool","Archive"],
        img: '/thumbnails/armorstand.jpg',
      },
      { 
        id: '/wack-a-duck',
        name: 'Wack a Duck',
        description: 'Clicker · Godot',
        tags: ["Godot","Game","Archive"],
        img: '/thumbnails/duck.jpg',
      },
      { 
        id: '/classic',
        name: 'Website Legacy',
        description: 'Archive · Godot',
        tags: ["Website","Archive"],
        img: '/thumbnails/classic.jpg',
      }
    ]
  },
  {
    name: 'Minecraft Resource Packs',
    description: 'Resource packs I made for Minecraft',
    columns: 3,
    items: [
    {
        id: 'https://modrinth.com/resourcepack/gn-fancy-fences',
        name: 'Fancy Fences',
        description: '2022',
        img: 'https://cdn.modrinth.com/data/6Nchtej4/images/5684a49e3eae78f967ad5d3054fe8e47bb92fdfb.png'
      },
      {
        id: 'https://modrinth.com/resourcepack/gn-redstone3d',
        name: '3D Redstone',
        description: '2023 · Redstone · Cursed',
        img: 'https://cdn.modrinth.com/data/tIgl7EnR/images/628725a84bb1bdb3db624e7fd3305a579d3b5689.png'
      },
      {
        id: 'https://modrinth.com/resourcepack/opaque-sticky-cores',
        name: 'Opaque Cores',
        description: 'Modrinth · Render Patch',
        img: 'https://cdn.modrinth.com/data/CEwbv3sR/images/761accd11ee18afd84756e6272c38e6ec0d0861a.png'
      }
    ]
  },
  {
    name: 'Avatars Store',
    description : 'Avatars I made for the Figura Mod, that are downloadable, note that some are paid and some are free, check the tags',
    columns: 4,
    items: [
      {
        id: 'https://ko-fi.com/s/ba0e6c2e09',
        name: 'Mesmerizer Miku',
        description: '2026',
        tags: ['Ko-Fi',"Paid", "Animations",'Blender','Lite Face rig'],
        img: 'https://storage.ko-fi.com/cdn/useruploads/display/e79f0f9b-47f4-48a6-994e-d23d96350a06_2026-07-08_02.52.58.png'
      },
      {
        id: 'https://ko-fi.com/s/b47bdb6851',
        name: 'Mesmerizer Teto',
        description: '2026 · 3D Model · Character',
        tags: ['Ko-Fi',"Paid", "Animations",'Blender','Lite Face rig'],
        img: 'https://storage.ko-fi.com/cdn/useruploads/display/3d4a2ace-6e4d-494b-bcad-bb76c2c78561_2026-07-16_18.36.13.png'
      },
      {
        id: 'https://github.com/lua-gods/ena-bbq',
        name: 'ENA Dream BBQ',
        description: '2025 · 3D Model · Character',
        tags: ['Ko-Fi',"Paid", "Animations",'Blender','Lite Face rig'],
        img: 'https://storage.ko-fi.com/cdn/useruploads/display/2b80a6c0-d85c-41cc-ba50-392caca8c34b_2026-07-09_00.01.17.jpg'
      },
      {
        id: 'https://github.com/lua-gods/RC-Car-Reborn',
        name: 'RC Car',
        description: 'Avatar · Physics · Cars',
        tags: ['Github','Free','Physics'],
        img: 'https://storage.ko-fi.com/cdn/useruploads/display/a5b956a7-cdbc-4197-8acf-6b82eb089080_2026-08-01_01.23.51.png'
      },
      {
        id: 'https://discord.com/channels/1129805506354085959/1508087298892497010',
        name: 'Physics Blackhole',
        description: '2026 · Rendering',
        tags: ['Discord','FiguraMC','Free'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/blackhole.png'
      },
       {
        id: 'https://discord.com/channels/1129805506354085959/1388339874779762688',
        name: 'PvZ Demake',
        description: '2025 Figura Contest',
        tags: ['Figura Contest Winner','Demake Game'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/pvz.png'
      },
      {
        id: 'https://www.youtube.com/watch?v=WEvnVpFa6as',
        name: 'FigShips',
        description: '2026 Figura Contest',
        tags: ['Figura Contest Winner','Tech Demo'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/pvz.png'
      },
    ]
  },
  {
    name: 'Private Avatars',
    description : 'My Personal Avatars for the Figura mod, or Avatar Commissions that allowed me to display their avatars here, most did not agree',
    columns: 4,
    items: [
      {
        id: 'htthttps://github.com/lua-gods/GNs-Avatar-5/tree/future',
        name: 'GN\'s Avatar',
        tags: ['Personal','Open Source'],
        description: 'My Personal Figura Avatar',
        img: 'https://file.garden/amzn9DRaFl15oZ6U/mark.png'
      },
      {
        id: '',
        name: 'Celadine',
        description: 'Rule 63 of GN ',
        tags: ['Private','Face rig','Animations'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/celadine.png'
      },
      {
        id: '',
        name: 'GN Anime',
        description: '2026 Model From Scratch',
        tags: ['Private',"Tech Demo",'Animations','Blender'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/gnanime.png'
      },
      {
        id: '',
        name: 'GN Gundam',
        description: '2025 Avatar Commission',
        tags: ['Private','Animations'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/gnundam.png'
      },
      {
        id: 'https://github.com/lua-gods/GNUI/tree/v5.x',
        name: 'GNUI',
        description: 'My Personal UI Library',
        tags: ['Github','Free','Library','Open Source'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/gnui.webp'
      },
      {
        id: '',
        name: 'Princess Peach',
        description: '2026 Avatar Commission',
        tags: ['Commission','Tech Demo','Face Rig','Animations'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/paper%20peach.png'
      },
      {
        id: '',
        name: 'ENA',
        description: '2022',
        tags: ['Tech Demo','Lite Face rig','Animations','Private'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/ena1.png'
      },
      {
        id: '',
        name: 'Scarlet',
        description: '2022 Cosmetics Test',
        tags: ['Tech Demo','Face rig','Animations','Private'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/scarlet.png'
      },
      {
        id: '',
        name: 'Scarlet',
        description: '2025 Avatar Commission',
        tags: ['Commission','Face rig','Animations'],
        img: 'https://file.garden/amzn9DRaFl15oZ6U/maskolk'
      },
    ]
  },
  {
    name: 'Wallpapers',
    description : 'Click them to view at full screen',
    columns: 1,
    items: [
      {
        id: 'https://file.garden/amzn9DRaFl15oZ6U/gn-itch-io-paint-favor-2560x1080.png',
        img: 'https://file.garden/amzn9DRaFl15oZ6U/gn-itch-io-paint-favor-2560x1080.png'
      },
      {
        id: 'https://file.garden/amzn9DRaFl15oZ6U/blackhole.png',
        img: 'https://file.garden/amzn9DRaFl15oZ6U/blackhole.png'
      },
      {
        id: 'https://file.garden/amzn9DRaFl15oZ6U/reforged.jpg',
        img: 'https://file.garden/amzn9DRaFl15oZ6U/reforged.jpg'
      },
      {
        id: 'https://file.garden/amzn9DRaFl15oZ6U/blenderme.png',
        img: 'https://file.garden/amzn9DRaFl15oZ6U/blenderme.png'
      },
    ]
  }
]
</script>

<style scoped>

h1 {
  margin: 0rem 0rem;
  margin-top: 5rem;
  padding: 0 0;
  line-height: 4rem;
  font-size: 4rem;
}

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
