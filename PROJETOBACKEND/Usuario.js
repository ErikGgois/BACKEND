class Usuario {
    constructor(nome, email, senha) {
        this.Datas = new (require("./Datas.js"))()
        this.name = nome;
        this.email = email;
        this.senha = senha;
        this.assinatura = this.Datas.dataAtual();
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
        return this.Datas.diferencaDias(this.assinatura);

    }

    adicionarAssinatura(dias) {
        return this.Datas.adicionarDias(this.assinatura,dias);
    }
}

module.exports = Usuario;