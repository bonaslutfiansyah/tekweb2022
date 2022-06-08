let app = Vue.createApp({
    data() {
        return {
            articles: {},
            markdown: null
        }
    },
    methods: {
        getArticleData() {
            axios
                .get(
                    "https://raw.githubusercontent.com/bonaslutfiansyah/tekweb2022/main/asset/chill.json"
                )
                .then((res) => {
                    this.articles = res.data;
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() {
        this.getArticleData()
    }
})
app.mount('#app');