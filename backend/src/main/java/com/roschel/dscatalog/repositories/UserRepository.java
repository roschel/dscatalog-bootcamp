package com.roschel.dscatalog.repositories;

import com.roschel.dscatalog.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    //método para acessar o banco buscando por e-mail
    User findByEmail(String email);
}
