<template>
    <div :id="$options.name" :class="`globalLayoutChildren ${$options.name}`">
        <div class="headInner">
            <div class="hedLtArea">
                <cur-button class="hdLogo" title="logo">
					<cur-ci/>
				</cur-button>
            </div>
            <div class="hedCtArea">
                <slot />
            </div>
            <div class="hedRtArea">
                <cur-button is-icon>
					<cur-icon item="fa-bars"/>
				</cur-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CurCi from "@/components/common/CurCi.vue";
import CurIcon from "@/components/common/CurIcon.vue";
import CurButton from "@/components/common/CurButton.vue";
@Component({
    name: "layoutHeader",
    components: {
        CurCi,
        CurIcon,
        CurButton,
    },
})
export default class extends Vue {
}
</script>
