require 'json'

class CollectionsController < AuthenticatedController
  def index
    @products = ShopifyAPI::Product.find(:all, :params => {:limit => 10})

    @variants = ShopifyAPI::Variant.find(:all, :params => {:limit => 10})

    # puts type(@variants)



    # the field that displays the value is _
    # but the field that displays the key is _, and this is what we want to group by

    # test this out


  end


end
