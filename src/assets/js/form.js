var CadastroSimplificado = {
  toggle: function () {
    console.info(CadastroSimplificado.isSimplified());
    CadastroSimplificado.isSimplified() ? CadastroSimplificado.setAsSimple() : CadastroSimplificado.setAsDefault();
  },
  isSimplified: function () {
    return !!$(".checkbox-cadastro-simplificado").is(":checked");
  },
  setAsSimple: function () {
    console.info('setAsSimple');
    console.info($(".input-simplified").length);
    $(".input-simplified").show();
  },
  setAsDefault: function () {
    console.info('setAsDefault');
    console.info($(".input-simplified").length);
    $(".input-simplified").hide();
  }
}

$("body").on("change", ".checkbox-cadastro-simplificado", CadastroSimplificado.toggle);
