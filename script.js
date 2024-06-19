$(document).ready(function() {
  // Ініціалізуємо слайдер відгуків
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Додаємо обробник подій для зміни класу активного меню при кліку на переключатель
  $('#menu-toggle-checkbox').change(function() {
    var menu = $('.menu');
    if ($(this).is(':checked')) {
      menu.addClass('active');
    } else {
      menu.removeClass('active');
    }
  });

  // Обробник події для закриття меню при кліку на пункт меню
  $('.menu a').on('click', function() {
    $('.menu').removeClass('active'); // Видаляємо клас 'active' з меню
    $('#menu-toggle-checkbox').prop('checked', false); // Вимикаємо чекбокс (якщо потрібно)
  });
});
