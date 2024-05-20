// Array with the props for each input element
export const inputs = [
    {
        id: 1,
        name: "firstName",
        type: "text",
        placeholder: "Escriba el nombre o nombres",
        label: "Nombres",
        errorMessage:
            "¡Por favor, no debe estar vacío y/o no debe contener caracteres especiales y números!",
        /*
            ^                  coincide con el inicio de la cadena.
            [A-Za-zÀÁÉÍÓÚñü]   coincide con una letra mayúscula o minúscula con acentos (español).
            \s                 coincide con un espacio en blanco.
            +                  indica que la expresión anterior debe repetirse una o más veces.
            $                  coincide con el final de la cadena.
        */
        pattern: "^[A-Za-zÀÁÉÍÓÚñü s]+$",
    },
    {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "Escriba el apellido o apellidos",
        label: "Apellidos",
        errorMessage:
            "¡Por favor, no debe estar vacío y/o no debe contener caracteres especiales y números!",
        /*
            ^                  coincide con el inicio de la cadena.
            [A-Za-zÀÁÉÍÓÚñü]   coincide con una letra mayúscula o minúscula con acentos (español).
            \s                 coincide con un espacio en blanco.
            +                  indica que la expresión anterior debe repetirse una o más veces.
            $                  coincide con el final de la cadena.
        */
        pattern: "^[A-Za-zÀÁÉÍÓÚñü s]+$",
    },
    {
        id: 3,
        name: "birthday",
        type: "date",
        min: "1924-01-01", // The minimum date that can be selected.
        max: "2011-12-31", // The maximum date that can be selected, minimum (13 years old) https://www.icbf.gov.co/mis-manos-te-ensenan/que-edad-puedo-darle-un-celular-una-tableta-o-acceso-internet-un-nino
        placeholder: "Seleccione la fecha de cumpleaños",
        label: "Fecha de nacimiento",
        errorMessage:
            "¡Por favor, no debe estar vacío y/o usted debe ser mayor de trece (13) años. Seleccione su fecha de nacimiento!",
    },
    {
        id: 4,
        name: "email",
        type: "email",
        placeholder: "Escriba el correo electrónico",
        label: "Email",
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
    },
    {
        id: 5,
        name: "password",
        type: "text",
        placeholder: "Escriba la contraseña",
        label: "Contraseña",
        errorMessage:
            "¡Por favor, no debe estar vacío y/o debe tener entre 8-200 caracteres, contener al menos una letra, contener al menos un número y un simbolo especial (!@#$%^&*)!",
        /*
            ^                   coincide con el inicio de la cadena.
            (?=.*[0-9])         asegura que haya al menos un número del 0-9 en la cadena
            (?=.*[!@#$%^&*])    asegura que haya al menos un símbolo especial.
            [a-zA-Z0-9!@#$%^&*] coincide con caracteres alfanuméricos o símbolos especiales.
            {8,200}             coincide con un rango de 8 a 200 caracteres 
            $                   coincide con el final de la cadena.
        */
        pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,200}$",
    },
    {
        id: 6,
        name: "phoneNumber",
        type: "number",
        placeholder: "Digite el número de celular",
        label: "Número de celular",
        errorMessage:
            "¡Por favor, no debe estar vacío. Ingrese su número de celular!",
    },
];

export const idDocumentInput = {
    label: "Documento de identidad",
    type: "number",
    name: "idDocument",
    placeholder: "Digite el número de identidad",
    errorMessage:
        "¡Por favor, no debe estar vacío. Ingrese su documento de identidad!",
};

export const selectsData = [
    {
        id: 1,
        name: "genderIdentity",
        options: [
            "Masculino",
            "Femenino",
            "Trans",
            "Otro",
            "No deseo responder",
        ],
    },
    {
        id: 2,
        name: "idDocumentType",
        options: [],
    },
    {
        id: 3,
        name: "role",
        options: [],
    },
];
