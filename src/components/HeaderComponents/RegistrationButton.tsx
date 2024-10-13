import AppButton from "../common/AppButton";

const RegistrationButton = () => {
  return (
    <AppButton
      color="brand.white.900"
      backgroundColor="brand.black.900"
      px="39px"
      _hover={{ backgroundColor: "brand.black.900", color: "brand.white.900" }}
      _focus={{ backgroundColor: "brand.black.900", color: "brand.white.900" }}
    >
      Registration
    </AppButton>
  );
};

export default RegistrationButton;
