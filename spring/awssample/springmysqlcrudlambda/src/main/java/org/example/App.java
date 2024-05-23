package org.example;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
public class App implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    private static final String DB_URL = "jdbc:mysql://mydb.clqqzkpathi6.us-east-1.rds.amazonaws.com/mydb";
    private static final String DB_USER = "admin";
    private static final String DB_PASSWORD = "password";

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        String httpMethod = request.getHttpMethod();
        String userId = request.getPathParameters().get("userId");
   //     String userName = request.getQueryStringParameters().get("userName"); // Assuming userName is passed as a query parameter

        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
        switch (httpMethod) {
                case "GET":
                    return readUserData(userId, connection);
                case "POST":
                    String userData = request.getBody();
                    return createUserData(userId, request.getQueryStringParameters().get("userName"), userData, connection);
                case "PUT":
                    userData = request.getBody();
                    return updateUserData(userId, request.getQueryStringParameters().get("userName"), userData, connection);
                case "DELETE":
                    return deleteUserData(userId, connection);
                default:
                    return buildResponse(400, "Invalid HTTP method");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return buildResponse(500, "Internal Server Error");
        }
    }

    private APIGatewayProxyResponseEvent readUserData(String userId, Connection connection) throws SQLException {
        String sql = "SELECT user_data, user_name FROM user_data WHERE user_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, userId);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                String userData = resultSet.getString("user_data");
                String userName = resultSet.getString("user_name");

                Map<String, String> responseData = new HashMap<>();
                responseData.put("userData", userData);
                responseData.put("userName", userName);

                return buildResponse(200, responseData);
            } else {
                return buildResponse(404, "User data not found");
            }
        }
    }

    private APIGatewayProxyResponseEvent createUserData(String userId, String userName, String userData, Connection connection)
            throws SQLException {
        String sql = "INSERT INTO user_data (user_id, user_name, user_data) VALUES (?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, userId);
            statement.setString(2, userName);
            statement.setString(3, userData);
            statement.executeUpdate();
        }
        return buildResponse(200, "User data created successfully");
    }

    private APIGatewayProxyResponseEvent updateUserData(String userId, String userName, String userData, Connection connection)
            throws SQLException {
        String sql = "UPDATE user_data SET user_name = ?, user_data = ? WHERE user_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, userName);
            statement.setString(2, userData);
            statement.setString(3, userId);
            int rowsAffected = statement.executeUpdate();

            if (rowsAffected > 0) {
                return buildResponse(200, "User data updated successfully");
            } else {
                return buildResponse(404, "User data not found");
            }
        }
    }

    private APIGatewayProxyResponseEvent deleteUserData(String userId, Connection connection) throws SQLException {
        String sql = "DELETE FROM user_data WHERE user_id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, userId);
            int rowsAffected = statement.executeUpdate();

            if (rowsAffected > 0) {
                return buildResponse(200, "User data deleted successfully");
            } else {
                return buildResponse(404, "User data not found");
            }
        }
    }

    private APIGatewayProxyResponseEvent buildResponse(int statusCode, Object body) {
        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
        response.setStatusCode(statusCode);
        response.setBody(body.toString());
        return response;
    }
}

/*
{
  "httpMethod": "POST",
  "pathParameters": {
    "userId": "124"
  },
  "queryStringParameters": {
    "userName": "JohnDoe"
  },
  "body": "Sample user data"
}



{
  "httpMethod": "GET",
  "pathParameters": {
    "userId": "124"
  }
}


{
  "httpMethod": "PUT",
  "pathParameters": {
    "userId": "124"
  },
  "body": "Updated user data",
  "queryStringParameters": {
    "userName": "UpdatedJohnDoe"
  }
}



{
  "httpMethod": "DELETE",
  "pathParameters": {
    "userId": "124"
  }
}

use mysqldb
create table user_data (user_id varchar(30) primary key, user_name varchar(30), user_data varchar(100));


 */