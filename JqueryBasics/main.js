$(document).ready(function() {
    
    $('#addButton').click(function() {
        let text = $('#inputText').val().trim();

        if (text.length > 0) {
            let words = text.split(/\s+/);

            words.forEach(function(word) {
                $('#list').append('<li>' + word + '</li>');
            });

            $('#inputText').val('');
        } else {
            alert('Please enter some text!');
        }
    });
});
