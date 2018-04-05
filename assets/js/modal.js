var Modal = {
    getTargetId: function (elementClicked) {
        return "#" + $(elementClicked).data('modal-id');
    },
    open: function () {
        var targetId = Modal.getTargetId(this);

        $(targetId).addClass("modal--opened");
    },
    close: function () {
        var targetId = Modal.getTargetId(this);

        $(targetId).removeClass("modal--opened");
    },
    openById: function (targetId) {
        console.log(targetId);
        $("#" + targetId).addClass("modal--opened");
    },
    closeById: function (targetId) {
        console.log(targetId);
        $("#" + targetId).removeClass("modal--opened");
    }
}

var ModalCloseOpen = {
    toggle: function() {
        console.log('a');
        Modal.closeById($(this).data('modal-id-close'));
        Modal.openById($(this).data('modal-id-open'));
    }
}

$('body').on('click', '.open-modal', Modal.open);
$('body').on('click', '.close-modal', Modal.close);
$('body').on('click', '.close-open-modal', ModalCloseOpen.toggle);
