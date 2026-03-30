package com.wad.ecommerce.controller;

import com.wad.ecommerce.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    private static final List<Product> PRODUCTS = List.of(
        new Product(1L, "Car",    "Dacia Estafette",       1299.99, "http://localhost:8080/images/car.jpg"),
        new Product(2L, "Computer", "Felix PC",           199.99, "http://localhost:8080/images/pc.jpg"),
        new Product(3L, "Office", "Office Suite",    89.99,  "http://localhost:8080/images/office.jpg"),
        new Product(4L, "Windows",       "Windows XP",                   49.99, "http://localhost:8080/images/windows.jpg"),
        new Product(5L, "Cake",        "Traditional cake",          9.99,  "http://localhost:8080/images/cake.jpg")
   );

    // GET /api/cart/add?pid={id}  
    @GetMapping("/add")
    public ResponseEntity<Product> add(@RequestParam Long pid) {
        return PRODUCTS.stream()
            .filter(p -> p.getId().equals(pid))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
