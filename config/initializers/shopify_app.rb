ShopifyApp.configure do |config|
  config.api_key = "4ce94bba5fd533cb93c0ee04e45fbd0a"
  config.secret = "e598e4031e12a42377973e02e3d87549"
  config.redirect_uri = "http://localhost:3000/auth/shopify/callback"
  config.scope = "read_orders, read_products, read_script_tags, write_script_tags"
  config.embedded_app = true
end
