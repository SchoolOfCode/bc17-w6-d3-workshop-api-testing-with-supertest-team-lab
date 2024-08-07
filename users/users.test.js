import {test,expect} from "vitest"

import request from "supertest";
import app from "../app.js";

test("GET /api/health works", async () => {
    const response = await request(app).get("/api/health");
  console.log(response.body)

})


// Goal: make a GET request with Supertest to the /api/health
//
// import the Express app from app.js (because it needs to be tested)
// import the function from Supertest (maybe call it `request` like the documentation did)
// within the existing test, follow the example from the documentation and:
//    call `request` and pass in the Express app as an argument
//    send a GET request to the /api/health endpoint
//    await the overall expression and assign it to a `response` constant
//    console.log `response.body` for now to at least see a result
