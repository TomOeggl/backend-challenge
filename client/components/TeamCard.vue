<template>
  <div class="card">
    <img :src="imageLink" alt="Member image" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: true
    }
  }
}
</script>
  
<style scoped>
.card {
  width: 18rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.card img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-title {
  margin-bottom: 10px;
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
}
</style>
  