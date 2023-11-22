jQuery.ajax({
    url: actUrl,
    type: 'post',
    dataType: 'html',
    data: form.serialize()
    success: function(data) {
        //form.html(data);
        //form.css('opacity','1');
        form.find('.status').html(Форма отправлена)
    }
})

