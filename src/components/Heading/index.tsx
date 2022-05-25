import React from "react";
import { Container, Title } from "./elements";

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Title>Search for restaurants in a breeze.</Title>
      {children}
    </Container>
  );
}
