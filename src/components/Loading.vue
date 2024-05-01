<template>
  <div class="spin">

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spin{
    width: 40px;
    height: 40px;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color:  red;
    margin: 30px auto;
    animation: spin 1s infinite;
}
@keyframes spin{
    to{transform: rotate(360deg);}
}
</style>