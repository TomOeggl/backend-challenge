<template>
    <div class="wrapper">
        <h2>New Team Member</h2>
        <div class="editor" v-if="!loading">
            <div><nuxt-link to="/cms/team">Go Back</nuxt-link></div>
            <form @submit.prevent="createMember">
                <label class="editor__name-label">
                    Name:
                    <input class="editor__name-input" v-model="member.name" />
                </label>
                <label class="editor__description-label">
                    Description:
                    <textarea rows="4" class="editor__description-textarea" v-model="member.description"></textarea>
                </label>
                <label class="editor__imagelink-label">
                    Image Link:
                    <input class="editor__imagelink-input" v-model="member.imageLink" />
                </label>
                <label class="editor__imageupload-label">
                    Image:
                    <input class="editor__imageupload-input" type="file" @change="onFileChange" />
                </label>
                <button class="editor__submit-button" type="submit">Update</button>
            </form>
        </div>
        <div class="preview">
            <TeamCard :name="member.name" :description="member.description" :imageLink="member.imageLink" />
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import TeamCard from '../../../components/TeamCard.vue';

export default {
    layout: 'dashboardLayout',
    components: {
        TeamCard
    },
    data() {
        return {
            member: {},
            loading: true,
        };
    },
    async created() {
        try {
            this.member = {
                name: '',
                description: '',
                imageLink: '',
            }
            this.loading = false;
        } catch (error) {
            console.error('Failed to fetch team member:', error);
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

                const response = await axios.post('http://localhost:9000/api/members/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                this.member.imageLink = response.data.url;
                console.log(this.member.imageLink);
            } catch (error) {
                console.error('Failed to upload image:', error);
            }
        },
        async createMember() {
            try {
                const response = await axios.post(`http://localhost:9000/api/members/`, this.member);
                const createdTeamMember = response.data.data;
                this.$router.push('/cms/team/' + createdTeamMember.id);
            } catch (error) {
                console.error('Failed to create team member:', error);
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


.editor  *  {
    width: 100%;
    margin-bottom: 10px;
}

.editor label{
    font-size: 14px;
}


</style>