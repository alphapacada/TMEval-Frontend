<template>
    <div class="">
        <label class="custom-toggle align-middle">
            <input type="checkbox"
                v-model="model"
                v-bind="$attrs"
                v-on="$listeners">
            <span class="custom-toggle-slider rounded-circle"></span>
            
        </label>
        <label class="pl-2"><h6 class="text-secondary font-weight-bold"><slot></slot></h6>
        </label>
    </div>
        
</template>
<script>
export default {
  name: "base-toggle",
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
      default: false,
      description: "Switch value"
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
<style>
</style>
