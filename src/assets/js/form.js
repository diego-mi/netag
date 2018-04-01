/*
 * Como usar a funcao 'Formulario Simplificado'
 *
 * utilize o checkbox simplificado ou outro com a classe, no checkbox, .checkbox-cadastro-simplificado
 * e
 * a classe .input-simplified na tag que contem os elementos que devem ser escondidos ou mostrados ao
 * alterar a forma de cadastro.
 *
 */
var CadastroSimplificado = {
  toggle: function () {
    CadastroSimplificado.isSimplified() ? CadastroSimplificado.setAsSimple() : CadastroSimplificado.setAsDefault();
  },
  isSimplified: function () {
    return !!$(".checkbox-cadastro-simplificado").is(":checked");
  },
  /* Show Functions */
  setAsSimple: function () {
    CadastroSimplificado.showInputs();
    CadastroSimplificado.setLayoutItens();
  },
  showInputs: function () {
    var inputSimplifiedContainer = $(".input-simplified");

    inputSimplifiedContainer.show();
    inputSimplifiedContainer.find('input').prop("disabled", false);
  },
  setLayoutItens: function () {
    $(".checkbox-cadastro-simplificado").parent().parent().addClass("form-is-simplified--active");
  },
  /* Hide Functions */
  setAsDefault: function () {
    CadastroSimplificado.hideInputs();
    CadastroSimplificado.removeLayoutItens();
  },
  hideInputs: function () {
    var inputSimplifiedContainer = $(".input-simplified");

    inputSimplifiedContainer.hide();
    inputSimplifiedContainer.find('input').prop("disabled", true);
  },
  removeLayoutItens: function () {
    $(".checkbox-cadastro-simplificado").parent().parent().removeClass("form-is-simplified--active");
  },
}

$("body").on("change", ".checkbox-cadastro-simplificado", CadastroSimplificado.toggle);
