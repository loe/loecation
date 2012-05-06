class Loecation < Sinatra::Base
  enable :raise_errors, :sessions, :logging

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

  set :oauth_client, OAuth2::Client.new(OAUTH['id'], OAUTH['secret'], :site => 'https://foursquare.com', :authorize_url => 'https://foursquare.com/oauth2/authenticate', :token_url => 'https://foursquare.com/oauth2/access_token')
  set :oauth_callback_url, 'http://localhost:9393/oauth2/callback'

  configure do
    set :asset_host, ASSETS[settings.environment.to_s]
    set :session_secret, '8d50730d3a4f53a1e0e9a22e8494b81ac6c6870ea959a4160f1aee6d38c095248653eb31260f84d8b8b0ba7b29d490e07bb93648a702555cb70e87331e7793f1'
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

  get '/auth' do
    redirect(settings.oauth_client.auth_code.authorize_url(:redirect_uri => settings.oauth_callback_url))
  end

  get '/oauth2/callback' do
    token = settings.oauth_client.auth_code.get_token(params[:code], :redirect_uri => settings.oauth_callback_url)
    session['oauth_token'] = token.token
    redirect('/')
  end
end
