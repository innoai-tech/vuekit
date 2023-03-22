import { component } from "@innoai-tech/vuekit";
import { Container, Section } from "@webapp/vuekit/layout";

// @ts-ignore
import guideline from "./__fixtures__/guideline.md?raw";

export default component(() => {
  return () => (
    <Container>
      <Section content={guideline} />
    </Container>
  );
});
