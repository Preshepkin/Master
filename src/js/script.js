$( document ).ready(function() {


	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal_item_close').on('click', function() {
		$('.overlay, #consultation').fadeOut('slow');
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .madal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});
	

	$('input[name=phone]').mask('+7 (999) 999-99-99' );


	new WOW().init(
		
		);
	
});