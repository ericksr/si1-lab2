$(document).ready(function() {
    var data = new Date();
    var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    var dias = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");

    var dia = data.getDay();
    var dian = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    function proxSemana() {
        while (dia != 1) {
            proxDia();
        }
    }

    function proxFimSemana() {
        while(dia != 0) {
            proxDia();
        }
    }

    function proxDia() {
        dia++;
        if (dia > 6) {
            dia = 0;
        }
        dian++;
        if (meses[mes] == "Janeiro" || meses[mes] == "Março" || meses[mes] == "Maio" || meses[mes] == "Julho" || meses[mes] == "Agosto" || meses[mes] == "Outubro" || meses[mes] == "Dezembro") {
            if (dian > 31) {
                dian = 1;
                mes++;
                if (mes > 11) {
                    mes = 0;
                    ano++;
                }
            }
        } else if (meses[mes] == "Abril" || meses[mes] == "Junho" || meses[mes] == "Setembro" || meses[mes] == "Novembro") {
            if (dian > 30) {
                dian = 1;
                mes++;
            }

        } else {
            if (dian > 28) {
                dian = 1;
                mes++;
            }
        }

    }

    proxDia();
    proxSemana();
    var semana = dian + " de " + meses[mes];
    proxFimSemana();
    semana += " - " + dian + " de " + meses[mes];
    $('#titulo').append($('<h4/>').text(semana));
    proxDia();
    proxSemana();
    var semana = dian + " de " + meses[mes];
    proxFimSemana();
    semana += " - " + dian + " de " + meses[mes];
    $('#titulo2').append($('<h4/>').text(semana));
    proxDia();
    proxSemana();
    var semana = dian + " de " + meses[mes];
    proxFimSemana();
    semana += " - " + dian + " de " + meses[mes];
    $('#titulo3').append($('<h4/>').text(semana));
    proxDia();
    proxSemana();
    var semana = dian + " de " + meses[mes];
    proxFimSemana();
    semana += " - " + dian + " de " + meses[mes];
    $('#titulo4').append($('<h4/>').text(semana));
    proxDia();
    proxSemana();
    var semana = dian + " de " + meses[mes];
    proxFimSemana();
    semana += " - " + dian + " de " + meses[mes];
    $('#titulo5').append($('<h4/>').text(semana));
    proxDia();
    proxSemana();
    var semana = dian + " de " + meses[mes];
    proxFimSemana();
    semana += " - " + dian + " de " + meses[mes];
    $('#titulo6').append($('<h4/>').text(semana));

});