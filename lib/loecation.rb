class Loecation < Sinatra::Base
  enable :raise_errors

  set :root, File.expand_path("#{File.dirname(__FILE__)}/..")
  set :sprockets, Sprockets::Environment.new(root)
  set :asset_prefix, 'assets'

  ASSETS = {
    'development' => 'http://localhost:9393',
    'production' => 'http://assets.loecation.com'
  }

  OAUTH = {
    'id' => ENV['FOURSQUARE_CLIENT_ID'],
    'secret' => ENV['FOURSQUARE_CLIENT_SECRET']
  }

  configure do
    set :asset_host, ASSETS[settings.environment.to_s]
    sprockets.append_path(File.join(root, 'assets'))

    sprockets.context_class.instance_eval do
      def settings
        Loecation.settings
      end
    end
  end

  helpers do
    def asset_path(src)
      "#{self.class.settings.asset_host}/#{self.class.settings.asset_prefix}/#{self.class.settings.sprockets[src].digest_path}"
    end
  end

  get '/' do
    erb :index
  end
end
