<template>
  <i class="w-icon" :style="style">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { iconProps } from './icon';
import type { IconProps } from './icon';

defineOptions({
  name: 'TgIcon',
});
// interface IsIconProps {
//   size?: number | undefined;
//   color?: string | undefined;
// }

// // 设置默认值
// const props = withDefaults(
//   defineProps<IsIconProps>(),
//   {
//     size: 26,
//     color: 'blue',
//   }
// );

const props = defineProps(iconProps);

const style = computed(() => {
  if (props.size && props.color) {
    return {
      fontSize: `${props.size}px`,
      color: props.color,
    };
  } else {
    return {};
  }
});
</script>
