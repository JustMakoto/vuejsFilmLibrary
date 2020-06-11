// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Animate from 'animate.css'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(
  Vuelidate,
  Uimini,
  Animate
  )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created (){
    var firebaseConfig = {
      apiKey: "AIzaSyDAXDvsOeRQTEvBdrPOuTf0PhOmLcz34Fw",
      authDomain: "film-library-3007f.firebaseapp.com",
      databaseURL: "https://film-library-3007f.firebaseio.com",
      projectId: "film-library-3007f",
      storageBucket: "film-library-3007f.appspot.com",
      messagingSenderId: "302601352557",
      appId: "1:302601352557:web:762b15a8ad9e24a9b51664",
      measurementId: "G-Z6EQ5PV42F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('loggedUser', user)
      }
      this.$store.dispatch('loadTasks')
    })
  }
})
