
// Prompt is an input windows
var yourName = prompt('Your name is...')

// Confirm is a basic 'accept / cancel' window
var wantSeeAlert = confirm('Do you want see the alert message?')

// Alert is an output window
if (yourName != null && wantSeeAlert) {
    alert('Your name is ' + yourName)
}
