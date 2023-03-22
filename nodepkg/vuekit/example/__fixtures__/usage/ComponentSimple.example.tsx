import { component } from "@innoai-tech/vuekit";
import { ref } from "vue";

export default component(() => {
  const count = ref(1);

  return () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>Counts: {count.value}</div>
      <button onClick={() => count.value++}>Click To Count</button>
    </div>
  );
});
