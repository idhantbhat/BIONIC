var elements = document.body.getElementsByTagName('*');


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (element.textContent.trim() !== '') {
        element.style.fontWeight = 'bold';
    }
}