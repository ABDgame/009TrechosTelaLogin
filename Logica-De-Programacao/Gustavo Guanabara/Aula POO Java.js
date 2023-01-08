package aula02;




public class Aula02 {
   
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor="Azul";
        c1.ponta=0.5f;
        c1.modelo= "BIC";
        c1.carga = 100; 
        c1.status();
        c1.rabiscar();
        
        Caneta c2 = new Caneta();
        c2.cor="Vermelha";
        c2.ponta=0.5f;
        c2.modelo = "FaberCastell";
        c2.carga = 50;
        c2.status();
        c2.rabiscar();
        
      
    }
    
}


public class Caneta {
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    void status() {
        System.out.print ("Uma caneta " + this.cor);
        System.out.println ("Está tampada ? " + this.tampada);
        System.out.println ("Modelo " + this.modelo);
        System.out.println("A carga está " + this.carga);
        System.out.println("Ponta: " + this.ponta);
    
    }
    
    void rabiscar(){
        if (this.tampada==true){
        System.out.println ("ERRO! Não posso rabiscar");
        }else {
         System.out.println("Estou Rabiscando ") ;  
        }
    }
    
    void tampar() {
        this.tampada=false;
    }
    
    void destampar(){
        this.tampada=true;
    }
            
            
}
--------------------------------------------------------------------------------------------------------------
package aula05;
public class Aula02 {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.setNumConta(1111);
        p1.setDono("Jubileu");
        p1.abrirConta("CC");
        
        ContaBanco p2 = new ContaBanco();
        p2.setNumConta(2222);
        p2.setDono("Creuza");
        p2.abrirConta("CP");
        
        p1.depositar(100);
        p2.depositar(500);
        p2.sacar(100);
        
        p1.sacar(150);
        p1.fecharConta();
       
        
        
        p1.estadoAtual();
        p2.estadoAtual ();
        
    }
    
}


package aula02;
public class ContaBanco {
    // Atributos
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;
    public void estadoAtual(){
        System.out.println ("-----------------------------");
        System.out.println ("Conta: " +this.getNumConta());
        System.out.println("Tipo: " + this.getTipo());
        System.out.println("Dono: " + this.getDono());
        System.out.println("Saldo: " + this.getSaldo());
        System.out.println("Status: " + this.getStatus());
    }
    
    // Metodos Personalizados
    public void abrirConta(String t){
        this.setTipo(t);
        this.setStatus(true);
        if (t == "CC"){
          this.setSaldo(50);
        }else if (t == "CP"){
          this.setSaldo (150);
        }
        System.out.println("Conta aberta com sucesso !");
    }
    public void fecharConta(){
        if (this.getSaldo()> 0 ) {
      System.out.println ("Conta não pode ser fechada porque ainda tem dinheiro");
     } else if (this.getSaldo () < 0){
      System.out.println("Conta não pode ser fechada pois tem débito");
     } else{
        this.setStatus (false);
        System.out.println ("Conta fechada com sucesso!");
     }
   }
    public void depositar(float v){
        if (this.getStatus()){
            this.setSaldo(this.getSaldo()+v);
            System.out.println("Depósito realizado com sucesso na conta de " + this.getDono());
            } else {
            System.out.println ("Impossível depositar em uma conta fechada!");    
        }
    }
    public void sacar(float v){
        if (this.getStatus()){
            if (this.getSaldo()>=v){
                this.setSaldo(this.getSaldo() - v);
                System.out.println ("Saque realizado na conta de " +this.getDono());
        } else{
             System.out.println ("Saldo insuficiente para saque");
        }
         
        }else{
           System.out.println ("Impossível sacar de uma conta fechada!");
            
        }
    }
    public void pagarMensal(){
        int v = 0;
        if (this.getTipo() == "CC"){
            v = 12;
        }else if (this.getTipo() == "CP"){
            v = 20;
        }
        if (this.getStatus()){
            this.setSaldo(this.getSaldo() - v);
            System.out.println("Mensalidade para com sucesso por " + this.getDono());
        }else{
            System.out.println("Impossível pagar com uma conta fechada!");
        }
        
    }
    // Método Construtor
    public ContaBanco(){
        this.saldo =0;
        this.status=false;
    }
    // Métodos Especiais
    public int getNumConta(){
       return numConta;
    }
    public void setNumConta(int numConta ){
        this.numConta = numConta;
    }
     public String getTipo (){
       return tipo;
    }
     public void setTipo (String tipo){
      this.tipo = tipo;
     }
    public String getDono (){
     return dono;
     }
    public void setDono (String dono){
     this.dono = dono;
    }
    public float getSaldo (){
    return saldo;
    
    }
    public void setSaldo(float saldo){
    this.saldo = saldo;
    }
    public boolean getStatus (){
    return status;
    }
    public void setStatus(boolean status){
    this.status = status;
    }

    
}
--------------------------------------------------------------------------------------------------------------
package projetopessoas;
public class Aluno extends Pessoa {
   // Atributos 
    private int matricula;
    private String curso;
    // Métodos
    public void cancelMatric(){
       System.out.println (" Matrícula será cancelada");
        
    }
     // Métodos Especiais
    public int getMatric(){
       return matricula;
    }
    public void setMatric(int matricula ){
        this.matricula = matricula;
    }
     public String getCurso (){
       return curso;
    }
     public void setCurso (String curso){
       this.curso = curso;
     } 
}


package projetopessoas;
public class Funcionario extends Pessoa {
    // Atributos 
    private String setor;
    private boolean trabalhando;
    // Métodos
    public void mudarTrabalho(){
        this.trabalhando =! this.trabalhando;
    }
     // Métodos Especiais
    public String getSetor(){
       return setor;
    }
    public void setSetor(String setor ){
        this.setor = setor;
    }
     public boolean getTrabalhando (){
       return trabalhando;
    }
     public void setTrabalhando (boolean trabalhando){
       this.trabalhando = trabalhando;
     }
    
 
}

package projetopessoas;
public class Pessoa {
    // Atributos 
    private String nome;
    private int idade;
    private String genero;
    // Métodos
    public void fazerAniv(){
        this.idade ++;
    }
     // Métodos Especiais
    public String getNome(){
       return nome;
    }
    public void setNome(String nome ){
        this.nome = nome;
    }
     public int getIdade (){
       return idade;
    }
     public void setIdade (int idade){
       this.idade = idade;
     }
    public String getGenero (){
     return genero;
     }
    public void setGenero (String genero){
     this.genero = genero;
    }
    // ????
    @Override
    public String toString() {
        return "Pessoa{" + "nome=" + nome + ", idade=" + idade + ", genero=" + genero + '}';
    }

    
   
    
}


package projetopessoas;
public class Professor extends Pessoa {
    // Atributos 
    private String especialidade;
    private float salario;
    
    // Métodos
    public void recebAument(float aum){
        this.salario += aum;
        
    }
     // Métodos Especiais
    public String getEspecialidade(){
       return especialidade;
    }
    public void setEspecialidade(String especialidade ){
        this.especialidade = especialidade;
    }
     public float getSalario (){
       return salario;
    }
     public void setSalario (float salario){
       this.salario = salario;
     }
    
}

package projetopessoas;
public class ProjetoPessoas {
    public static void main(String[] args) {
        //Programa Principal
        Pessoa p1 = new Pessoa();
        Aluno p2 = new Aluno();
        Professor p3 = new Professor();
        Funcionario p4 = new Funcionario();
        
                
        p1.setNome("Alan");
        p2.setNome("Anaís");
        p3.setNome("André");
        p4.setNome("Nicole");
        
        p1.setIdade(20);
        p2.setIdade(21);
        p3.setIdade(22);
        p4.setIdade(23);
        
        p1.setGenero("M");
        p2.setGenero("F");
        p3.setGenero("M");
        p4.setGenero("F");
        
        p2.setCurso("Informática");
        p3.setSalario(2500.75f);
        p4.setSetor("Juridico");
        
        p3.recebAument(1000f);
        p4. mudarTrabalho();
        p2. cancelMatric();
        
        
        System.out.println (p1.toString());
        System.out.println (p2.toString());
        System.out.println (p3.toString());
        System.out.println (p4.toString());
                
        
        //p3.recebAumento(1000);
       // p4. mudarTrabalho();
        //p2. cancelMatri();
    }
}

--------------------------------------------------------------------------------------------------------------

package aula09;
public class Aula09 {
     public static void main(String[] args) {
        Pessoa[] p = new Pessoa [2];
        Livro[] l = new Livro [3];       
        
    }
    
}

package aula09;
public class Livro implements Publicacao{
    private String titulo;
    private String autor;
    private int totPaginas;
    private int pagAtual;
    private boolean aberto;
    private Pessoa leitor; 
    // Métodos Públicos

    public String detalhes() {
        return "Livro{" + "titulo=" + titulo + ", autor=" 
                + autor + ", totPaginas=" + totPaginas 
                + ", pagAtual=" + pagAtual + ", aberto=" 
                + aberto + ", leitor=" + leitor + '}';
    }
    
    // Métodos Especiais

    public Livro(String ti, String au, int to,  Pessoa leitor) {
        this.titulo = ti;
        this.autor = au;
        this.totPaginas = to;
        this.aberto = false;
        this.pagAtual = 0;
        this.leitor = leitor;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String ti) {
        this.titulo = ti;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String au) {
        this.autor = au;
    }

    public int getTotPaginas() {
        return totPaginas;
    }

    public void setTotPaginas(int to) {
        this.totPaginas = to;
    }

    public int getPagAtual() {
        return pagAtual;
    }

    public void setPagAtual(int pa) {
        this.pagAtual = pa;
    }

    public boolean getAberto() {
        return aberto;
    }

    public void setAberto(boolean ab) {
        this.aberto = ab;
    }

    public Pessoa getLeitor() {
        return leitor;
    }

    public void setLeitor(Pessoa leitor) {
        this.leitor = leitor;
    }
    @Override
    public void abrir(){
        this.aberto = true;
    
    }
    @Override
    public void avancarPag(){
       this.pagAtual ++;
    }

    @Override
    public void fechar(){
        this.aberto = false;
    
    }
    @Override
    public void folhear(int p){
       this.pagAtual = p ;
       
    
    }
    @Override
    public void voltarPag(){
        this.pagAtual --;
    
    }
    
    }


package aula04;
public class Pessoa {
    //Atributos (COISAS QUE EU TENHO)
    private String nome;
    private int idade;
    private String genero;
    private float altura;
    private String raca;
    private String nacionalidade;
    private String graudeescolaridade;
    private String profissao;
    private String estadocivil;

   
    //Métodos Publicos
    public void fazerAniver(){
     this.idade++;
    }
    //Métodos Especiais
    public void Livro(){
        
    
    }

    public Pessoa(String no, int id, String ge, float al, String ra, String na, String pr, String es) {
        this.nome = no;
        this.idade = id;
        this.genero = ge;
        this.altura = al;
        this.raca = ra;
        this.nacionalidade = na;
        this.profissao = pr;
        this.estadocivil = es;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String no) {
        this.nome = no;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int id) {
        this.idade = id;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String ge) {
        this.genero = ge;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float al) {
        this.altura = al;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String ra) {
        this.raca = ra;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String na) {
        this.nacionalidade = na;
    }

    public String getGraudeescolaridade() {
        return graudeescolaridade;
    }

    public void setGraudeescolaridade(String gr) {
        this.graudeescolaridade = gr;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String pr) {
        this.profissao = pr;
    }

    public String getEstadocivil() {
        return estadocivil;
    }

    public void setEstadocivil(String es) {
        this.estadocivil = es;
    }
    
}


/*
Métodos Abstratos
 */
package aula04;
public interface Publicacao {
    public abstract void abrir ();
    public abstract void fechar ();
    public abstract void folhear (int p);
    public abstract void avancarPag();
    public abstract void voltarPag ();
    
    
}

--------------------------------------------------------------------------------------------------------------
package aula05;
public class Aula05 {

    public static void main(String[] args) {
        Lutador l[] = new Lutador [6];
        l[0] = new Lutador ("Pretty Boy", " da França", 31, 1.75f, 68.9f, 11, 2, 1);
        
        l[1] = new Lutador ("Putscript", " do Brasil", 29, 1.68f, 57.8f, 14, 2 , 3);
        
        l[2] = new Lutador ("Snapshadow", "dos EUA", 35, 1.65f, 80.9f, 13, 0, 2);
        
        l[3] = new Lutador ("Dead Code", " da Austrália", 28, 1.93f, 81.6f, 13, 0, 2);
        
        l[4] = new Lutador ("UFOCobol", "do México", 37, 1.70f, 119.3f, 5, 4, 3);
        
        l[5] = new Lutador ("Nerdaart", "da Rússia", 30, 1.81f, 105.7f, 12, 2, 4);
        
        Luta UEC01 = new Luta();
        UEC01.marcarLuta(l[0], l[1]);
        UEC01.lutar();
        
    }
    
}

package aula07;

import java.util.Random;

public class Luta  {
// Atibutos (COISAS QUE TENHO) 
private Lutador desafiado; 
private Lutador desafiante;
private int rounds;
private boolean aprovada;  
// Métodos Públicos
public void marcarLuta(Lutador l1, Lutador l2){
    if (l1.getCategoria() .equals(l2.getCategoria())
            && l1 != l2){
       this.aprovada = true;
       this.desafiado = l1;
       this.desafiante = l2; 
    }else {
       this.aprovada = false;
       this.desafiado = null;
       this.desafiante = null;
   }
}       
    public void lutar(){
       if (this.aprovada){
           System.out.println ("### DESAFIADO ###");
           this.desafiado.apresentar();
           System.out.println ("### DESAFIANTE ###");
           this.desafiante.apresentar();
           
           Random aleatorio = new Random ();
           int vencedor = aleatorio.nextInt(3); // 0 1 2
           switch (vencedor) {
               case 0: // Empate
                   System.out.println ("Empatou ! ");
                   this.desafiado.empatarLuta(rounds);
                   this.desafiante.empatarLuta(rounds);
                  break;
               case 1: // Desafiado vence
                 System.out.println ("Vitória do " + this.desafiado.getNome ());
                  this.desafiado.ganharLuta(rounds);
                  this.desafiante.perderLuta(rounds);
                   break;            
               case 2: // Desafiante vence
                 System.out.println ("Vitória do " + this.desafiante.getNome());
                  this.desafiado.perderLuta(rounds);
                  this.desafiante.ganharLuta(rounds);
                  break;
           }
           
       } else {
       System.out.println("A luta não pode acontecer");
       
       
       
       }
    }
// Métodos Especiais
    
    public Lutador getDesafiado(){
        return desafiado;
    }
    public void setDesafiado(Lutador dd){
       this.desafiado = dd;
    }
    
    public Lutador getDesafiante(){
       return desafiante;
    }
    public void setDesafiante (Lutador dt){
       this.desafiante = dt;
    }
    
    public int getRounds() {
      return rounds;
    }
    public void setRounds(int ro){
      this.rounds = ro;
    }
    
    public boolean getAprovada(){
      return aprovada;
    }
    public void setAprovada(boolean ap){
      this.aprovada = ap;
    }
    
}


package aula07;
public class Lutador {
    // Atibutos (COISAS QUE TENHO)
    private String nome; 
    private String nacionalidade;
    private int idade;
    private float altura;
    private float peso;
    private String categoria;
    private int vitorias;
    private int derrotas;
    private int empates;
    // Métodos Públicos
    public void apresentar(){
         System.out.println ("---------------------------------");
         System.out.println ("CHEGOU A HORA! Apresentamos o  lutador " + this.getNome());
         System.out.println ("Diretamente  " + this.getNacionalidade());
         System.out.println ("com " + this.getIdade() + " anos e pesando " + this.getPeso() + " quilos");
         System.out.println ("Ele tem " + this.getVitorias() + " vitórias");
         System.out.println (this.getDerrotas() + " derrotas e ");
         System.out.println (this.getEmpates() + " empate (s)");
    }
    public void status(){
        System.out.println ("---------------------------------");
        System.out.println (this.getNome() + " é um peso " + this.getCategoria());
        System.out.println ("Ganhou " + this.getVitorias() + " vezes " );
        System.out.println ("Perdeu " + this.getDerrotas() + " vezes ");
        System.out.println ("Empatou " + this.getEmpates() + " veze " );
    }
    public void ganharLuta(int vi){
      this.setVitorias(this.getVitorias() + 1);
    }
    public void perderLuta(int de){
      this.setDerrotas(this.getDerrotas() + 1);
    }
    public void empatarLuta(int em){
      this.setEmpates(this.getEmpates() + 1);
    }
    
    // Métodos Especiais
    
    public Lutador(String no, String na, int id, float al, float pe, int vi, int de, int em){
        this.nome = no;
        this.nacionalidade = na;
        this.idade = id;
        this.altura = al;
        this.setPeso(pe);
        this.vitorias = vi;
        this.derrotas = de;
        this.empates = em;
     }

    public String getNome() {
        return nome;
    }
    public void setNome(String no) {
       this.nome = no;
    }
    
    
    
    public String getNacionalidade(){
       return nacionalidade;
    }
    public void setNacionalidade(String na){
       this.nacionalidade = na;
    }
    
    
    public int getIdade() {
      return idade;
    }
    public void setIdade( int id){
        this.idade = id;
    }
    
    
    
    public float getAltura() {
      return altura;
    }
    public void setAltura(float al) {
      this.altura = al;
      
    }
    
    
    public float getPeso() {
     return peso;
    }
    public void setPeso(float pe){
     this.peso = pe;
     this.setCategoria();
    }
    
    
    public String getCategoria(){
     return categoria;
    }
    private void setCategoria() {
        if (this.peso < 52.2) {
         this.categoria = "Inválido";
        }else if (this.peso <= 70.3){
         this.categoria = "Leve";
        }else if (this.peso <= 83.9){
         this.categoria = "Médio";   
        }else if (this.peso <=120.2){
         this.categoria = "Pesado";
        }else{
         this.categoria =  "Inválido";
        }
    }
    
     public int getVitorias () {
      return vitorias;
     } 
     public void setVitorias (int vi){
      this.vitorias = vi;
     } 
     
     
     
     public int getDerrotas () {
      return derrotas;
     } 
     public void setDerrotas (int de){
      this.derrotas = de;
     } 
     
     
     
     public int getEmpates () {
      return empates;
     } 
     public void setEmpates (int em){
      this.empates = em;
     } 

    
}   

--------------------------------------------------------------------------------------------------------------
package aula006;

/**
 *
 * @author debora
 */
public class Aluno extends Pessoa {
    //Atributos
    protected int matricula;

    /**
     *
     */
    protected String curso;
    //Métodos
    public  void pagarMensalidade(){
     System.out.println("Pagando mensalidade do aluno " + this.nome);
    }
    //Métodos Especiais
    public int getMatricula(){
     return matricula;
    }
    public void setMatricula(int matricula){
      this.matricula = matricula;
    }
    public String getCurso () {
     return curso;
    }
    public void setCurso (String curso){
     this.curso = curso;
    }
    
}

package aula006;


public class Aula006 {

    public static void main(String[] args) {
      Aluno a1 = new Aluno();
      a1.setNome ("Suellen");
      a1.setMatricula(20180101);
      a1.setCurso("Engenharia de Software");
      a1.setIdade(35);
      a1.setGenero("Feminino");
      System.out.println(a1.toString());
      a1.pagarMensalidade();
      
    }
    
}

package aula006;

public class Bolsista extends Aluno {
    private float bolsa;
    
    public void renovarBolsa() {
      System.out.println ("Renovando bolsa de " + this.nome);
    }
    //Sobreposição do pagarMensalidade, onde é especificado a diferença entre dois métodos com o mesmo nome mas com funções diferentes
    @Override
    public void pagarMensalidade(){
        System.out.println(this.nome + " é bolsista! Pagamento com desconto");
    }

    public float getBolsa() {
        return bolsa;
    }

    public void setBolsa(float bolsa) {
        this.bolsa = bolsa;
    }

    
}

package aula006;
public abstract class Pessoa {
   protected String nome;
   protected int idade;
   protected String genero;
   //Métodos
   public void fazerAniversario(){
        this.idade ++;
   }
   //Métodos Especiais
   public String getNome() {
      return nome;
   }
   public void setNome(String nome){
      this.nome = nome;
   }
   public int getIdade() {
     return idade;
   }
   public void setIdade (int idade){
     this.idade = idade;
   }
   public String getGenero(){
     return genero;
   }
   public void setGenero(String genero){
     this.genero = genero;
   }
    // toString
    @Override
    public String toString() {
        return "Pessoa{" + "nome=" + nome + ", idade=" + idade + ", genero=" + genero + '}';
    }
   
   
}

package aula006;

/**
 *
 * @author debora
 */
public class Professor extends Pessoa {
    // Atributos
    private String especialidade;
    private float salario;
    
    //Métodos
    public void receberAumento (float aumento) {
       this.salario += aumento;
    }
    //Métodos Especiais
    
    public String getEspecialidade (){
      return especialidade;
    }
    public void setEspecialidade(){
      this.especialidade = especialidade;
    }
    public float getSalario() {
        return salario;
    }
    public void setSalario (float salario){
      this.salario = salario;
    }
    
}

package aula006;

public final class Tecnico extends Aluno {
    private int registroProfissional;
    public void praticar() {
      System.out.println ("Exercendo a profissão de  " + this.nome);
    }

    public int getRegistroProfissional() {
        return registroProfissional;
    }

    public void setRegistroProfissional(int registroProfissional) {
        this.registroProfissional = registroProfissional;
    }
    
}

package aula006;
//Herança Pobre, não tem nenhum atributo
public class Visitante extends Pessoa {
    
}

--------------------------------------------------------------------------------------------------------------
package aula007;
public abstract class Animal {
    //Atributos de Animal
    protected float peso;
    protected int idade;
    protected int membros;
    //Métodos de Animal
    public abstract void locomover();
    public abstract void alimentar();
    public abstract void emitirSim();

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getMembros() {
        return membros;
    }

    public void setMembros(int membros) {
        this.membros = membros;
    }
    
}

package aula007;


public class Aula007 {

    public static void main(String[] args) {
        Mamifero m = new Mamifero();
        Réptil n = new Réptil();
        Peixe p = new Peixe ();
        Ave a = new Ave();
        
        m.setCorPelo("Marrom");
        m.locomover();
        m.alimentar();
        m.emitirSim();
        
        a.setCorPena("Vermelha");
        a.fazerNinho();
        a.locomover();
        a.emitirSim();
        
        n.alimentar();
        n.emitirSim();
        n.getCorEscama("Verde");
        n.getPeso("20.2f");
        
        
        
    }
    
}

package aula007;

public class Ave extends Animal {
private String corPena;

    @Override
    public void locomover() {
       System.out.println("Voando"); 
    }

    @Override
    public void alimentar() {
      System.out.println("Comendo frutas");
    }

    @Override
    public void emitirSim() {
        System.out.println("Som de Ave");
        
    }
    public void fazerNinho(){
        System.out.println("Construindo Ninho");
    }

    public String getCorPena() {
        return corPena;
    }

    public void setCorPena(String corPena) {
        this.corPena = corPena;
    }
    
}

package aula007;

public class Mamifero extends Animal {
    private String corPelo;
    @Override
    public void locomover() {
        System.out.println("Correndo");
    }

    @Override
    public void alimentar() {
        System.out.println("Mamando");
       
    }

    @Override
    public void emitirSim() {
        System.out.println("Som de Mamífero");
       
    }

    public String getCorPelo() {
        return corPelo;
    }

    public void setCorPelo(String corPelo) {
        this.corPelo = corPelo;
    }
    
}

package aula007;
public class Peixe extends Animal {
    private String corEscama;

    @Override
    public void locomover() {
        System.out.println("Nadando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo substâncias aquaticas");
    }

    @Override
    public void emitirSim() {
        System.out.println("Peixe não faz som");
        
    }
    public void soltarBolhas(){
        System.out.println("Soltou uma bolha");
    }

    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }
    
}

package aula007;
public class Réptil extends Animal {
    private String corEscama;

    @Override
    public void locomover() {
        System.out.println("Rastejando");
        
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo Vegetais");
        
    }

    @Override
    public void emitirSim() {
        System.out.println("som de Reptil");
        
    }

    public String getCorEscama() {
        return corEscama;
    }

    public void setCorEscama(String corEscama) {
        this.corEscama = corEscama;
    }

    void getCorEscama(String verde) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    void getPeso(String f) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
--------------------------------------------------------------------------------------------------------------


