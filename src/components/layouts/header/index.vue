<template>
    <div :id="$options.name" :class="`globalLayoutChildren ${$options.name}`">
        <div class="headInner">
            <div class="hedLtArea">
                <cur-button @click="asdf" class-name="wmxnxnxnxnxn"> 로고 </cur-button>
            </div>
            <div class="hedCtArea">
                <slot />
            </div>
            <div class="hedRtArea">
                <cur-button></cur-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CurButton from "@/components/common/CurButton.vue";
@Component({
    name: "layoutHeader",
    components: {
        CurButton,
    },
})
export default class extends Vue {
    asdf(e: object) {
		console.log(typeof e)
        console.log(e);
    }
}
</script>
