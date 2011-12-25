class Loecation < Sinatra::Base
  enable :raise_errors

  set :root, File.expand_path("#{File.dirname(__FILE__)}/..")
  set :sprockets, Sprockets::Environment.new(root)
  set :asset_prefix, 'assets'

  ASSETS = {
    'development' => 'http://localhost:9393',
    'production' => 'http://assets.loecation.com'
  }

  configure do
    set :asset_host, ASSETS[settings.environment.to_s]
    sprockets.append_path(File.join(root, 'assets'))

    sprockets.context_class.instance_eval do
      def settings
        Cappuccino.settings
      end
    end
  end

  get '/' do
    erb :index
  end
end
