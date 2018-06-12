<template>
<div>
    <Slider v-model="value0" range></Slider>
    <Input v-model="value1" placeholder="default size" style="width: 300px" />
    <Input v-model="value2" placeholder="large" size="large size" style="width: 300px" />
    <Input v-model="value3" placeholder="small" size="small size" style="width: 300px" />

    <Input v-model="value4" placeholder="Enter something..." clearable style="width: 300px" />
    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." clearable style="width: 300px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value0: [20, 50],
      value1: '',
      value2: '',
      value3: '',
    };
  }
};
</script>
