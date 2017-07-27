
/**
 * Wrapper function to check if the given value is a number
 * 
 */
function isNumber(n) 
{
    return n.length > 0 && ! isNaN(n);
}

/**
 * Check if the given value is a positive number
 * 
 */
function isPositive(n) 
{
    return n.isNumber(n) && n > -1;
}

/**
 * Check if the given value is a negative number
 * 
 */
function isNegative(n) 
{
    return n.isNumber(n) && n < 0;
}

/**
 * Check if the given value is an odd number
 * 
 */
function isOdd(n) 
{
    return n.isNumber(n) && n%2 != 0;
}

/**
 * Check if the given value is an even number
 * 
 */
function isEven(n) 
{
    return n.isNumber(n) && n%2 == 0;
}
