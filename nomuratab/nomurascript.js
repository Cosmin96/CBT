$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

});

$(function() {
  $('.inside-tabs nav a').on('click', function() {
    show_content($(this).index());
  });

  show_content(0);

  function show_content(index) {
    // Make the content visible
    $('.inside-tabs .content.visible').removeClass('visible');
    $('.inside-tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

    // Set the tab to selected
    $('.inside-tabs nav a.selected').removeClass('selected');
    $('.inside-tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
  }
});
/*
$(document).ready(function(){
   $('.advisoryBox').click(function () {
      $('#backgroundImg-2 .dropDown1').toggle('slide', {
         duration: 1000,
         direction: 'up'
      });
   });
});
*/
