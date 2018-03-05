/**
 * Funcoes para funcionalidade relacionada ao Header e seus dependentes
 */

var HeaderClasses = {
  headerClass: '.header',
  headerSubmenuOpenedClass: 'header--submenu-opened',
  headerNavListOpenedClass: 'header__nav__list--submenu-opened'
};

var HeaderToggleSubmenu = {
  toggleSubmenu: function (event) {
    event.preventDefault();

    if ($(this).parent().hasClass(HeaderClasses.headerNavListOpenedClass)) {
      $(HeaderClasses.headerClass).removeClass(HeaderClasses.headerSubmenuOpenedClass);
      $(this).parent().removeClass(HeaderClasses.headerNavListOpenedClass);
    } else {
      $(HeaderClasses.headerClass).addClass(HeaderClasses.headerSubmenuOpenedClass);
      $(this).parent().addClass(HeaderClasses.headerNavListOpenedClass);
    }
  }
};


$('.header__nav__list__item').on('click', HeaderToggleSubmenu.toggleSubmenu);
