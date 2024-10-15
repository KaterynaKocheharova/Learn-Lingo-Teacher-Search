import StyledBenefitsList from "./StyledBenefitsList";
import StyledBenefitsListItem from "./StyledBenefitsListItem";
import { benefits } from "../../../utils/benefits";

const Benefits = () => {
  return (
    <StyledBenefitsList>
      {benefits.map((benefit) => {
        return <StyledBenefitsListItem benefit={benefit} />;
      })}
    </StyledBenefitsList>
  );
};

export default Benefits;
