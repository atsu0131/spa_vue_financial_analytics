<template>
    <div>
        <h1>残高推移</h1>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            users: []
        };
    },
    methods: {
        userDelete(index, id) {
            axios
                .delete("/api/users/" + id)
                .then(response => {
                    this.users.slice(id, 1);
                })
                .catch(error => console.log(error));
        }
    },
    created() {
        axios
            .get("/api/users")
            .then(response => {
                this.users = response.data.users;
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
