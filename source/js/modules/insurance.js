$(document).ready(function() {

	$('.insur__details-trigger').click(function() {
		if( $( this ).hasClass('open') ){
			$( this ).removeClass('open');
		} else{
			$('.insur__details-trigger').removeClass('open');
			$( this ).addClass('open');
		}
	});

	$('.open_hidden_content').click(function() {
		let that = this,
				attr = $( this ).attr('id');

		if( $( this ).hasClass('default') ){
			that.innerHTML = "Свернуть";
			$( this ).removeClass('default');

			$('.hidden-content[data-company=' + attr + ']').removeClass('hidden');
		} else{
			that.innerHTML = "Смотреть всю информацию";
			$( this ).addClass('default');

			$('.hidden-content[data-company=' + attr + ']').addClass('hidden');
		};
	});
    
});