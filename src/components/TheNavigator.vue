<template>
    <div class="h-full flex flex-col">
        <div>
            <span><fa :icon="['fas', 'box-open']" style="color: #ad8762"></fa> Kenny's Portfolio</span>
            <hr class="my-2" />
        </div>

        <Folder :folder-name="tree.label" :directories="tree.directories" :file-routes="tree.files" :is-initially-open="true"></Folder>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Folder from "@/components/shared/Folder.vue";
import {tree} from "@/constants/FileTree";

export default defineComponent({
    name: "TheNavigator",
    components: {Folder},
    setup() {
        return {
            tree
        }
    }
})
</script>

<style scoped>

</style>
