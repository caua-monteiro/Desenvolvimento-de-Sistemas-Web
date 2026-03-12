package org.example.Model;

import com.google.gson.Gson;
import org.example.Util.HttpClientUtil;

public class CepService {
    Gson gson = new Gson();

    public Endereco BuscarCep(String cep){
        String URIViaCep = String.format("https://viacep.com.br/ws/%s/json/", cep);

        String EnderecoJson = HttpClientUtil.FazRequisicaoGET(URIViaCep);

        Endereco endereco = gson.fromJson(EnderecoJson, Endereco.class);

        return endereco;
    }
}
