$(document).ready(function () {
    $("#content").load("lorem.html");

    $.each($(".menuButton"), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();
            if (($(this).find("a").attr("href")) != "index.html") {
                $("#content").load($(this).find("a").attr("href"));

            }
            else {
                open("index.html", "_self");
            }

        })
    })
});

function openAuthors() {
    $.getJSON('authors', function (data) {
        var table = $('<table id="authorsTable"></table>');
        table.append("<tr><th>Name</th><th>Nationality</th><th>Birth Date</th></tr>");

        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td id="authorId" onclick="openBooks(' + "'" + value.name + "'" + ')">' + value.name + '</td>');
            var nationCell = $('<td>' + value.nationality + '</td>');
            var birthDateCell = $('<td>' + value.birthDate + '</td>');
            row.append(nameCell);
            row.append(nationCell);
            row.append(birthDateCell);
            table.append(row);
        });

        $("#content").append(table);
    })
}

function openBooks(author) {
    document.cookie = "name="+author;
    $.getJSON("author", function () {
        alert(data[0].value.name);
    })
}