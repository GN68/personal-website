<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue';
import MarkdownPage from '@/components/MarkdownPage.vue';
</script>

<template>
  <ContentPanel class="ContentPanelOverride">
    <div class="with-limiter">
      <div class="profile">
        <div class="side-info">
          <h1 class="nameplate">GNanimates</h1>
          <MarkdownPage content='
          
|> Salutations! I am **GN**, **GNUI**, **GN68s** or **GNanimates**. irl people call me Marc or Māku

> Filipino · Male · 21 · 18/08/2005
'></MarkdownPage>
        </div>
      </div>

      <MarkdownPage content="

## INTERESTS N' HOBBIES
I am a **3D Character Artist** and **Animator**, a **Web Dev** and a **Programmer**. I cherish all my hobbies equally and passionately! and this is my arsenal of tools:
- Coding games and tools with [Godot](https://godotengine.org/), [LÖVE2D](https://love2d.org/)
- Coding this website and Avatars with [VS Code](https://code.visualstudio.com/), [Intellij](https://www.jetbrains.com/idea/)
- Modeling & Animating characters with [Blender](https://www.blender.org/), [Blockbench](https://www.blockbench.net/),
- Drawing graphic designs in [Inkscape](https://inkscape.org/), [Affinity](https://www.affinity.studio/)
- Drawing with [Paint.NET](https://paint.net/), [Aseprite](https://www.aseprite.org/),
- Editing Films with [Audacity](https://www.audacityteam.org/), [Blender](https://www.blender.org/), [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)
"></MarkdownPage>
      <MarkdownPage content="## SHOPS"></MarkdownPage>
      <div>All my work are from hours of blood sweat and tears</div>
      <ButtonSecondary icon="simple-icons:kofi" title="Ko-fi    | Figura Avatars, as GN_ [+3 new]"
        to="https://ko-fi.com/gn_"></ButtonSecondary>
      <ButtonSecondary icon="simple-icons:itchdotio" title="Itch.io  | My Games, as gnui.itch.io [+1 new]"
        to="https://gnui.itch.io"></ButtonSecondary>
      <ButtonSecondary icon="simple-icons:modrinth" title="Modrinth | My MC Resource Packs, GN"
        to="https://modrinth.com/user/GN"></ButtonSecondary>
      <ButtonSecondary icon="simple-icons:sketchfab" title="Fab      | My Models [Empty]"
        to="https://modrinth.com/user/GN"></ButtonSecondary>
      <MarkdownPage content="## SOCIALS"></MarkdownPage>
      <ButtonSecondary icon="simple-icons:bluesky" title="Bluesky  | Rarely used, as gnon.top"
        to="https://bsky.app/profile/gnon.top"></ButtonSecondary>
      <ButtonSecondary icon="simple-icons:discord" title="Discord  | My Discord, as @GN68s" to="https://discord.com/">
      </ButtonSecondary>
      <ButtonSecondary icon="simple-icons:gmail" title="Email    | My Work Email, as gn@gnon.top"
        to="mailto:mail@gnon.top"></ButtonSecondary>
      <ButtonSecondary icon="simple-icons:github" title="Github   | My Repositories, as GN68"
        to="https://github.com/GN68"></ButtonSecondary>
      <ButtonSecondary icon="simple-icons:youtube" title="Youtube  | My Animations, as GNanimates"
        to="https://www.youtube.com/@GNamimates"></ButtonSecondary>
      <MarkdownPage content="
## EDUCATION
> I am currently in my 3rd year of Computer Science in College! (time flies)  
"></MarkdownPage>
      <center><a href="vent/">Fent</a></center>
    </div>
    
    <video autoplay playsinline class="persona">
      <source src="@/assets/intro.webm" type="video/webm">
      Your browser does not support the video tag.
    </video>
  </ContentPanel>
</template>

<style scoped>



video.persona {
  position: fixed;
  left: 50%;
  transform: translate(-50%,0);
  top: 0;
  height: 100%;
  z-index: -1;
  animation: cinebars 4.5s;
}

.ContentPanelOverride {
  display: flex;
  justify-content: flex-end;
}

.with-limiter {
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  animation: introInfo 3.5s;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.127);
  background-color: rgba(18, 18, 18, 0.845);
  backdrop-filter: blur(64px);
  border-radius: 5rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

@keyframes introInfo {
  0% {
    opacity: 0%;
  }
  90% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

@keyframes cinebars {
  0% {
    outline: 50rem solid black;
  }
  90% {
    outline: 50rem solid black;
  }
  100% {
    outline: 50rem solid transparent;
  }
}

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
  
  text-align: center;
  font-size: 6rem;
  font-weight: bold;

  color: rgb(12, 12, 12);
  text-shadow: 0 0 1rem #9ae65f36, 0 0 3rem #9ae65f38;
  background-color: var(--light-green);
  border-top-right-radius: 4rem;
}

.profile-icon {
  border-radius: 999rem;
  width: 12rem;
}
</style>
