
// The third part

let name = 'Gergo';

name + "'s apples";

console.log(name + "'s apples")
console.log("Hello wolrd!")

$('h1').text('JavaScript and DOM')
$('p').html('Stay at home coding camp, <strong>Likes: 13</strong>')

$('strong').css('background', 'lime');

let color = 'blue'

$('h2').toggleClass('color');  //on
$('h2').toggleClass('color');  //off

$('ul').append('<li>My name is ' + name + '</li>')
$('ul').append('<li>My name is ' + name + '</li>')

let addButtonHandler = () => {
    if ($('li').length < 5) {
        $('ul').append('<li>My name is ' + name + '</li>');
    }

};

$('#add-button').click(addButtonHandler);

$('#remove-button').click(() => {
    $('li:last-child').remove();
});

// This is the fourth part

let age = 13;

console.log('Starting the if');

if (age < 18) {
    console.log('Not old enough to drink vodka');
} else {
    console.log('Old enought to drink vodka');
}

console.log('This is after the if');

// this is a javascript comment


$('#like-button').click(() => {
    $('#like').text(Number($('#like').text())+ 1);
});

// like button

let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);

colors.push('purple');
colors.push('red');

colors.forEach((color) => {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

for (let i = 0; i < 100; i++) {
    console.log(i);
}