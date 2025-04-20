<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { nodes } = await useGLTF('/hero.glb', { draco: true })
</script>

<template>
  <primitive :object="nodes.AkuAku" />
</template>
