var app = new Vue({
  el: '#app',
  data: {
    message: 'Loading...'
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const host = location.origin
      axios.get(host + '/api/initialize_db').then(response => {
        this.message = "Initialized Database"
      });


      setTimeout(() => {
        axios.get(host + '/api/database_info').then(response => {
          //delay so the information doesn't immediately appear on the screen
          //can be removed whenever
          setTimeout(() => {
            this.message = response.data
          }, 500);
        });
      }, 500)

    }
  }
})