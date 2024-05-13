const { createApp } = Vue

createApp({

    data() {
        return {
            url: "https://randomuser.me/api/?results=3&nat=es&inc=gender,name,dob,picture&noinfo",
            datos: [],
            error: false,
            styleCaseCard: {
                display: 'flex',
                justifyContent: 'center',
                height: '400px',
                borderRadius: '20px',
                position: 'relative',
                border: '2px solid black',
                paddingTop: '45px',
                paddingBottom: '10px',
                boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)',
            },
            styleCaseItem: {
                width: '90%',
                borderRadius: '20px',
            },
            styleCaseItemName: {
                'font-size': '1.5rem',
                'font-weight': 'bold',
                'text-align': 'center',
                color: 'rgb(217, 217, 217)',
                'font-style': 'italic',
                position: 'absolute',
                top: '0',
                width: '100%',
                background: 'var(--color-mora-800)',
                'border-top-left-radius': '20px',
                'border-top-right-radius': '20px',
                padding: '5px',
                'z-index': '99',
            },
            styleCaseItemText: {
                'font-size': '1.4rem',
                'font-weight': 'bold',
                'text-align': 'center',
                color: 'rgb(217, 217, 217)',
                'margin-top': '10px',
                'font-style': 'italic',
                position: 'absolute',
                left: '10%',
                bottom: '2%',
                width: '80%',
                'background-color': 'rgba(255, 255, 255, 0)',
                'border-radius': '30px',
                padding: '10px',
                'z-index': '99',
            },
            caseItemTextBefore: {
                content: '',
                width: '100%',
                height: '100%',
                position: 'absolute',
                'border-radius': '30px',
                left: '0',
                bottom: '2%',
                'backdrop-filter': 'blur(10px) brightness(0.6)',
                'z-index': '-5',
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

// https://randomuser.me/api/?&results=3&seed=amtabcda&nat=es&inc=gender,name,dob,picture&noinfo