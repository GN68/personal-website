<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import IconButtonLink from '@/components/IconButtonLink.vue';
import MarkdownPage from '@/components/MarkdownPage.vue';
import TitleBar from '@/components/TitleBar.vue';

</script>

<template>
  <ContentPanel :width=36>
    <TitleBar>About ME</TitleBar>
    <div class="profile">
      <img src="@/assets/icons/gn.webp" alt="" width="192"/>
      <MarkdownPage content="
# **Marc Ramirez**
## GN68s · GNamimates
I am Filipino · Male · The letter H
"></MarkdownPage>
    </div>

    <MarkdownPage content="
You may know me online as **GN**, **GNUI**, **GN68s** or **GNamimates**.
one way to identify me is by finding my prefix GN

## INTERESTS N' HOBBIES
I am a **Digital Artist**, **Game and Web Developer**. and I like...  
- Making games and tools with [Godot](https://godotengine.org/),
- Making models and characters, animations with [Blender](https://www.blender.org/),
- Making graphic designs in [Inkscape](https://inkscape.org/),
- Learning new things about programming (too much)
- Lua and Iced tea🍵

## LINKS
the best way to contact me is through my email"
></MarkdownPage>
<MarkdownPage content="#### Socials"></MarkdownPage>
<IconButtonLink icon="simple-icons:gmail" title="Email · My Work Email · mail@gnon.top" to="mailto:mail@gnon.top"></IconButtonLink>
<IconButtonLink icon="simple-icons:bluesky" title="Bluesky · I barely use this · gnon.top" to="https://gnui.itch.io"></IconButtonLink>
<IconButtonLink icon="simple-icons:youtube" title="Youtube · My Animations · GNamimates" to="https://www.youtube.com/@GNamimates"></IconButtonLink>
<IconButtonLink icon="simple-icons:github" title="Github · My Repositories · GN68" to="https://github.com/GN68"></IconButtonLink>
<MarkdownPage content="#### Stores / Downloads"></MarkdownPage>
<IconButtonLink icon="simple-icons:itchdotio" title="Itch.io · My Games · GNUI" to="https://gnui.itch.io"></IconButtonLink>
<IconButtonLink icon="simple-icons:modrinth" title="Modrinth · My Minecraft Resource Packs · GN" to="https://modrinth.com/user/GN"></IconButtonLink>
<IconButtonLink icon="simple-icons:sketchfab" title="Fab · My Models (empty) · GNamimates" to="https://modrinth.com/user/GN"></IconButtonLink>
<MarkdownPage content="
## EDUCATION
- I am currently in my 1st year of Computer Science in College
    "
    ></MarkdownPage>
  </ContentPanel>
</template>

<style>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
</style>
