"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

const activity = (req, res) => {
    res.render("home/activity");
};

const contact = (req, res) => {
    res.render("home/contact");
};

const about = (req, res) => {
    res.render("home/about");
};

const idea = (req, res) => {
    res.render("home/idea");
};

module.exports = {
    home,
    login,
    activity,
    contact,
    about,
    idea,
};

