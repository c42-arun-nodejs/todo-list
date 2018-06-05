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
    console.log("key pressed");
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");

        // create a new li and append it to ul
        $("ul").append("<li><span>X</span> " + todoText +"</li>");
    }
});