package com.ssharma.cooltasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssharma.cooltasks.models.Task;


public interface TaskRepository extends JpaRepository<Task, Long> {
}
