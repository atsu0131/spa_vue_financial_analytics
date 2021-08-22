<template>
    <div>
        {{ info }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            info: null
        };
    },
    mounted() {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => (this.info = response));
    }
};
</script>
