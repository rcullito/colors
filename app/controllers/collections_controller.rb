require 'json'
require 'pp'

class CollectionsController < AuthenticatedController
  def index
    @products = ShopifyAPI::Product.find(:all, :params => {:limit => 10})

    @variants = ShopifyAPI::Variant.find(:all, :params => {:limit => 10})

    # @smart_collections = ShopifyAPI::SmartCollection.find(:all, :params => {:limit => 10})
    #pp @smart_collections

    # let's update the JS here and now

    # first check that we can access the public address for the js file

    new_script_tag = ShopifyAPI::ScriptTag.new
    new_script_tag.event = "onload"
    new_script_tag.src = "https://c2abe236.ngrok.io/color-dots.js"
    new_script_tag.save
  end


  def showscripttags

    # extra_script_tag = ShopifyAPI::ScriptTag.find(19819841)

    # extra_script_tag.destroy


    @script_tags = ShopifyAPI::ScriptTag.find(:all, :params => {:limit => 10})
  end


end
