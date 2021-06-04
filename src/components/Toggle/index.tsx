import { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";

export const Toggle: React.FC = () => {
  
  const [checked, setChecked] = useState(true)

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector 
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}        
        onChange={handleChecked}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}