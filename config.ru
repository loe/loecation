Bundler.require

$LOAD_PATH << 'lib'

require 'loecation'

use Rack::ConditionalGet
use Rack::ETag
use Rack::Static, :urls => ['/apple-touch-icon.png', '/favicon.ico', '/robots.txt'], :root => 'assets'

map "/#{Loecation.asset_prefix}" do
  run Loecation.sprockets
end

map '/' do
  run Loecation
end
