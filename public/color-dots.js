/* Sample JavaScript file added with ScriptTag resource.
This sample file is meant to teach best practices.
Your app will load jQuery if it's not defined.
Your app will load jQuery if jQuery is defined but is too old, e.g. < 1.7.
Your app does not change the definition of $ or jQuery outside the app.
Example: if a Shopify theme uses jQuery 1.4.2, both of these statements run in the console will still return '1.4.2'
once the app is installed, even if the app uses jQuery 1.9.1:
jQuery.fn.jquery => "1.4.2"
$.fn.jquery -> "1.4.2"
*/

/* Using a self-executing anonymous function - (function(){})(); - so that all variables and functions defined within
aren’t available to the outside world. */

(function(){

/* Load Script function we may need to load jQuery from the Google's CDN */
/* That code is world-reknown. */
/* One source: http://snipplr.com/view/18756/loadscript/ */

var loadScript = function(url, callback){

  var script = document.createElement("script");
  script.type = "text/javascript";

  // If the browser is Internet Explorer.
  if (script.readyState){
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" || script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  // For any other browser.
  } else {
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);

};

/* This is my app's JavaScript */
var myAppJavaScript = function($){
  // $ in this scope references the jQuery object we'll use.
  // Don't use jQuery, or jQuery191, use the dollar sign.
  // Do this and do that, using $.
  // $('body').append('<p>Your app is using jQuery version '+$.fn.jquery+'</p>');




  var colorMap = {
    'Beach Glass': '#77D4CD',
    'Blue Jay': '#1382B9',
    'Caramel': '#C4A891',
    'Cherry Stripe': '#9B2273',
    'Coconut': '#DBDFEA',
    'Coffee Bean': '#A77962',
    'Coral Reef': '#F58172',
    'Doe': '#CBC2B8',
    'Fremont': '#137DB5',
    'Frosting': '#DFE6F0',
    'Geranium Pink': '#E39C9F',
    'Huckleberry': '#6C55A3',
    'Junebug': '#B5DAD2',
    'Kit': '#E4DDD7:',
    'Lime': '#C5E547',
    'Laguna Green': '#D7F2EE',
    'Lavender': '#997AB1',
    'Lemonade': '#EBD579',
    'Lily Pad': '#137F3B',
    'Lollipop': '#D790CD',
    'Lupin': '#D9D9F3',
    'Marshmallow': '#D6DAE3',
    'Moonbeam': '#08152E',
    'Raindrop': '#A7C7DD',
    'Sand Dune': '#C8B9A7',
    'Snowflake': '#E4E7EC',
    'Starry Night': '#1A1A1A',
    'Sunflower': '#F2DA73',
    'Teton Sky': '#C0DCD8',
    'Timbr Wolf': '#5E7DB2',
    'Watermelon': '#C33C78',
    'Wild Iris': '#B2C8DC'
  };

  // this may be the third element on yellowberry's site

  // wait a second before doing this
  var colorOptionsContainer = $('.cf-options-container');
  var labels = colorOptionsContainer.children();

  console.log(labels);

  labels.each(function (index, label) {

    var spanElement= $(label).children()[1];
    var colorText = $(spanElement).text();
    var hexColor = colorMap[colorText];
    if (hexColor) {
      $(spanElement).html("<span style='border-radius: 50%; display: inline-block; width: 20px; height: 20px; background: " + hexColor + "'></span>");
    } else {
      $(label).hide();
    }



  });



};

/* If jQuery has not yet been loaded or if it has but it's too old for our needs,
we will load jQuery from the Google CDN, and when it's fully loaded, we will run
our app's JavaScript. Set your own limits here, the sample's code below uses 1.7
as the minimum version we are ready to use, and if the jQuery is older, we load 1.9. */
if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
  loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function(){
    jQuery191 = jQuery.noConflict(true);
    myAppJavaScript(jQuery191);
  });
} else {
  myAppJavaScript(jQuery);
}

})();
