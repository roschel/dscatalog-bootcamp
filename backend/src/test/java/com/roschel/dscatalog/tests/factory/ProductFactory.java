package com.roschel.dscatalog.tests.factory;

import com.roschel.dscatalog.dto.ProductDTO;
import com.roschel.dscatalog.entities.Category;
import com.roschel.dscatalog.entities.Product;

import java.time.Instant;

public class ProductFactory {
    public static Product createProduct(){
        Product product =  new Product(
                1L,
                "Phone",
                "Good Phone",
                800.0,
                "https://img.com/img;png",
                Instant.parse("2021-01-20T03:00:00Z")
        );

        product.getCategories().add(new Category(1L,null));

        return product;
    }

    public static ProductDTO createproductDTO(){
        Product product = createProduct();

        return new ProductDTO(product, product.getCategories());
    }
    
    public static ProductDTO createproductDTO(Long id){
        ProductDTO dto = createproductDTO();
        dto.setId(id);
        return dto;
    }
}
