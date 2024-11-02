import StyledBenefitsList from "./StyledBenefitsList";
import StyledBenefitsListItem from "./StyledBenefitsListItem";
import { benefits } from "../../data/benefits";

const Benefits = () => {
  return (
    <StyledBenefitsList>
      {benefits.map((benefit, index) => {
        return (
          <StyledBenefitsListItem
            key={`${benefit.number}${benefit.item}${index}`}
            benefit={benefit}
          />
        );
      })}
    </StyledBenefitsList>
  );
};

export default Benefits;
