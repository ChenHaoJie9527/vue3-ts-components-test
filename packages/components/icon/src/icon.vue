<template>
  <i class="w-icon" :style="style">
    <slot />
  </i>
</template>

<!-- <script lang="ts">
import { computed, defineComponent } from 'vue';
import { iconProps } from './icon';

export default defineComponent({
  name: 'TgIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...(props.size ? { 'font-size': `${props.size}px` } : {}),
        ...(props.color ? { color: props.color } : {}),
      };
    });
    return { style };
  },
});
</script> -->

<script setup lang="ts">
import { computed } from 'vue';
import { iconProps } from './icon';
defineOptions({
  name: 'TgIcon',
});
const props = defineProps(iconProps);
const style = computed(() => {
  if (props.size && props.color) {
    return {
      fontSize: props.size,
      color: props.color,
    };
  } else {
    return {};
  }
});
</script>
