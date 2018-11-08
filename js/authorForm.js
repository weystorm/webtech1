$(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: "post",
            url: "addAuthor",
            data: $("form").serialize(),
            success: function () {
                openAuthors();
            }
            error: function () {
                alert("oops");
            }
        })
    })
});