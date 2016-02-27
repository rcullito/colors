class CollectionsController < AuthenticatedController
  def index
    @products = ShopifyAPI::Product.find(:all, :params => {:limit => 10})

    @variants = ShopifyAPI::Variant.find(:all, :params => {:limit => 10})

  end


end
