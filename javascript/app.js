window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menutoggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');

}

$('.boxx').slice(0, 3).show()
$('.btn1').on("click", function() {
    $(".boxx:hidden").slice(0, 2).slideDown()
    if ($(".boxx:hidden").length == 0) {
        $(".btn1").fadeOut('slow')
    }
})