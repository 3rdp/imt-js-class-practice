window.onload = function () {
    var linkAbout = window.document.getElementById('link-about'),
        linkContainer = window.document.getElementById('link-container');

    linkAbout.onclick = function (event) {
        event.preventDefault();
        // console.log (event.toElement.id);
        window.document.querySelector('#template-home').outerHTML = getTemplate(event.toElement.id);

    }

    linkContainer.onclick = function (event) {
        event.preventDefault();
        var templateName = event.target.attributes.href.value;
        if (templateName && templateName !== '#')
            window.document.querySelector('.ui.main.text.container').outerHTML = getTemplate(event.target.attributes.href.value);
    }
}

function getTemplate(name) {
    if (name == 'link-about' || name == '#about') {
        return '' +
            '<div class="ui main text container">' +
                '<h1 class="ui header">This page is about ' + localStorage.name + ' ' + localStorage.surname +  '.</h1>' +
                '<p>This is a basic fixed menu template using fixed size containers.</p>' +
                '<p>A text container is used for the main container, which is useful for single column layouts</p>' +
                '<img name="test-name" class="wireframe" src="http://semantic-ui.com/examples/assets/images/wireframe/media-paragraph.png">' +
                '<img class="wireframe" src="http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png">' +
            '</div>';
    }
}