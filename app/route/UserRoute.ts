'use strict'

import express = require('express');
import UserService from './../service/UserService'

export default class UserRoute {

    app: express.Application;

    constructor(app: express.Application) {
        this.app = app
        this.setup()
    }

    async setup() {
        this.app.route("/users")
            .get(await UserService.findAll)
    }

}