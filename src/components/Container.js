import React from "react";
import styled from "styled-components";
import { layoutWidth } from "../theme";

export const Container = styled.div`
  display: flex;
  max-width: ${layoutWidth};
  margin: 0 auto;
  padding: 0 2em;
`;
