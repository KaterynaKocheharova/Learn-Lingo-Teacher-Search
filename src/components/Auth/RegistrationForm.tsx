import { Box } from "@chakra-ui/react";
import StyledModalHeader from "../common/StyledModalHeader";
import StyledModalText from "../common/StyledModalText";
import InputsColumn from "../common/InputsColumn";
import InputGroup from "../common/InputGroup";
import AppButton from "../common/AppButton";
import PasswordGroup from "./PasswordGroup";
import { useForm, SubmitHandler } from "react-hook-form";
import { type RegisterInputValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const registerUserSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputValues>({
    resolver: yupResolver(registerUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  type FormData = yup.InferType<typeof registerUserSchema>;

  const onSubmit: SubmitHandler<RegisterInputValues> = (data: FormData) =>
    console.log(data);

  return (
    <>
      <StyledModalHeader>Registration</StyledModalHeader>
      <StyledModalText mb="40px">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </StyledModalText>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <InputsColumn>
          <InputGroup
            register={register}
            type="text"
            name="name"
            placeholder="Name"
            errorMessage={errors.name ? errors.name.message : ""}
          />
          <InputGroup
            register={register}
            type="email"
            name="email"
            placeholder="Email"
            errorMessage={errors.email ? errors.email.message : ""}
          />
          <PasswordGroup
            register={register}
            name="password"
            placeholder="Password"
            errorMessage={errors.password ? errors.password.message : ""}
          />
        </InputsColumn>
        <AppButton type="submit" w="100%" py="16px" h="60px">
          Sign Up
        </AppButton>
      </Box>
    </>
  );
};

export default RegistrationForm;
