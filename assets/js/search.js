function searchFunction() {
    var input = document.getElementById('myInput');
    var filter = input.value.toUpperCase();
    var articles = document.querySelectorAll('.articles');

    // Loop through all article sections
    for (var i = 0; i < articles.length; i++) {
        var ul = articles[i].querySelector('.searchable-ul');
        var li = ul.querySelectorAll('li');
        var hasVisibleItems = false;

        // Check each list item in this category
        for (var j = 0; j < li.length; j++) {
            var a = li[j].querySelector("a");
            if (filter === '' || a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[j].style.display = "block";
                hasVisibleItems = true;
            } else {
                li[j].style.display = "none";
            }
        }

        // Hide entire category if no matches (optional)
        articles[i].style.display = hasVisibleItems || filter === '' ? 'block' : 'none';
    }
}
