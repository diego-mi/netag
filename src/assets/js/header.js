/**
 * Funcoes para funcionalidade relacionada ao Header e seus dependentes
 */

var HeaderClasses = {
  headerClass: 'header',
  headerSubmenuOpenedClass: 'header--submenu-opened',
  headerNavListClass: 'header__nav__list',
  headerNavListOpenedClass: 'header__nav__list--submenu-opened'
};

var HeaderToggleSubmenu = {
  toggleSubmenu: function (event) {
    event.preventDefault();

    if ($(this).parent().hasClass(HeaderClasses.headerNavListOpenedClass)) {
      HeaderCloseSubmenu.closeHeaderSubmenu($(this));
    } else {
      HeaderOpenSubmenu.openHeaderSubmenu($(this));
    }
  }
};


var HeaderOpenSubmenu = {
  headerNavListToOpen: '',
  openHeaderSubmenu: function (headerNavListItemClicked) {
    event.preventDefault();

    HeaderOpenSubmenu.addClassSubmenuOpenedToHeader();
    HeaderOpenSubmenu.addClassSubmenuOpenedToHeaderNavList(headerNavListItemClicked);
  },
  addClassSubmenuOpenedToHeader: function () {
    $('.' + HeaderClasses.headerClass).addClass(HeaderClasses.headerSubmenuOpenedClass);
  },
  addClassSubmenuOpenedToHeaderNavList: function (headerNavListItemClicked) {
    headerNavListItemClicked.parent().addClass(HeaderClasses.headerNavListOpenedClass);
  }
};

var HeaderCloseSubmenu = {
  headerNavListToClose: '',
  closeHeaderSubmenu: function (headerNavListItemClicked) {

    HeaderCloseSubmenu.removeClassSubmenuOpenedToHeader();
    HeaderCloseSubmenu.removeClassSubmenuOpenedToHeaderNavList(headerNavListItemClicked);
  },
  removeClassSubmenuOpenedToHeader: function () {
    console.info(HeaderClasses.headerClass);
    $('.' + HeaderClasses.headerClass).removeClass(HeaderClasses.headerSubmenuOpenedClass);
  },
  removeClassSubmenuOpenedToHeaderNavList: function (headerNavListItemClicked) {
    headerNavListItemClicked.parent().removeClass(HeaderClasses.headerNavListOpenedClass);
  }
};

$('.header__nav__list__item').on('click', HeaderToggleSubmenu.toggleSubmenu);
