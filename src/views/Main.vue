<template>
    <layout-post>
        <layout-header>layout-header</layout-header>
        <div class="glContainer">
            <layout-lnb>layout-lnb</layout-lnb>
            <layout-content>LayoutContent</layout-content>
        </div>
    </layout-post>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LayoutPost, LayoutAside, LayoutHeader, LayoutLnb, LayoutContent } from "@/components/layouts";
@Component({
    name: "Main",
    components: {
        LayoutPost,
        LayoutAside,
        LayoutHeader,
        LayoutContent,
        LayoutLnb,
    },
})
export default class extends Vue {
    created() {
        console.log(this.$options.name);
    }
    onChange() {
        console.log(123);
    }
}
</script>
