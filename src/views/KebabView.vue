<script setup lang="ts">
import ContentPanel from '@/components/ContentPanel.vue';
import MarkdownPage from '@/components/MarkdownPage.vue';
</script>

<template>
  <ContentPanel :width=40>
    <h1>The Real About Me</h1>
    <div class="warn-container">
      <div class="warn-header">⚠WARNING⚠</div>
      this page contains heavy venting, and a skull emoji
  </div>
    <div class="profile">
      <img src="@/assets/icons/gn.webp" alt="" class="profile-icon"/>
      <div class="side-info">
        <h1 class="nameplate"><span class="smallcaps">Marc Ramirez</span></h1>
        <MarkdownPage content='

/// Filipino · Male · August 18 2005

hi, im Marc; and im more than just the good 3D modeller and Programmer **GN**
'></MarkdownPage>
      </div>
    </div>

    <MarkdownPage content="

## INTERESTS N' HOBBIES
- My favorite food is the **Club House Sandwitch**! and **Authentic brewed iced tea**!
- The color Green gives me great comfort from happy memories
- I have massive trust issues after incidents in Grade 11
- I am trapped in my own success, theres no going back now!!

#

Most people who know me only know the things I build.
The games, the libraries, the models, the endless little side projects.

I guess that's what happens when you've spent years with little more than a computer for company. 💀
"
></MarkdownPage>
<MarkdownPage content="
## THE CATCH OF BEING THIS GREEN..
When I started Computer Science, I thought **I'd finally find people who shared the same excitement** I had for creating things.
I imagined staying up late talking about ideas, making things together, solving impossible bugs.
**Reality wasn't quite like that**.

**I got good at finishing work quickly**. I got good at teaching myself. I got good at spending entire days alone.
Those are useful skills, but they costed me something priceless..

Somewhere along the way, **I forgot how to exist around other people** without overthinking every word I said.
I constantly wonder if im being weird, if I talk too much, or not enough. I find myself adjusting who I am **just so people might see me as... normal**.

**its exhausting.**

I dont think I want anything extra-ordinary.

I just like to know what its like to meet someone, a friend where conversations don't feel like a performance.
Someone I dont have to translate myself for.
Someone who understands why I can spend HOURS obsessing over tiny details in a project, 

but also knows **theres a person behind all that code**..

maybe thats alot to ask. or maybe ive just been looking in the wrong places.

either way, im still here, making things, hopeing one day I will be set free, and I wont have to do it all alone.

If you found this page, thank you for listening. Maybe you're searching for your people too. If so. I hope you find them. c:

and I hope I do too.

-GN aka; Marc
"
    ></MarkdownPage>
  </ContentPanel>
</template>

<style scoped>

.warn-container {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 250, 117, 0.124);
  border-radius: 4px;
  padding: 4px;
  background-color: rgba(255, 223, 128, 0.089);
}

.warn-header {
  color: rgb(255, 215, 84);
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
