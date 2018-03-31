var TableContentInfo = {
  trSelected: "",
  btnSelected: "",
  toggle: function () {
    TableContentInfo.btnSelected = $(this);
    TableContentInfo.trSelected = TableContentInfo.btnSelected.parent().parent();

    // console.info(TableContentInfo.btnSelected);

    // console.info(TableContentInfo.trSelected);


    TableContentInfo.isShowing() ?
      TableContentInfo.closeContent() :
      TableContentInfo.openContent();

  },
  isShowing: function () {
    console.log(TableContentInfo.trSelected.data("showing-content"));

    return TableContentInfo.trSelected.data("showing-content");
  },
  openContent: function () {
    console.info(TableContentInfo.trSelected);

    var targetContent = TableContentInfo.trSelected.data("content-class");

    // console.info(targetContent);
    console.info($("." + targetContent));



    $("." + targetContent).fadeIn();
    TableContentInfo.trSelected.data("showing-content", true);
  },
  closeContent: function () {
    var targetContent = TableContentInfo.trSelected.data("content-class");
    console.info(targetContent);
    console.info($("." + targetContent));

    $("." + targetContent).fadeOut();
    TableContentInfo.trSelected.data("showing-content", false);
  }
}

$("body").on("click", ".td-first--btn", TableContentInfo.toggle);
