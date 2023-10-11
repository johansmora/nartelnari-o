"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlleruser_1 = require("../controllers/controlleruser");
const router = (0, express_1.Router)();
router.post('/', controlleruser_1.newUser);
router.post('/login', controlleruser_1.loginUser);
exports.default = router;
