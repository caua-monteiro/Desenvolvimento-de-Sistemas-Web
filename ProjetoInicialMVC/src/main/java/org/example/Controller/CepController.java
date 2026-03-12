package org.example.Controller;

import org.example.Model.CepService;
import org.example.Model.Endereco;
import org.example.View.ConsoleView;

public class CepController {
    ConsoleView View = new ConsoleView();
    CepService service = new CepService();

    public void run(){
        String cep = View.lerCep();
        Endereco endereco = service.BuscarCep(cep);
        View.ExibeEndereco(endereco);
    }
}
