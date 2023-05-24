"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

router.get("/activity", ctrl.activity);

router.get("/contact", ctrl.contact);

router.get("/about", ctrl.about);

router.get("/idea", ctrl.idea);

module.exports = router;
