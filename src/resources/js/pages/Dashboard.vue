<template>
    <div>
        <h1>残高推移</h1>
        <div class="small">
            <chart></chart>
        </div>
    </div>
</template>
<script>
import Chart from "../components/Chart";
export default {
    components: {
        Chart
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
                height: `300px`,
                width: `800px`,
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
    width: 1000px;
}
/*
canvas {
    width: 600px !important;
    height: 600px !important;
}
*/
</style>
