import StyledModalHeader from "../ModalReusableComponents/StyledModalHeader";
import StyledModalText from "../ModalReusableComponents/StyledModalText";
import ThickGrayText from "../common/ThickGrayText";
import ThickBlackText from "../common/ThickBlackText";
import { HStack, Image, Box } from "@chakra-ui/react";
import LearningGoalRadios from "./LearningGoalRadios";
import InputsColumn from "../FormsReusableComponents/InputsColumn";
import InputGroup from "../FormsReusableComponents/InputGroup";
import AppButton from "../common/AppButton";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useToast } from "@chakra-ui/react";
import { toastConfigs } from "../../config/toast";

import { type ModalForm } from "../Auth/types";
import { type Teacher } from "../../redux/teachers/types";

const bookingSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  number: yup.string().required("Number is required"),
  learningGoal: yup
    .string()
    .oneOf(
      ["business", "kids", "abroad", "study", "travel"],
      "You must accept the terms"
    )
    .required(),
});

export type LearningGoal = "business" | "kids" | "abroad" | "study" | "travel";

export type BookingValues = {
  name: string;
  email: string;
  number: string;
  learningGoal: LearningGoal;
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

  type FormData = BookingValues;

  const onSubmit: SubmitHandler<BookingValues> = async (
    data: FormData,
    event
  ) => {
    if (event) {
      event?.target.reset();
    }
    onClose();
    toast({
      ...toastConfigs,
      status: "success",
      description: "Thank you for your booking. We'll call you soon!",
    });
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
      <Box as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <LearningGoalRadios
          register={register}
          name="learningGoal"
          checkedGoal={currentLearningGoal}
        />
        <InputsColumn>
          <InputGroup
            register={register}
            type="text"
            name="name"
            placeholder="Full Name"
            errorMessage={errors.name ? errors.name.message : ""}
          />
          <InputGroup
            register={register}
            type="email"
            name="email"
            placeholder="Email"
            errorMessage={errors.email ? errors.email.message : ""}
          />
          <InputGroup
            register={register}
            type="tel"
            name="number"
            placeholder="Phone number"
            errorMessage={errors.number ? errors.number.message : ""}
          />
        </InputsColumn>
        <AppButton type="submit" w="100%" py="16px" h="60px">
          Book{" "}
        </AppButton>
      </Box>
    </>
  );
};

export default BookingForm;
