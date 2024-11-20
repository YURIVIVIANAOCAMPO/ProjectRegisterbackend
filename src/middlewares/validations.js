import { check, validationResult } from "express-validator";

export const validatePersonData = [
  check("fullName").notEmpty().withMessage("El nombre completo es obligatorio."),
  check("documentId").isNumeric().withMessage("El documento de identificación debe ser numérico."),
  check("birthDate").isDate().withMessage("La fecha de nacimiento es inválida."),
  check("address").notEmpty().withMessage("La dirección es obligatoria."),
  check("phone").isNumeric().withMessage("El número de teléfono debe ser numérico."),
  check("email").isEmail().withMessage("El correo electrónico es inválido."),
  check("gender").isIn(["male", "female", "other"]).withMessage("El género es inválido."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
