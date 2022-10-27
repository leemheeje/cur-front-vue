<template>
    <button
        class="curButton"
        :class="{
			'is-icon': isIcon,
		}"
        :title="title"
        :disabled="disabled"
        @focus="onFocus"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import "@/assets/style/scss/CurButton.scss";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    name: "CurButton",
})
export default class extends Vue {
    @Prop(Boolean) isIcon!: boolean;
    @Prop({ default: "asdfasdf" }) className!: string;
    @Prop({ default: false }) disabled!: boolean;
    @Prop({ default: "" }) title!: string;
    onClick(e: object) {
        this.$emit("click", 123123);
    }
    onFocus(e: object) {
        this.$emit("focus", e);
    }
}
</script>
