export const emailInput = {
    label: "Correo electrónico",
    type: "email",
    name: "email",
    placeholder: "Escriba su correo electrónico",
    errorMessage:
        "¡Por favor, no debe estar vacío y/o debe ser un correo electrónico válido!",
    /*
            ^                 coincide con el inicio de la cadena.
            [a-zA-Z0-9_.+-]   coincide con un carácter alfanumérico, guión bajo, punto o signo más.
            @                 coincide con el símbolo arroba (@).
            [a-zA-Z0-9-]      coincide con un carácter alfanumérico o guión bajo en la parte del dominio.
            \.[a-zA-Z0-9-.]+  coincide con un punto seguido de uno o más caracteres alfanuméricos, guiones bajos o puntos en la extensión del dominio.
            $                 coincide con el final de la cadena.
        */
    pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
};

export const passwordInput = {
    label: "Contraseña",
    type: "password",
    name: "password",
    placeholder: "Escriba su contraseña",
    errorMessage:
        "¡Por favor, no debe estar vacío y/o debe ser una contraseña válida!",
    /*
            ^                   coincide con el inicio de la cadena.
            (?=.*[0-9])         asegura que haya al menos un número del 0-9 en la cadena
            (?=.*[!@#$%^&*])    asegura que haya al menos un símbolo especial.
            [a-zA-Z0-9!@#$%^&*] coincide con caracteres alfanuméricos o símbolos especiales.
            {8,200}             coincide con un rango de 8 a 200 caracteres 
            $                   coincide con el final de la cadena.
        */
    pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,200}$",
};
