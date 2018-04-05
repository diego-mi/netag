var TableContentInfo = {
  trSelected: "",
  btnSelected: "",
  toggle: function () {
    TableContentInfo.btnSelected = $(this);
    TableContentInfo.trSelected = TableContentInfo.btnSelected.parent().parent();

    TableContentInfo.isShowing() ?
      TableContentInfo.closeContent() :
      TableContentInfo.openContent();
  },
  isShowing: function () {
    return TableContentInfo.trSelected.data("showing-content");
  },
  openContent: function () {
    var targetContent = TableContentInfo.trSelected.data("content-class");

    $("." + targetContent).fadeIn();
    TableContentInfo.trSelected.data("showing-content", true);
  },
  closeContent: function () {
    var targetContent = TableContentInfo.trSelected.data("content-class");

    $("." + targetContent).fadeOut();
    TableContentInfo.trSelected.data("showing-content", false);
  }
}

$("body").on("click", ".td-first--btn", TableContentInfo.toggle);
