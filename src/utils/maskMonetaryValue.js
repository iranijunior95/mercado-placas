export function maskMonetaryValue(value, flag=false) {
    let input = value.replace(/\D/g, "");

    if (input > 9999999) return;

    const valorNumerico = Number(input) / 100;

    if (flag) {
        const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        return valorFormatado;
    }
    
    const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    .replace("R$", "")
    .trim();
    
    return valorFormatado;
}

