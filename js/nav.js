var index = 0;
$(document).ready(function() {
    $(".hexIn").each(function() {
        $(this).delay(index*100).fadeIn(2000);
        index++;   
    });
});