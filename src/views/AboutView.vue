<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue';
import MarkdownPage from '@/components/MarkdownPage.vue';
import Head from '@vueuse/head';

Head.useHead({
  title: 'About Me',
  meta: [
    { name: 'description', content: 'The description about the create of this website' }
  ]
});

</script>

<template>
  <ContentPanel :width=40>
    <h1>ABOUT ME</h1>
    <div class="profile">
      <img src="@/assets/icons/gn.webp" alt="" class="profile-icon"/>
      <div class="side-info">
        <h1 class="nameplate">GNANIMATES</h1>
        <MarkdownPage content='
(⌐▰-▰)
Filipino · Male · 20 Years old

Hi. I am Marc, aka GN. You may know me as **GNUI**, **GN68s** or **GNamimates**.
one way to identify me is by finding my prefix **GN**
'></MarkdownPage>
      </div>
    </div>

    <MarkdownPage content="


## INTERESTS N' HOBBIES
I am a **3D Digital Artist** and a **Programmer**. and I like...  
- Making games and tools with [Godot](https://godotengine.org/),
- Making models and animating characters with [Blender](https://www.blender.org/), [Blockbench](https://www.blockbench.net/),
- Making graphic designs in [Inkscape](https://inkscape.org/),
- Making Sprites with [Aseprite](https://www.aseprite.org/),
- Editing Films with [Blender](https://www.blender.org/), [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)
"
></MarkdownPage>
<MarkdownPage content="## SOCIALS"></MarkdownPage>
<ButtonSecondary icon="simple-icons:gmail" title="Email   · My Work Email · me@gnon.top" to="mailto:mail@gnon.top"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:youtube" title="   Youtube · My Animations · GN" to="https://www.youtube.com/@GNamimates"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:github" title="Github · My Repositories · GN68" to="https://github.com/GN68"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:discord" title="Discord · My Discord · GN68s" to="https://discord.com/"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:bluesky" title="Bluesky · I barely use this · gnon.top" to="https://bsky.app/profile/gnon.top"></ButtonSecondary>
<MarkdownPage content="## SHOPS"></MarkdownPage>
<ButtonSecondary icon="simple-icons:kofi" title="Ko-fi · Figura Avatar Commissions · Support me!" to="https://ko-fi.com/gnanimates"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:modrinth" title="Modrinth · My Minecraft Resource Packs · GN" to="https://modrinth.com/user/GN"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:itchdotio" title="Itch.io · My Games · gnui.itch.io [inactive]" to="https://gnui.itch.io"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:sketchfab" title="Fab · My Models [Empty] · GNamimates [inactive]" to="https://modrinth.com/user/GN"></ButtonSecondary>
<MarkdownPage content="
## EDUCATION
I am currently in my 2nd year of Computer Science in College
    "
    ></MarkdownPage>
  </ContentPanel>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.side-info {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 600px) {
  .profile {
    flex-direction: column;
  }
}

.nameplate {
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(var(--dark-green), var(--light-green));
  text-shadow: 0 0 1rem #9ae65f36,0 0 3rem #9ae65f38;
}

.profile-icon {
  border-radius: 999rem;
  width: 12rem;
}
</style>
