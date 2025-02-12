class Usuario {
    constructor(nome, email, senha) {
        this.name = nome;
        this.email = email;
        this.senha = senha;
        this.assinatura = 0;
    }

    fazerLogin(email, senha) {
        if (email == this.email) {
            if (senha == this.senha) {

            }
            else {
                return "Login Invalido"
            }

        } else {
            return "Login Invalido"
        }
    }

    validarAssinatura() {

    }

    adicionarAssinatura(dias) {

    }
}

module.exports = Usuario;