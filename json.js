new Vue({
    el: '#app',
    name: "Weather",
    data: {
        info: "empty"
    },
    methods: {
        getData() {
            fetch("http://127.0.0.1:8000/")
                .then(this.info = response)
            //.then(response => response.json())
            //.then(data => (this.DataList = data));
        }
    }
});