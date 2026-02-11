<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import IconButtonLink from '@/components/IconButtonLink.vue';
import MarkdownPage from '@/components/MarkdownPage.vue';

</script>

<template>
  <ContentPanel :width=40>
    <h1>About Me</h1>
    <div class="profile">
      <img src="@/assets/icons/gn.webp" alt="" class="profile-icon"/>
      <MarkdownPage content='
# **MARK RAMIREZ**
I am Filipino · Male · 20 Years old

You may know me as **GN**, **GNUI**, **GN68s** or **GNamimates**.
one way to identify me is by finding my prefix GN
'></MarkdownPage>
    </div>

    <MarkdownPage content="


## INTERESTS N' HOBBIES
I am a **3D Digital Artist** and a **Programmer**. and I like...  
- Making games and tools with [Godot](https://godotengine.org/),
- Making models and animating characters with [Blender](https://www.blender.org/), [Blockbench](https://www.blockbench.net/),
- Making graphic designs in [Inkscape](https://inkscape.org/),
- Making Sprites with [Aseprite](https://www.aseprite.org/),
- Editing Films with [Blender](https://www.blender.org/), [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)

## LINKS
the best way to contact me is through my Email or Discord"
></MarkdownPage>
<MarkdownPage content="#### Socials"></MarkdownPage>
<IconButtonLink icon="simple-icons:gmail" title="Email · My Work Email · me@gnon.top" to="mailto:mail@gnon.top"></IconButtonLink>
<IconButtonLink icon="simple-icons:youtube" title="Youtube · My Animations · GN" to="https://www.youtube.com/@GNamimates"></IconButtonLink>
<IconButtonLink icon="simple-icons:github" title="Github · My Repositories · GN68" to="https://github.com/GN68"></IconButtonLink>
<IconButtonLink icon="simple-icons:discord" title="Discord · My Discord · GN68s" to="https://discord.com/"></IconButtonLink>
<IconButtonLink icon="simple-icons:bluesky" title="Bluesky · I barely use this · gnon.top" to="https://bsky.app/profile/gnon.top"></IconButtonLink>
<MarkdownPage content="#### Stores / Downloads"></MarkdownPage>
<IconButtonLink icon="simple-icons:itchdotio" title="Itch.io · My Games · gnui.itch.io" to="https://gnui.itch.io"></IconButtonLink>
<IconButtonLink icon="simple-icons:modrinth" title="Modrinth · My Minecraft Resource Packs · GN" to="https://modrinth.com/user/GN"></IconButtonLink>
<IconButtonLink icon="simple-icons:sketchfab" title="Fab · My Models [Empty] · GNamimates" to="https://modrinth.com/user/GN"></IconButtonLink>
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

@media screen and (max-width: 600px) {
  .profile {
    flex-direction: column;
  }
}

.profile-icon {
  width: 12rem;
}
</style>
