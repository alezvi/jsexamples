
/**
 * This is a bad example because is "closed".
 * The function does not accept any custom argument.
 * It just works in one specific case, but in other cases will not.
 */
function count() {
    var limit = 140;
    var input = document.getElementById('text');
    var text = input.value;
    
    if (text.length > limit) {
        input.value = text.substring(0, limit);
    }
    
    return;
}


/**
 * This is better than previous, but is still "wrong".
 * In this example we use the 'id' attribute to identify the input.
 */
function count(limit = 140, id = 'text') {
    var input = document.getElementById(id)
    
    var text = input.value
    
    if (text.length > limit) {
        input.value = text.substring(0, limit);
    }
    
    return;
}

/**
 * This is example is the better way, because the input element
 * is given as argument on function calling from the HTML.
 */
function count(el, limit = 100) {
    var text = el.value;
    
    if (text.length > limit) {
        el.value = text.substring(0, limit);
    }
    
    return;
}

