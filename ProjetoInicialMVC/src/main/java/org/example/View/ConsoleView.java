package org.example.View;

import org.example.Model.Endereco;

import java.util.Scanner;

public class ConsoleView {
    Scanner scanner = new Scanner(System.in);

    public String lerCep(){
        System.out.println("Insira seu CEP: ");
        String cep = scanner.next();
        while (!validaCep(cep)){
            System.out.println("CEP digitado invalido, insira novamente:");
            cep = scanner.next();
        }
        return cep;
    }
    public boolean validaCep(String Cep){
        String regex = "^\\d{2}\\.?\\d{3}-?\\d{3}$";

        return Cep.matches(regex);
    }

    public void ExibeEndereco(Endereco endereco){
        System.out.println(endereco.toString());
    }

    public void ExibeErro(){

    }
}
