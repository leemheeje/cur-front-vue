<template>
    <div :id="$options.name" :class="`globalLayoutChildren ${$options.name}`">
        <slot />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
    name: "layoutAside",
})
export default class extends Vue {}
</script>
