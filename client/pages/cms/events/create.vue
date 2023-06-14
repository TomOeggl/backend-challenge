<template>
    <div class="wrapper">
        <div class="editor" v-if="!loading">
            <div><nuxt-link to="/cms/events">Go Back</nuxt-link></div>
            <h2>New Event</h2>
            <form @submit.prevent="createEvent">
                <label class="editor__name-label">
                    Name:
                    <input class="editor__name-input" v-model="event.name" />
                </label>
                <label class="editor__description-label">
                    Description:
                    <textarea rows="4" class="editor__description-textarea" v-model="event.description"></textarea>
                </label>
                <label class="editor__startDate-label">
                    Start Date:
                    <input class="editor__startDate-input" v-model="startDate" type="date" />
                </label>
                <label class="editor__startTime-label">
                    Start Time:
                    <input class="editor__startTime-input" v-model="startTime" type="time" />
                </label>
                <label class="editor__imageupload-label">
                    Image:
                    <input class="editor__imageupload-input" type="file" @change="onFileChange" />
                </label>
                <label class="editor__published-label">
                    Publish:
                    <input class="editor__published-checkbox" type="checkbox" v-model="event.published" />
                </label>
                <button class="editor__submit-button" type="submit">Create</button>
            </form>
        </div>
        <div class="preview" v-if="!loading">
            <SingleEvent :name="event.name" :description="event.description" :startDateAndTime="event.startDateAndTime"
                :image="event.image" />
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import axios from 'axios';
import SingleEvent from '../../../components/SingleEvent.vue';

export default {
    layout: 'dashboardLayout',
    components: {
        SingleEvent
    },
    data() {
        return {
            event: {},
            loading: true,
            startDate: '',
            startTime: '',
        };
    },
    async created() {
        try {
            this.event = {
                startDateAndTime: '2023-06-29T16:00:00.000Z',
                name: "Event Name",
                description: "Event Description",
                image: '',
                published: false
            }
            this.loading = false;
        } catch (error) {
            console.error('Failed to fetch event:', error);
        }
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.uploadImage(file);
        },
        async uploadImage(file) {
            try {
                const formData = new FormData();
                formData.append('image', file);
                const response = await axios.post('http://localhost:9000/api/events/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                this.event.image = response.data.url;
            } catch (error) {
                console.error('Failed to upload image:', error);
            }
        },
        async createEvent() {
            this.event.startDateAndTime = `${this.startDate}T${this.startTime}:00`;
            try {
                const response = await axios.post(`http://localhost:9000/api/events/`, this.event);
                const createdEvent = response.data.data;
                this.$router.push('/cms/events/' + createdEvent.id);
            } catch (error) {
                console.error('Failed to create event:', error);
            }
        },
    },
};
</script>

  
<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}


.editor,
.preview {
    width: 100%;
    padding: 10px;
}


.editor * {
    width: 100%;
    margin-bottom: 10px;
}

.editor label {
    font-size: 14px;
}

.editor__published-checkbox {
    width: max-content;
    margin: 10px 4px;
}
</style>
