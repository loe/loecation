Bundler.require(:default, :test)
require 'minitest/autorun'
require 'loecation'

class TestLoecation < MiniTest::Unit::TestCase
  include Rack::Test::Methods

  def app
    Loecation
  end

  def test_load_index
    get '/'
    assert last_response.ok?
  end
end

