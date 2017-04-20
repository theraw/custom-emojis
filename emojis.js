// (c) linyows
(function($){
  $.fn.emoji = function(){
    var keys = '\\+1|ss|smile|rocket';

    return this.each(function(){
      var regex = new RegExp(':(' + keys + '):', 'g');
      $(this).html($(this).html().replace(regex, $.fn.emoji.replace));
    });
  };

  $.fn.emoji.replace = function(){
    var key = arguments[1];
    var url = 'https://cdn.systemroot.me/emoji/img';
    var extension = '.png';
    var src = url + '/' + key + extension;
    return '<img class="emoji" style="height:22px; width:22px;" src="' + src + '"" />';
  };
})(jQuery);
