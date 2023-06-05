<template>
    <div class="card">
      <img :src="image" alt="Card image" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      image: {
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
    height: auto;
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
  