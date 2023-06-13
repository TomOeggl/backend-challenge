<template>
    <main>
        <img :src="image" class="event__image" alt="Event header image" />
        <div class="event__body">
            <h2 class="event__title">{{ name }}</h2>
            <span class="event__startDate">{{ convertedStartDate }}</span>
            <span class="event__startTime">{{ convertedStartTime }}</span>
            <p class="event__text">{{ description }}</p>
        </div>
    </main>
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
            required: false
        },
        image: {
            type: String,
            default: "https://images.unsplash.com/photo-1555086156-e6c7353d283f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        }
    },

    computed: {
        convertedStartDate() {
            console.log(this.startDateAndTime);
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

.event__image{
    object-fit: cover;
    width: 100%;
    height: 15rem;
}
.event__title{
    font-size: 1.5rem;
}

</style>