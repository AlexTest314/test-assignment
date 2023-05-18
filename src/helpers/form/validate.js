import { getDimension } from "./getDimension";
import { validEmail, validPhone } from "./regExp";

const requiredFilled = "The name must be at least 2 characters.";
const fileSize = 5242880;
const imgSize = 70;

export const userFormValidation = {
  name: {
    required: requiredFilled,
    minLength: {
      value: 2,
      message: "The name must be at least 2 characters."
    },
    maxLength: {
      value: 60,
      message: "Size must be less than 60 symbols"
    }
  },
  email: {
    required: requiredFilled,
    minLength: {
      value: 2,
      message: "The name must be at least 2 characters."
    },
    maxLength: {
      value: 100,
      message: "Size must be less than 60 symbols"
    },
    pattern: {
      value: validEmail,
      message: "The email must be a valid email address."
    }
  },
  phone: {
    required: "The phone field is required.",
    pattern: {
      value: validPhone,
      message: "Invalid phone please use +38 (XXX) XXX - XX - XX"
    }
  },
  position_id: { required: "Please choose position", min: 1, valueAsNumber: true },
  photo: {
    required: "Please add your photo",
    validate: {
      lessThan5MB: (photo) => photo[0]?.size < fileSize || "Max size of photo 5mb",
      acceptedFormats: (photo) => ["image/jpeg", "image/jpg"].includes(photo[0]?.type) || "Incorrect type of photo",

      moreThan70px: async (photo) => {
        const sizes = await getDimension(photo[0]);
        if (sizes.width < imgSize && sizes.height < imgSize) {
          return "Image width and height must be more than or equal to 70px";
        }
      }
    }
  }
};
