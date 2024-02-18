<template>
    <div class="input">
        <label :for="randomId" v-if="label">{{ label }}
          <span v-if="required" :class="required">*</span>
        </label>
        <input 
            :type="types"                                        
            :placeholder="placeholder" 
            :title="placeholder" 
            :id="randomId"                   
            :value="modelValue"                 
            :maxlength="maxlength"                                 
            @input="$emit('update:modelValue', $event.target.value)"    
            @focusout="$emit('update:modelValue', $event.target.value)" 
         >
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, watch, nextTick,onBeforeMount, onUnmounted } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '입력하세요'
  },  
  types: {
    type: String,
    default: 'text'
  },
  maxlength: {
    type: Number,
    default: ''
  },   
  isFailEl: {
    type: Boolean,
    default: ''
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  required: {
    default: false
  },
  modelValue: String,
  disabled: {
    type: Boolean,
    default: false
  }
})

let emit = defineEmits(['update:modelValue'])

const randomId = ref('')
const autofocus = ref(false)
</script>

<style>
</style>