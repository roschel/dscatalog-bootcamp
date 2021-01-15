package com.roschel.dscatalog.tests.repositories;

import com.roschel.dscatalog.entities.Product;
import com.roschel.dscatalog.repositories.ProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

// Carrega somente os componentes da JPA.
//Sem necessidade de carregar todo o contexto da aplicação.
@DataJpaTest
public class ProductRepositoryTests {

    @Autowired
    private ProductRepository repository;

    private long existingId;

    // BeforeEach - garante que antes de iniciar cada teste, os valores abaixo serão settados
    @BeforeEach
    void setUp() throws Exception{
        existingId = 1L;
    }

    @Test
    public void deleteShouldDeleteObjectWhenIdExists(){
        repository.deleteById(existingId);

        Optional<Product> result = repository.findById(existingId);

        Assertions.assertFalse(result.isPresent());
    }
}
