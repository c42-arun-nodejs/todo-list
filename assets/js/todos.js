// check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });

    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");

        // create a new li and append it to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");
    }
});

$(".fa-edit").click(function() {
    $("input[type='text']").fadeToggle();
});