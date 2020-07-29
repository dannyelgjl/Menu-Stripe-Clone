import React from "react";

import { Products, Developers, Company } from "../Content";
import { Container, DropdownStyles } from "./styles";
import { DropdownOption } from "../Dropdown";

function NavBar() {
  return (
    <DropdownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption name="Produtos" content={Products} />
          </li>

          <li>
            <DropdownOption name="Desenvolvedores" content={Developers} />
          </li>

          <li>
            <DropdownOption name="Empresas" content={Company} />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
}

export default NavBar;
