// Array with the props for each input element
export const inputs = [
    {
        id: 1,
        name: "firstName",
        type: "text",
        placeholder: "Escriba su nombre/nombres",
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
        placeholder: "Escriba su apellido/apellidos",
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
        placeholder: "Seleccione su cumpleaños",
        label: "Fecha de nacimiento",
        errorMessage:
            "¡Por favor, no debe estar vacío y/o usted debe ser mayor de trece (13) años. Seleccione su fecha de nacimiento!",
    },
    {
        id: 4,
        name: "phoneNumber",
        type: "number",
        placeholder: "Digite su número de celular",
        label: "Número de celular",
        errorMessage:
            "¡Por favor, no debe estar vacío. Ingrese su número de celular!",
    },
];

export const idDocumentInput = {
    label: "Documento de identidad",
    type: "number",
    name: "idDocument",
    placeholder: "Digite su número de identidad",
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
        options: ["C.C.", "C.E.", "T.I.", "P.B.", "R.C."],
    },
    {
        id: 3,
        name: "role",
        options: ["Usuario", "Moderador"],
    },
];
