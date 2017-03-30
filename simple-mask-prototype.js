String.prototype.mask = function (type) {
    var str = this;
    try {
        if (str) {

            if (type == 'cnpj' && str.length == 14) {
                return str.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
            }
            if (type == 'cpf' && str.length == 11) {
                return str.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
            }
            if (type == 'phone') {
                if (str.length == 11) {
                    return str.replace(/(\d{2})(\d{5})(\d{4})/g,"(\$1) \$2-\$3");
                } else {
                    return str.replace(/(\d{2})(\d{4})(\d{4})/g,"(\$1) \$2-\$3");
                }
            }
            if (type == 'cep') {
                return str.replace(/(\d{5})(\d{3})/g,"\$1-\$2");
            }
        }
        return str;
    } catch (err) {
        return str;
    }
}