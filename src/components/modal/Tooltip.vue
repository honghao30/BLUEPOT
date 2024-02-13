<template>
    <div class="tooltip-el"
      @mouseenter="mouseover"
      @mouseleave="toolTipHide"
    >
       <span ref="trigger">
        <Button                    
          iconName="btn-icon-tooltip"          
        /> 
       </span>
      <div
        class="tool-tip__wrap"
        :style="{'width': width + 'px'}"
        v-if="isTooltipActive"
        :class="[mode, direction, elAlign, {'active': isTooltipActive}]"
        ref="tooltipMsg"
      >
        <slot name="tooltip-message"></slot>
      </div>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    default: ''
  },
  mode: {
    type: String,
    default: ''
  },
  direction: {
    type: String,
    default: ''
  },
  elAlign: {
    type: String,
    default: ''
  }
})

const isTooltipActive = ref(false)

const mouseover = () => {
  isTooltipActive.value = true
  nextTick()
}
const toolTipHide = () => {
  setTimeout(() => {
    isTooltipActive.value = false
  }, 300)
}
</script>
