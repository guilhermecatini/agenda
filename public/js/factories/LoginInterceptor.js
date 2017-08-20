app.factory('LoginInterceptor', function($q, $injector) {
  return {
    response: function(config) {

      let url = config.config.url.split('/')
      if ( url[url.length -1] != 'login.html' ) {
        let ls = JSON.parse(localStorage.getItem('usuario'))
        if (ls) {
          if (ls._idUsuario) {
            return config
          } else {
            $injector.get('$state').transitionTo('login')
            return config
          }
        } else {
          $injector.get('$state').transitionTo('login')
          return config
        }
      } else {
        return config
      }

    }
  }
})