/**
 * Para criar um usuário é necessário: name, email, password.
 */

interface TechObject {
    title: string;
    experience: number;
}

//formas de a gente definir tipagens de conjunto de dados, principalmente objetos no JS
interface CreateUserData {
    //nome não precisa ser informado
    name?: string;
    email: string;
    password: string;
    //se fosse só array de string poderia definir como: string[]
    techs: Array<string | TechObject>;
}

//O service deve exportar uma única funcionalidade (por isso o default)
export default function createUser({ name, email, password, techs }: CreateUserData) {
    const user = {
        name,
        email,
        password,
        techs
    };

    return user;
}