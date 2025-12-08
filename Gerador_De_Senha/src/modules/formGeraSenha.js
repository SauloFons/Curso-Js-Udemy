import geraSenha from "./geradores";

export default function formGeraSenha() {
    const senhaGerada = document.querySelector('.senha-gerada');
    const qtdCaracteres = document.querySelector('.qtd-caracteres');
    const chkMaiuscula = document.querySelector('.chk-maiuscula');
    const chkMinuscula = document.querySelector('.chk-minuscula');
    const chkNumero = document.querySelector('.chk-numero');
    const chkSimbolo = document.querySelector('.chk-simbolo');
    const btnGerarSenha = document.querySelector('.btn-gerar-senha');
    btnGerarSenha.addEventListener('click', () => {
        const senha = geraSenha(
            qtdCaracteres.value,
            chkMaiuscula.checked,
            chkMinuscula.checked,
            chkNumero.checked,
            chkSimbolo.checked
        );
        senhaGerada.innerHTML = senha || 'Nada Selecionado';
    });
};
