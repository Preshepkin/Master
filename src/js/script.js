$( document ).ready(function() {


	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal_item_close').on('click', function() {
		$('.overlay, #consultation').fadeOut('slow');
	});

	$('.button_modal').each(function(i) {
		$(this).on('click', function() {
			$('#order .madal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay').fadeIn('slow');
		})
	});
	
	function validateForms(form){
        $(form).validate({
			errorClass: 'onerror',
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя !!!",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
            }
        });
    };

    validateForms('#consultation form');

	$('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    

	$('input[name=phone]').mask('+7 (999) 999-99-99' );


	new WOW().init(
		
		);
	
});