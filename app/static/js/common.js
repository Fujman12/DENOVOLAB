$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	var boolean=true;
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".toggle-menu-box").slideToggle();
		if (boolean){
			$('.toggle-menu-box').append( $('.top-mnu .toggle-mnu') );
			$(this).css({"float": "none"});
			boolean=false; 
		}else{
			$('.top-mnu .col-sm-12').append( $('.toggle-menu-box .toggle-mnu') );
			$(this).css({"float": "right"});
			boolean=true;
		};
		return false;
});


	$('.checkbox-wrap span').click(function() {
        var $this = $(this);
        var checkbox = $this.parent().children('input[type=checkbox]');
        checkbox.prop('checked', !checkbox.prop('checked'));
        $this.toggleClass('checked');
    });

    $('.auto-test-content-box .input-text-wrapper1 img').click(function() {
        var inputText = $(".auto-test-content-box .input-text-wrapper1");
        inputText.css({"display": "none"});
    });
    $('.auto-test-content-box .input-text-wrapper2 img').click(function() {
        var inputText = $(".input-text-wrapper2");
        inputText.css({"display": "none"});
    });

    var num = '';
	$('#for-num').val(num);


	$('.calc .num').on('click', function() {
		numnext = $(this).text();
		num = $('#for-num').val();
		num += numnext;
		$('#for-num').val(num);
	});

	// $(".cdr-2").css({"display": "none"});
	// $(".cdr-2-for-jd").css({"display": "none"});
	// $(".cdr-3").css({"display": "none"});
	// var i=1;
	// 	$(".cdr-next").on("click", function() {
	// 		if(i<=2){
	// 			var v = ".cdr-" + i;
	// 			$(v).css({"display":"none"})
	// 			i++;
	// 			v = ".cdr-" + i;
	// 			$(v).css({"display":"block"})

	// 		}
	// 	});

});
