import {
  z,
  component
} from "@innoai-tech/vuekit";
import { Box } from "@innoai-tech/vueuikit";
import { Markdown } from "@innoai-tech/vuemarkdown";
import { CodeBlock } from "./Example";

const components = {
  pre: CodeBlock
};

export const Section = component({
    content: z.string()
  },
  (props, { slots }) => {
    return () => (
      <Box sx={{
        "& + &": { mt: 24 },
        "&:not(pre) > code": {
          font: "code",
          rounded: "xs",
          px: 4,
          bgColor: "sys.surface-container-low"
        },
        "& p,li": {
          my: "1em"
        }
      }}>
        <Markdown
          text={props.content}
          components={components}
        />
        <div>
          {slots}
        </div>
      </Box>
    );
  });
