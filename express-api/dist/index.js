"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    // res.status(401).json({ ok: false, msg: 'No hay token en la petición' });
    res.json({ ok: true, msg: 'Todo bien id: 123123' });
});
app.listen(port, () => {
    console.log(`Example app listning at http://localhost:${port}`);
});
