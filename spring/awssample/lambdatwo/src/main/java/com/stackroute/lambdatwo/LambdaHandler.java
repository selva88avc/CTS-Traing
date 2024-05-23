package com.stackroute.lambdatwo;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class LambdaHandler implements RequestHandler<String,String> {
 
    public String handleRequest(String input, Context context) {
        context.getLogger().log("welcome to my first lambda fun . given input is " + input);
        return "Welcome  " + input.toUpperCase();
    }
}