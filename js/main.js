const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
          busqueda: null,
          result: null
        }
      },
    //La palabra function ya no es necesaria pues se usa un método
    methods: {
      async Buscar() {
        const response = await fetch(API + this.busqueda)
        const data = await response.json()
        console.log(data)
        this.result = true
      }
    }
})
