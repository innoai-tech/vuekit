import { component } from "@innoai-tech/vuekit";
import { Container, Example, Section } from "@webapp/vuekit/layout";

import ComponentSimple from "./__fixtures__/usage/ComponentSimple.example";
import ComponentWithProps from "./__fixtures__/usage/ComponentWithProps.example";

export default component(() => {
  return () => (
    <Container>
      <Section
        content={`
为了更好的 TypeScript 和 JSX 的支持，重新抽象了定义组件的方式   

一般组件：
      `}
      >
        <Example component={ComponentSimple} />
      </Section>
      <Section
        content={`
可复用组件：

* \`props\` 和 \`emits\` 合并声明，基于 [zod](https://zod.dev/)   
      `}
      >
        <Example component={ComponentWithProps} />
      </Section>
    </Container>
  );
});
