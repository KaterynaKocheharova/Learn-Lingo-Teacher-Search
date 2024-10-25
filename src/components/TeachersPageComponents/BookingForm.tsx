import StyledModalHeader from "../common/StyledModalHeader";
import StyledModalText from "../common/StyledModalText";
import ThickGrayText from "./ThickGrayText";
import ThickBlackText from "./ThickBlackText";
import { HStack, Image, Box } from "@chakra-ui/react";
import LearningGoalRadios from "./LearningGoalRadios";
// import InputsColumn from "../common/InputsColumn";
// import InputGroup from "../common/InputGroup";
import AppButton from "../common/AppButton";
// import PasswordGroup from "./PasswordGroup";
import { Spinner } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { toastConfigs } from "../../utils/toast.ts";
import { useToast } from "@chakra-ui/react";
import { type ModalForm } from "./types";
import { type Teacher } from "../../redux/teachers/types";

const bookingSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  number: yup.string().min(9, "Min 9 numbers").required("Number is required"),
  learningGoal: yup
    .string()
    .oneOf(
      ["business", "kids", "abroad", "study", "travel"],
      "You must accept the terms"
    ),
});

export type BookingValues = {
  name: string;
  email: string;
  number: string;
  learningGoal: string; 
};

type BookingFormProps = ModalForm &
  Required<Pick<Teacher, "name" | "surname" | "avatar_url">>;

const BookingForm = ({
  onClose,
  avatar_url,
  name,
  surname,
}: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      learningGoal: "business",
    },
  });

  const currentLearningGoal = watch("learningGoal");

  const toast = useToast();

  type FormData = yup.InferType<typeof bookingSchema>;
  const onSubmit: SubmitHandler<BookingValues> = async (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <StyledModalHeader>Book trial lesson</StyledModalHeader>
      <StyledModalText mb="20px">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </StyledModalText>
      <HStack mb="40px" spacing="14px">
        <Image
          src={avatar_url}
          alt="teacher avatar"
          rounded="60%"
          w="44px"
          h="44px"
        />{" "}
        <Box>
          <ThickGrayText mb="4px" fontSize="14px">
            Your teacher
          </ThickGrayText>
          <ThickBlackText as="h4">{`${name} ${surname}`}</ThickBlackText>
        </Box>
      </HStack>
      <LearningGoalRadios register={register} name="learningGoal" checkedGoal={currentLearningGoal} />
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        {/* <InputsColumn>
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
        </InputsColumn> */}
        <AppButton type="submit" w="100%" py="16px" h="60px">
          Book{" "}
        </AppButton>
      </Box>
    </>
  );
};

export default BookingForm;
