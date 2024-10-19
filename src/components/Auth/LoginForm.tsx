import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../redux/auth/operations.ts";
import { selectIsLoading } from "../../redux/auth/selectors.ts";
import { Box } from "@chakra-ui/react";
import StyledModalHeader from "../common/StyledModalHeader";
import StyledModalText from "../common/StyledModalText";
import InputsColumn from "../common/InputsColumn";
import InputGroup from "../common/InputGroup";
import AppButton from "../common/AppButton";
import PasswordGroup from "./PasswordGroup";
import { Spinner } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { type LoginInputValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toastConfigs } from "../../utils/toast.ts";
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

  type FormData = yup.InferType<typeof loginUserSchema>;
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
      .catch(() => {
        toast({
          ...toastConfigs,
          status: "error",
          description: "Incorrect login or password",
        });
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
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
            name="password"
            placeholder="Password"
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
