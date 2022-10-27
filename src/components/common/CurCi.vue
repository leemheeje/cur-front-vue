<template>
  <span class="curCi">
	<span class="cimg">
		<img src="@/assets/images/logo.jpg" alt=""/>
	</span>
	<span class="ctxt">Cazoo</span>
  </span>
</template>

<script lang="ts">
import "@/assets/style/scss/CurCi.scss";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    name: "CurCi",
})
export default class extends Vue {

}
</script>
