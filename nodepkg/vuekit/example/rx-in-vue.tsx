import { component } from "@innoai-tech/vuekit";
import { Container, Section, Example } from "@webapp/vuekit/layout";
import ComponentObservable from "./__fixtures__/usage/ComponentObservable.example";

export default component(() => {
  return () => (
    <Container>
      <Section
        content={`
和 [rxjs](https://rxjs.dev/) 集成  
        `}
      >
        <Example component={ComponentObservable} />
      </Section>
    </Container>
  );
});
