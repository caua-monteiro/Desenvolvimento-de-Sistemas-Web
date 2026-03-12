package org.example.Model;

public class Endereco {
    String cep;
    String logradouro;
    String bairro;
    String localidade;
    String estado;
    String regiao;
    String ddd;

    public String getCep(){
        return cep;
    }

    public void setCep(String cep){
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getLocalidade() {
        return localidade;
    }

    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getRegiao() {
        return regiao;
    }

    public void setRegiao(String regiao) {
        this.regiao = regiao;
    }

    public String getDdd() {
        return ddd;
    }

    public void setDdd(String ddd) {
        this.ddd = ddd;
    }

    public String toString(){
        return  "CEP: " + getCep() + "\n" +
                "Logradouro: " + getLogradouro() + "\n" +
                "Bairro: " + getBairro() + "\n" +
                "Cidade: " + getLocalidade() + "\n" +
                "UF: " + getEstado() + "\n" +
                "Regiao: " + getRegiao() + "\n" +
                "DDD: " + getDdd() + "\n";
    }
}
