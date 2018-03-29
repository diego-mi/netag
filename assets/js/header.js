/**
 * Funcoes para funcionalidade relacionada ao Header e seus dependentes
 */

var HeaderClasses = {
  headerClass: '.header',
  headerSubmenuOpenedClass: 'header--submenu-opened',
  headerNavListOpenedClass: 'header__nav__list--submenu-opened',
  headerNavListNoSubmenuClass: 'header__nav__list--no-submenu'
};

var HeaderToggleSubmenu = {
  toggleSubmenu: function (event) {
    var navList = $(this).parent();

    if (navList.hasClass(HeaderClasses.headerNavListNoSubmenuClass)) {
      console.log('no-submenu');
      return false;
    }

    event.preventDefault();
    console.log('submenu');

    if (navList.hasClass(HeaderClasses.headerNavListOpenedClass)) {
      $(HeaderClasses.headerClass).removeClass(HeaderClasses.headerSubmenuOpenedClass);
      navList.removeClass(HeaderClasses.headerNavListOpenedClass);
    } else {
      $(HeaderClasses.headerClass).addClass(HeaderClasses.headerSubmenuOpenedClass);
      navList.addClass(HeaderClasses.headerNavListOpenedClass);
    }
  }
};


$('.header__nav__list__item').on('click', HeaderToggleSubmenu.toggleSubmenu);
