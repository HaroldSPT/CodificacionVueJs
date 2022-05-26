const API = "https://api.github.com/users/";

const app = Vue.createApp({
  data() {
    return {
      busqueda: null,
      result: null,
      error: null
    }
  },
  //La palabra function ya no es necesaria pues se usa un método
  methods: {
    async Buscar() {
      //
      this.result = this.error = null
      try {
        const response = await fetch(API + this.busqueda)
        if(!response.ok) throw new Error("Usuario no econtrado")
        const data = await response.json()
        console.log(data)
        this.result = data
      } catch (error) {
        this.error = error
        //tan pronto termina el proceso limpia la búsqueda.
      } finally {
        this.busqueda
      }

    }
  }
})
