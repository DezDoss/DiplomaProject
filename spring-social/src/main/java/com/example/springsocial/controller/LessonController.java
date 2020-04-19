package com.example.springsocial.controller;

import com.example.springsocial.model.Lesson;
import com.example.springsocial.repository.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lesson")
public class LessonController {

    @Autowired
    private LessonRepository lessonRepository;

    @GetMapping("get")
    public List<Lesson> getAllLesson() {

        return lessonRepository.findAll();
    }

    @PostMapping("save")
        public String saveLesson(@RequestBody Lesson lesson) {

            lessonRepository.save(lesson);
        return "Lesson saved";
    }

}
