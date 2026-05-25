function validarMensagem(msg) {
    if (!msg || msg.trim() === "") {
        return false;
    }

    return true;
}

module.exports = validarMensagem;