<template>
    <footer class="footer">
        <Container>
            <Logo/>
            <p>Copyright</p>
        </Container>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 110px;
  background: color(dark, darkest);
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('light', 'darkest');
    }
  }
}
</style>