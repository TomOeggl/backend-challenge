<template>
  <router-link :to="`/events/${id}`" class="card">
    <img :src="image" alt="Card image" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <span class="card-startDate">{{ convertedStartDate }}</span>
      <span class="card-startTime">{{ convertedStartTime }}</span>
      <p class="card-text">{{ description }}</p>
    </div>
  </router-link>
</template>
  
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    startDateAndTime: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  computed: {
    convertedStartDate() {
      const startDateOnly = this.startDateAndTime.split('T')[0]
      const yearMonthDay = startDateOnly.split('-');
      return `${yearMonthDay[2]}.${yearMonthDay[1]}.${yearMonthDay[0]}`
    },
    convertedStartTime() {
      const startTimeOnly = this.startDateAndTime.split('T')[1]
      return startTimeOnly.slice(0, 5);
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
  color: black;
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
  