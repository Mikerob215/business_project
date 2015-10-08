require 'sinatra/base'
require 'sinatra/assetpack'

class App < Sinatra::Base
  register Sinatra::AssetPack
  assets do
    # read on
assets do

  js :application, [
    '/js/jquery.js',
    '/js/app.js'
    # You can also do this: 'js/*.js'
  ]

  css :application, [
    '/css/jqueryui.css',
    '/css/reset.css',
    '/css/foundation.css',
    '/css/app.css'
   ]

  js_compression :jsmin
  css_compression :sass
  end
end
  # Rest of your app
end
