package com.roschel.dscatalog.tests.repositories;

import com.roschel.dscatalog.entities.Product;
import com.roschel.dscatalog.repositories.ProductRepository;
import com.roschel.dscatalog.tests.factory.ProductFactory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

// Carrega somente os componentes da JPA.
//Sem necessidade de carregar todo o contexto da aplicação.
@DataJpaTest
public class ProductRepositoryTests {

    @Autowired
    private ProductRepository repository;

    private long existingId;
    private long nonExistingId;
    private long countTotalProducts;
    private long countPCGamerProducts;
    private Pageable pageable;

    // BeforeEach - garante que antes de iniciar cada teste, os valores abaixo serão settados
    @BeforeEach
    void setUp() throws Exception {
        existingId = 1L;
        nonExistingId = 7045L;
        countTotalProducts = 25L;
        countPCGamerProducts = 21L;
        pageable = PageRequest.of(0,10);
    }

    @Test
    public void findShouldReturnAllProductsWhenNameIsEmpty(){
        String name = "";

        Page<Product> result = repository.find(null, name, pageable);

        Assertions.assertFalse(result.isEmpty());
        Assertions.assertEquals(countTotalProducts, result.getTotalElements());
    }

    @Test
    public void findShouldReturnProductsWhenNameExistsIgnoreCase(){
        String name = "pc gAMeR";

        Page<Product> result = repository.find(null, name, pageable);

        Assertions.assertFalse(result.isEmpty());
        Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
    }

    @Test
    public void findShouldReturnProductsWhenNameExists(){
        String name = "PC Gamer";

        Page<Product> result = repository.find(null, name, pageable);

        Assertions.assertFalse(result.isEmpty());
        Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
    }

    @Test
    public void saveShouldPersistWithAutoIncrementWhenIdIsNull() {
        Product product = ProductFactory.createProduct();
        product.setId(null);

        product = repository.save(product);
        Optional<Product> result = repository.findById(product.getId());

        Assertions.assertNotNull(product.getId());
        Assertions.assertEquals(1L + countTotalProducts, product.getId());
        Assertions.assertTrue(result.isPresent());
        Assertions.assertSame(result.get(), product);
    }

    @Test
    public void deleteShouldDeleteObjectWhenIdExists() {
        repository.deleteById(existingId);

        Optional<Product> result = repository.findById(existingId);

        Assertions.assertFalse(result.isPresent());
    }

    @Test
    public void deleteShouldThrowEmptyResultDataAccessExceptionWhenIdDoesNotExists() {

        Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
            repository.deleteById(nonExistingId);
        });
    }
}
