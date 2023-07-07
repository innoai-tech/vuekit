import { component } from "@innoai-tech/vuekit";
import { ThemeProvider } from "@innoai-tech/vueuikit";
import { Box } from "@innoai-tech/vueuikit";

export default component(() => {
  const t = ThemeProvider.use();

  return () => {
    return (
      <Box sx={{ display: "flex", gap: 16, flexDirection: "column" }}>
        <div>
          点击下载，通过 Figma Tokens 全量导入文件
        </div>
        <pre onClick={() => {
          download(JSON.stringify(t.toFigmaTokens(), null, 2), `tokens.${(new Date()).getTime()}.json`);
        }}>
          <code>
            {JSON.stringify(t.toFigmaTokens(), null, 2)}
          </code>
        </pre>
      </Box>
    );
  };
});

function download(data: string, filename: string, type: string = "application/json") {
  const a = document.createElement("a");
  const file = new Blob([data], { type: type });
  const url = URL.createObjectURL(file);

  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}