var apiUrl = "/instagrams";


// var instagramcomponent = new Vue ({
//   el: "#insta",
//   data: {
//     photos: []
//   },
//   created: function(){
//     this.fetchGrams();
//   },
//   methods: {
//   fetchGrams: function(){
//     var self = this;
//   $.ajax({
//     url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=13591390.01bf291.8573ab6f3adf42f8ac53375c94005742',
//     method: 'GET'
//   }).done(function(response){
//     self.photos=response;
//     console.log(self.photos);
//   })
// }
// }
// });
// console.log(instagramcomponent);

var component = new Vue({
  el: "#app",
  data: {
    instagrams: null,
    newTitle: null,
    newImage: null
  },
  created: function(){
    this.fetchData();
  },
  methods: {
    fetchData: function(){
      var self = this;

      $.ajax({
        url: apiUrl,
        method: 'GET'
      }).done(function(response){
        self.instagrams = response.data;
        console.log(self.instagrams);
      })
    },
    submitInstagram: function(){
      var self = this;
      var item = {
        title: this.newTitle,
        img: this.newImage
      }
      $.ajax({
        url: apiUrl,
        method: 'POST',
        data: item
      }).done(function(response){
        self.fetchData();
        console.log(response);
      })

    }
  }
});
//13591390.01bf291.8573ab6f3adf42f8ac53375c94005742 access token
console.log(component);
