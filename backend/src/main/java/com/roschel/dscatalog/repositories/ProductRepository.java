package com.roschel.dscatalog.repositories;

import com.roschel.dscatalog.entities.Category;
import com.roschel.dscatalog.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // O ":category" na query referencia o category que está como parâmetro no find
    @Query("SELECT DISTINCT obj FROM Product obj INNER JOIN obj.categories cats WHERE " +
            "(:category IS NULL OR :category IN cats)")
    Page<Product> find(Category category, Pageable pageable);
}
