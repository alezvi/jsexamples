$('.ellipsis', function () {
    // Get the limit defined by the user via data attribute
    var limit = $(this).data('ellipsis');

    // Get the inner content from the tag
    var text = $(this).innerHTML;

    // Perform the wrapping
    if (text.length > limit) {
        $(this).innerHTML = text.splice(0, limit) + '...';
    }
})
