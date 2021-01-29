"use strict";
/**
 * Para criar um usuário é necessário: name, email, password.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//O service deve exportar uma única funcionalidade (por isso o default)
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs
    };
    return user;
}
exports.default = createUser;
