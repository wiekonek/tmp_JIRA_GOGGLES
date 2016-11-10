"use strict";
const express = require("express");
const credentials_1 = require("../credentials");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (addon) => {
    const router = express.Router();
    const httpClient = addon.httpClient(credentials_1.default);
    router.get("/", (req, res) => {
        httpClient.get('/rest/api/2/project', (err, jiraRes, body) => {
            res.send(body);
        });
    });
    return router;
};
//# sourceMappingURL=projects.js.map