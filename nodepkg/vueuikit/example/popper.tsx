import { component } from "@innoai-tech/vuekit";
import { Container, Example } from "@webapp/vuekit/layout";

import NormalPopper from "./__fixtures__/popper/NormalPopper.example";
import HoveredPopper from "./__fixtures__/popper/HoveredPopper.example";
import AnimatedTooltip from "./__fixtures__/popper/AnimatedTooltip.example";

export default component(() => {
  return () => (
    <Container>
      <Example component={AnimatedTooltip} />
      <Example component={NormalPopper} />
      <Example component={HoveredPopper} />
    </Container>
  );
});
