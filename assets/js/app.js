$(function() {
    $('form').submit(function(e){
        e.preventDefault();
        var formData = $(this).serialize();
        var formMessages = $('#formMessages');

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData
        })
        .done(function(response) {
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('[name=text]').val('');
            $('[name=email]').val('');
            $('[name=message]').val('');
        })
        .fail(function(data) {
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });
});



