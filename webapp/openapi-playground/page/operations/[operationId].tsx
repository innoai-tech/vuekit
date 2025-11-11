import { component, t } from "@innoai-tech/vuekit";
import { OperationView } from "../../mod/openapi";

export default component(
  {
    operationId: t.string(),
  },
  (props) => {
    return () => (
      <OperationView operationId={props.operationId} key={props.operationId} />
    );
  },
);
