<template>
    <main>
        <SingleEvent v-if="!loading" :key="event.id"  :name="event.name" :description="event.description" :startDateAndTime="event.startDateAndTime" />
    </main>
</template>

<script>
import axios from "axios";
import SingleEvent from "~/components/SingleEvent.vue";

export default {
    layout: "default",
    components: { SingleEvent, },
    data() {
        return {
            event: {},
            loading: true,
        }
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:9000/api/events/' + this.$route.params.id);
            this.event = response.data.data;
            this.loading = false;
            console.log(this.event);
        }
        catch (error) {
            console.error(error);
        }
    },
}
</script>