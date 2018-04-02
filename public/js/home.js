$(document).ready(function(){
    
    $('#favorite').on('submit', function(e){
        e.preventDefault();
        
        var id = $('#id').val();
        var placeName = $('#place_Name').val();

        $.ajax({
            url: '/home',
            type: 'POST',
            data: {
                id: id,
                placeName: placeName
            },
            success: function(){
                //console.log(placeName);
            }
        })
        
    });
});