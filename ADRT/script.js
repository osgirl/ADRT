$(document).ready(function(){
	$('#nav-menu').click(function(){
		$('ul.nav-list').addClass('open').slideToggle('200');
	});
});

$(document).ready(function () {

    $('.tgl').before('<span><font color=red>Ler Mais »</font></span>');

    $('.tgl').css('display', 'none')

    $('span', '#box-toggle').click(function () {

        $(this).next().slideToggle('slow')

            .siblings('.tgl:visible').slideToggle('fast');

        $(this).toggleText('more »', '« less')

            .siblings('span').next('.tgl:visible').prev()

            .toggleText('more »', '« less')

    });

})