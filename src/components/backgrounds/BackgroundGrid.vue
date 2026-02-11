<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { shallowRef } from 'vue';
import * as THREE from 'three';

const uniforms = {
  uTime: { value: 0 },
}

const material = shallowRef<THREE.ShaderMaterial | null>(null)

const { onLoop } = useRenderLoop()

onLoop(({ delta}) => {
  if (material.value) {
    material.value.uniforms.uTime.value += delta
  }
})

</script>

<script lang="ts">
export const vertexShader = `
varying vec2 vUv;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}`

export const fragmentShader = `

uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

const vec3 color1 = vec3(0.05);
const vec3 color2 = vec3(0.08);

const float zoom = 100.0;
const float pi = 3.14159;

void main() {
  vec2 p = vUv * zoom;
  
  float d = sin(p.x*pi) * sin(p.y*pi);
  
  d = clamp(d * 500.0, 0.0, 1.0);
  
  gl_FragColor = vec4(mix(color1,color2,d),1.0);
}
  `

</script>

<template>
  <TresCanvas window-size class="background" >
    <TresPerspectiveCamera :position="[4,-5,4]" :rotation="[0.7,0.2,0]" />
    <TresMesh>
      <TresPlaneGeometry :args="[50,50]"/>
      <TresShaderMaterial
      ref="material"
      :uniforms="uniforms"
      :vertex-shader="vertexShader"
      :fragment-shader="fragmentShader"
      />
    </TresMesh>
  </TresCanvas>
</template>

<style scoped>
.background {
  z-index: -99;
}
</style>
