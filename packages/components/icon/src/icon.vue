<template>
    <i class="tg-icon" :style="{color: 'red', fontSize: '30px'}">
        <slot></slot>
    </i>
</template>
<script lang="ts">
import { defineComponent, computed} from "vue";
import { IconProps, iconProps } from "./icon";
export default defineComponent({
    name: 'TgIcon',
    props: iconProps,
    setup(props) {
        const style = computed(() => {
            if (props.size && props.color) {
                return {
                    fontSize: props.size + 'px',
                    color: props.color
                }
            } else {
                return {

                }
            }
        })
        console.log('styles', style.value);
        return {
            style
        }
    }
});
</script>