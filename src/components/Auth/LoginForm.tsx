import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../redux/auth/operations.ts";
import { selectIsLoading } from "../../redux/auth/selectors.ts";
import { Box, Spinner } from "@chakra-ui/react";
import StyledModalHeader from "../ModalReusableComponents/StyledModalHeader.tsx";
import StyledModalText from "../ModalReusableComponents/StyledModalText.tsx";
import InputsColumn from "../FormsReusableComponents/InputsColumn.tsx";
import InputGroup from "../FormsReusableComponents/InputGroup.tsx";
import AppButton from "../common/AppButton";
import PasswordGroup from "./PasswordGroup";
import { useForm, SubmitHandler } from "react-hook-form";
import { type LoginInputValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toastConfigs } from "../../config/toast.ts";
import { useToast } from "@chakra-ui/react";
import { type ModalForm } from "./types";

const loginUserSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const LoginForm = ({ onClose }: ModalForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputValues>({
    resolver: yupResolver(loginUserSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const toast = useToast();

  const dispatch = useAppDispatch();

  type FormData = LoginInputValues;

  const onSubmit: SubmitHandler<LoginInputValues> = async (data: FormData) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        toast({
          ...toastConfigs,
          status: "success",
          description: "Logged in!",
        });
      })
      .then(() => {
        onClose();
      })
      .catch((error) => {
        if (error.includes("invalid-credential")) {
          toast({
            ...toastConfigs,
            status: "error",
            description: "Invalid email or password",
          });
        } else {
          toast({
            ...toastConfigs,
            status: "error",
            description: "Login failed. Try again",
          });
        }
      });
  };

  const isLoading = useAppSelector(selectIsLoading);

  return (
    <>
      <StyledModalHeader>Log In</StyledModalHeader>
      <StyledModalText mb="40px">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </StyledModalText>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputsColumn>
          <InputGroup
            register={register}
            type="email"
            name="email"
            placeholder="Email"
            errorMessage={errors.email ? errors.email.message : ""}
          />
          <PasswordGroup
            register={register}
            errorMessage={errors.password ? errors.password.message : ""}
          />
        </InputsColumn>
        <AppButton
          type="submit"
          w="100%"
          py="16px"
          h="60px"
          isLoading={Boolean(isLoading === "logining-in-progress")}
          spinner={<Spinner size="sm" />}
        >
          Sign In
        </AppButton>
      </Box>
    </>
  );
};

export default LoginForm;
