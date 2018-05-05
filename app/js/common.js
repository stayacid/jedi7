$(function () {
   $("#my-menu").mmenu({
       extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
       navbar: {
           title: '<img src="img/logo-1.svg" alt="Салон красоты S&Mitler">'
       },
       offCanvas: {
           position: 'right'
       }
   });
    var apiMenu = $("#my-menu").data('mmenu');
    apiMenu.bind('opened', function() {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function() {
        $('.hamburger').removeClass('is-active');
    });
});