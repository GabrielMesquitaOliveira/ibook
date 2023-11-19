<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugit
      rem. Illum debitis consectetur sunt nihil, dolorem maiores quia voluptate
      voluptatibus vitae suscipit excepturi velit nostrum, ipsa nam et culpa.
    </p>
    <img src="@/assets/img/presentation.svg" alt="Apresentação">
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen("small", "medium") {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
