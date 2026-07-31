<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue';
import MarkdownPage from '@/components/MarkdownPage.vue';
</script>

<template>
  <ContentPanel :width=40>
    <h1>About Me</h1>
    <div class="profile">
      <img src="@/assets/icons/gn.webp" alt="" class="profile-icon"/>
      <div class="side-info">
        <h1 class="nameplate">GN<span class="smallcaps">ANIMATES</span></h1>
        <MarkdownPage content='
(⌐▰-▰)
Filipino · Male · 20 years alive

Hi. I am Marc, aka GN. You may know me as **GNUI**, **GN68s** or **GNanimates**.
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

Check out the Gallery section for the things I proudly made!  
All my work are from hours of blood sweat and tears
"
></MarkdownPage>
<MarkdownPage content="## SHOPS"></MarkdownPage>
<ButtonSecondary icon="simple-icons:kofi"      title="Ko-fi    | Figura Avatars, as GN_ [+3 new]" to="https://ko-fi.com/gn_"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:itchdotio" title="Itch.io  | My Games, as gnui.itch.io [+1 new]" to="https://gnui.itch.io"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:modrinth"  title="Modrinth | My MC Resource Packs, GN" to="https://modrinth.com/user/GN"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:sketchfab" title="Fab      | My Models [Empty]" to="https://modrinth.com/user/GN"></ButtonSecondary>
<MarkdownPage content="## SOCIALS"></MarkdownPage>
<ButtonSecondary icon="simple-icons:bluesky"   title="Bluesky  | Rarely used, as gnon.top" to="https://bsky.app/profile/gnon.top"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:discord"   title="Discord  | My Discord, as @GN68s" to="https://discord.com/"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:gmail"     title="Email    | My Work Email, as gn@gnon.top" to="mailto:mail@gnon.top"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:github"    title="Github   | My Repositories, as GN68" to="https://github.com/GN68"></ButtonSecondary>
<ButtonSecondary icon="simple-icons:youtube"   title="Youtube  | My Animations, as GNanimates" to="https://www.youtube.com/@GNamimates"></ButtonSecondary>
<MarkdownPage content="
## EDUCATION
I am currently in my 3rd year of Computer Science in College!
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
  font-size: 5rem;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(var(--dark-green), var(--light-green));
  text-shadow: 0 0 1rem #9ae65f36,0 0 3rem #9ae65f38;
}

.smallcaps {
  font-size: 4rem;
}

.profile-icon {
  border-radius: 999rem;
  width: 12rem;
}
</style>
