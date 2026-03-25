import Product from "./SalesSystem/Product";
import Client from "./SalesSystem/Client";
import Address from "./SalesSystem/Address";
import Phone from "./SalesSystem/Phone";
import Sales from "./SalesSystem/Sales";

// Criando endereço
const address = new Address("Rua A", 123, "Osasco", "SP");

// Criando telefones
const phone1 = new Phone("11", "99999-9999", "celular");
const phone2 = new Phone("11", "4002-8922", "fixo");

// Criando cliente
const client = new Client(
    "Cauã Monteiro",
    "123.456.789-00",
    "2000-01-01",
    "M",
    address,
    [phone1, phone2]
);

// Criando produtos
const product1 = new Product(1, "Notebook", 3000);
const product2 = new Product(2, "Mouse", 150);

// Criando venda
const sale = new Sales(
    1,
    "2026-03-22",
    client,
    [product1, product2]
);

// Testando
console.log("Cliente:", sale.client.name);
console.log("Cidade:", sale.client.address.city);
console.log("Total da venda:", sale.calculateTotal());