var elemLocators = [
    '#jpampsuperheader',
    'div.hide-accept-button',
    'section.zn--idx-6',
    'section.zn--idx-10',
    'section.zn--idx-5',
    'section.zn--idx-7',
    'section.zn--idx-8',
    'section.zn--idx-9'
];

for (var i = 0; i < elemLocators.length; i++) {
    var elem = document.querySelector(elemLocators[i]);
    if (elem !== null) {
        elem.scrollIntoView(true);
        elem.parentNode.removeChild(elem);
    }
}

jQuery('${1st headline}').prepend(
    '<li id="haha" onclick="alert(\'${haha msg}\'); document.location=\'${nexial url}\';" ' +
    'style="${haha style}">' +
    '${nexial title}' +
    '</li>'
);
