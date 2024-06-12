
      var texto = "Enviado com sucesso"
      function alertarBotao(btn){
        alert(btn.value);
      }

      function mensagemDoDia(btn){
        document.getElementById("diaSemana").innerHTML = diaSemana;
        let mensagem;
        
        switch(diaSemana){
            case 1:
                mensagem = "segundou";
                break;
            case 2:
                mensagem = "terça";
                break;
            case 3:
                mensagem = "as quartas usamos rosa";
                break;
            case 4:
                mensagem = "quinta";
            case 5:
                mensagem = "graças a Deus é sexta-feita ein";
            case 6:
                mensagem = "sabadou";
                break
            case 7:
                mensagem = "domingo in fuego";
                break;
            default:
                mensagem = "sai fora fio";
        }
        alert(btn.mensagem);
        
      }
