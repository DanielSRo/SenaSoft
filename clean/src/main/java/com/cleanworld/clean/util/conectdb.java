package com.cleanworld.clean.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conectdb {
    private static String url = "jdbc:mysql://localhost:3306/reciclajecontinuo?serverTimezone=America/Bogota";
    private static String username = "root";
    private static String password = "123456";

    public static Connection connect() {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Conexión exitosa");
        } catch (SQLException e) {
            System.out.println("Error de conexión: " + e.getMessage());
        }
        return connection;
    }
}
