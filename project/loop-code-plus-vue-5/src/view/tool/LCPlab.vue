<template>
  <div class="flex flex-row w-full p-3 primary container">
    <div class="text-2xl">Python实验室</div>
    <div class="flex justify-end flex-grow">
      <py-status :py="py"></py-status>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="p-8">
      <py-code-block id="script" :py="py" :code="code"></py-code-block>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { usePython } from "usepython";
import { PyStatus, PyCodeBlock } from "vuepython";
import "vuepython/style.css";
import "highlight.js/styles/stackoverflow-light.css"

const py = usePython()

const code = `print('Hello World!')
a = 1
b = 2
c = a + b
# return value
c`;

async function init() {
  await py.load();
}

onBeforeMount(() => init())
</script>
<style>
.container{
  padding: 16px;
}
.code-block:focus{
    outline: none;
}
.code-exec-btn{
  display: flex;
  align-items: center;
}
</style>