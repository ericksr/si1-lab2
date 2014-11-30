package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Erick on 20/11/2014.
 */

@Entity
public class Meta {

    @Id
    @GeneratedValue
    private Long id;
    private String nome;
    private String descricao;
    private String prioridade;
    private String prazo;
    private String status;

    public Meta(String nome, String descricao, String prioridade, String prazo) {
        this.nome = nome;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.prazo = prazo;
        this.status = "Em processo";
    }

    public Meta() {
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getPrioridade() {
        return prioridade;
    }

    public String getPrazo() {
        return prazo;
    }

}

