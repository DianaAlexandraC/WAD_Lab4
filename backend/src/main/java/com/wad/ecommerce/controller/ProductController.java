package com.wad.ecommerce.controller;

import com.wad.ecommerce.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {


    private static final List<Product> PRODUCTS = List.of(
        new Product(1L, "Car",    "Dacia Estafette",       1299.99, "http://localhost:8080/images/car.jpg"),
        new Product(2L, "Computer", "Felix PC",           199.99, "http://localhost:8080/images/pc.jpg"),
        new Product(3L, "Office", "Office Suite",    89.99,  "http://localhost:8080/images/office.jpg"),
        new Product(4L, "Windows",       "Windows XP",                   49.99, "http://localhost:8080/images/windows.jpg"),
        new Product(5L, "Cake",        "Traditional cake",          9.99,  "http://localhost:8080/images/cake.jpg")
    );

    @GetMapping
    public List<Product> getAll() {
        return PRODUCTS;
    }
}
