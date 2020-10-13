<template>
    <div class="flex flex-col flex-shrink-0 h-screen text-gray-100 font-body bg-darcula-700"
         @mouseup="handleMouseUp" @mousemove="handleMouseMove" @mouseleave="handleMouseUp"
    >
        <div class="bg-darcula-500 p-1 border-b border-black">
            <TheToolbar />
        </div>

        <div class="flex flex-grow">
            <ResizableContainer class="bg-darcula-500 flex-shrink-0" initial-size="250px">
                <TheNavigator class="p-2" />
            </ResizableContainer>


            <main class="flex flex-col flex-grow overflow-auto">
                <PageTabs class="flex items-center border-b border-black bg-darcula-500 flex-shrink-0 px-4 py-2" />
                <router-view class="flex-grow overflow-auto h-0" />
            </main>
        </div>

        <footer class="bg-darcula-500 p-1 border-t border-black">
            Footer
        </footer>
    </div>
</template>

<style>

</style>
<script lang="ts">
import TheToolbar from "@/components/TheToolbar.vue";
import ResizableContainer from "@/components/utils/ResizableContainer.vue";
import PageTabs from "@/components/PageTabs.vue";
import TheNavigator from "@/components/TheNavigator.vue";
import emitter, {PubsubEvent} from "@/services/pubsub";
import { throttle } from "lodash"

export default {
    components: {TheToolbar, ResizableContainer, PageTabs, TheNavigator},
    setup() {
        function handleMouseUp() {
            emitter.emit(PubsubEvent.MOUSE_UP);
        }

        const handleMouseMove = throttle((e: MouseEvent) => {
            emitter.emit(PubsubEvent.MOUSE_MOVE, e)
        }, 15)

        return {
            handleMouseMove,
            handleMouseUp
        }
    }
}
</script>
