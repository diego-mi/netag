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
      return false;
    }

    event.preventDefault();

    if (navList.hasClass(HeaderClasses.headerNavListOpenedClass)) {
      $(HeaderClasses.headerClass).removeClass(HeaderClasses.headerSubmenuOpenedClass);
      navList.removeClass(HeaderClasses.headerNavListOpenedClass);
    } else {
      $(HeaderClasses.headerClass).addClass(HeaderClasses.headerSubmenuOpenedClass);
      navList.addClass(HeaderClasses.headerNavListOpenedClass);
    }
  }
};

$("body").on('click', '.header__nav__list__item', HeaderToggleSubmenu.toggleSubmenu);


/**
 * Submenu User functions
 */

var HeaderUserMenu = {
  toggle: function() {
    var submenu = $(".header__user-menu__submenu");

    submenu.hasClass("header__user-menu__submenu--opened")
      ? HeaderUserMenu.close(submenu)
      : HeaderUserMenu.open(submenu);
  },
  open: function (submenu) {
    HeaderUserMenu.transitionStarted(submenu);
    submenu.addClass("header__user-menu__submenu--opened");
  },
  transitionStarted: function (submenu) {
    submenu.addClass("header__user-menu__submenu--opening");
    setTimeout(function() {
      submenu.removeClass("header__user-menu__submenu--opening");
    }, 300);
  },
  close: function (submenu) {
    HeaderUserMenu.transitionStarted(submenu);
    submenu.removeClass("header__user-menu__submenu--opened");
  },
};

$("body").on('click', '.header__user-menu', HeaderUserMenu.toggle);

