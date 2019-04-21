import express = require('express');

export default class UserService {

    static async findAll(req: express.Request, res: express.Response) {
        res.send('finding all users..')
    }

}