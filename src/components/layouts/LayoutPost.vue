<template>
    <div :id="$options.name" :class="`globalLayout ${$options.name}`">
        <slot />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "layoutPost",
})
export default class extends Vue {}
</script>
