<template>
    <div class="wrapper">
        <div class="editor" v-if="!loading">
            <div><nuxt-link to="/cms/events">Go Back</nuxt-link></div>
            <form @submit.prevent="updateEvent">
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
                <button class="editor__submit-button" type="submit">Update</button>
            </form>
        </div>
        <div class="preview" v-if="!loading">
            <SingleEvent :key="event.id" :id="event.id" :name="event.name" :description="event.description"
                :startDateAndTime="event.startDateAndTime" :image="event.image" />
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
            const response = await axios.get(`http://localhost:9000/api/events/${this.$route.params.id}`);
            this.event = response.data.data;
            this.startDate = this.event.startDateAndTime.split('T')[0];
            this.startTime = this.event.startDateAndTime.split('T')[1].slice(0, 5);
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
        async updateEvent() {
            this.event.startDateAndTime = `${this.startDate}T${this.startTime}:00`;
            try {
                await axios.patch(`http://localhost:9000/api/events/${this.$route.params.id}`, this.event);
                this.$router.push('/cms/events/' + this.$route.params.id);
            } catch (error) {
                console.error('Failed to update event:', error);
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
