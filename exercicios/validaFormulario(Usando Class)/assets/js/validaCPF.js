class ValidaCPF {
    static ValidarCPF(CPF) {
           let CPFLimpo = CPF.replace(/\D+/g, '');

           const CPFparcial = CPFLimpo.slice(0, -2);

           function Valida() {
            if(typeof CPFLimpo === 'undefined') return false;
            if(CPFLimpo.length !== 11) return false;

            function isSequencia() {
                const sequencia =  CPFLimpo[0].repeat(CPFLimpo.lengt);
                return sequencia === CPFLimpo;
            }

            if(isSequencia()) return false;
           };

           const digito1 = criaDigito(CPFparcial);

           function criaDigito(CPFparcial) {
            const CPFArray = Array.from(CPFparcial);

            let regressivo = CPFArray.length + 1;
            const total = CPFArray.reduce((ac, val) => {
             ac += (regressivo * Number(val));
            regressivo--;
            return ac;
                }, 0);

            const digito = 11 - (total % 11);
            return digito > 9 ? '0' : String(digito);
           };

           const digito2 = criaDigito(CPFparcial + digito1);

           const novoCpf = CPFparcial + digito1 + digito2;
            return novoCpf === CPFLimpo;
    }
}
