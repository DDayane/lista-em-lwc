import { LightningElement } from "lwc";

export default class App extends LightningElement {
//Crie uma lista de objetos com valores
//relacionadas a personagens da disney
//Nome, desenho, Força , agilidade, inteligência, beleza
//Lista com 7 personagens
//Exibir os dados em Linhas.
//H1 -> Personagens da Disney
 disney = [
    {cod: 1, nome: "Moana", desenho:"Moana", forca:85, agilidade: 80, inteligencia: "Média", beleza: "Alta"},
    {cod: 2, nome: "Mulan", desenho:"Mulan", forca:55, agilidade:95, inteligencia:"Alta", beleza: "Alta"},
    {cod: 3, nome: "Anastasia", desenho:"Cinderela", força:15, agilidade:"baixa", inteligenci:"abaixa", beleza:"baixa"},
    {cod: 4, nome: "Elsa", desenho:"Frozen", forca:85, agilidade:"média", inteligencia:"Alta", beleza: "Alta"},
    {cod: 5, nome: "Rapunzel", desenho:"Enrolados", forca:90, agilidade:"Média", inteligencia:"Média", beleza: "Alta"},
    {cod: 6, nome: "Edna", desenho:"Os Incriveis ", forca:25, agilidade:"Alta", inteligencia:"Alta", beleza: "Baixa"},
    {cod: 7, nome: "Dayane", desenho:"As Maravilhas", forca:90, agilidade:"Alta", inteligencia:"Alta", beleza: "Altissima"},
  ];
  
}
