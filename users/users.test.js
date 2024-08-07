import {test,expect} from "vitest"

import request from "supertest";
import app from "../app.js";

test("GET /api/health works", async () => {
    const response = await request(app).get("/api/health");
    expect(response.body).toEqual (
 { success: true, payload: "API is running correctly" }
    )
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


// - Assert that the response body is an object with the structure below:
//   - `{ success: true, payload: "API is running correctly" }`
//   - Why: This is what the response body should always be for the `GET /api/health` endpoint
//   - Vitest offers matchers that allow you check if an object has a particular structure. Have a look at the documentation and examples.
// - Assert that the response status code is 200
//   - Why: HTTP status code 200 indicates the request was successful and this is what the response status code should always be for the `GET /api/health` endpoint
// - Assert that the Content-Type response header contains `application/json`.
//   - Why: The `GET /api/health` endpoint should always respond with JSON and also let the client know that the response body contains JSON.

