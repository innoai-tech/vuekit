import { component } from "@innoai-tech/vuekit";
import { Container, Example, Section } from "@webapp/vuekit/layout";

import Icon from "./__fixtures__/icon/Icon.example";
import IconWithButton from "./__fixtures__/icon/IconWithButton.example";

export default component(() => {
  return () => (
    <Container>
      <Section content={"沿用 [mid](https://pictogrammers.com/library/mdi/)"}>
        <Example component={Icon} />
      </Section>
      <Section content={"和 Button 一起使用"}>
        <Example component={IconWithButton} />
      </Section>
    </Container>
  );
});
