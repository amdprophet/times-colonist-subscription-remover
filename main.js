$(document).ready(function() {
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function(mutations, observer) {
	$('body').each(function() {
	    if ($(this).hasClass('tp-modal-open')) {
		console.log("found body with tp-modal-open")
		$(this).removeClass('tp-modal-open');
		$('div.tp-modal').each(function() {
		    $(this).remove();
		});
		$('div.tp-backdrop').each(function() {
		    $(this).remove();
		});
	    }
	});
    });

    observer.observe(document, {
	subtree: true,
	attributes: true
    });
});
