<template>
    <div class="small">
        <Doughnut></Doughnut>
    </div>
</template>
<script>
import Doughnut from "../components/Doughnut";
export default {
    components: {
        Doughnut
    },
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
    },
    computed: {
        myStyles() {
            return {
                height: `30px`,
                width: `80px`,
                position: "relative"
            };
        }
    }
};
</script>
<style>
.container {
    height: 400px;
}
.small {
    position: relative;
    height: 200px;
    width: 100px;
}
/*
canvas {
    width: 600px !important;
    height: 600px !important;
}
*/
</style>
