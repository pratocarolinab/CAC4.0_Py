const { createApp } = Vue

createApp({

    data() {
        return {
            url: "https://randomuser.me/api/?page=3&results=3&seed=amtabcda&nat=es&inc=gender,name,dob,picture&noinfo",
            datos: [],
            error: false,
            styleImagenCases: {
                color: 'red',
                fontSize: '13px',
                width: '100px',
                height: '100px',
            },
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(
                    data => {
                        console.log(data)
                        this.datos = data
                    }
                )
                .catch(error => {
                    console.log("Error:" + error)
                    this.error = true
                });
        }
    },

    created() {
        this.fetchData(this.url)
    }
}).mount('#app')