import { component } from "@innoai-tech/vuekit";
import { Box } from "@innoai-tech/vueuikit";

/**
 * @property {"Home"} meta.name
 * @property {import("@webapp/vuekit/layout").mdiGroup} meta.icon
 */
export default component(() => () => (
	<Box
		sx={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			textStyle: "sys.display-large",
		}}
	>
		Vuekit
	</Box>
));
