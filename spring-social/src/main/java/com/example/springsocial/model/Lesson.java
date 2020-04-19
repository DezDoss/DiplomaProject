package com.example.springsocial.model;

import javax.persistence.*;
import java.sql.Blob;

@Entity(name = "lesson")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "text")
    private String text;
    @Column(name = "example_desc")
    private String example_desc;
    @Column(name = "code_sample")
    private String codeSample;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getCodeSample() {
        return codeSample;
    }

    public void setCodeSample(String codeSample) {
        this.codeSample = codeSample;
    }

    public String getExample_desc() {
        return example_desc;
    }

    public void setExample_desc(String example_desc) {
        this.example_desc = example_desc;
    }


}
