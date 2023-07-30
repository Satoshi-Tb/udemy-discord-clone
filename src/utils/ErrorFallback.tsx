import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}></button>
    </div>
  );
}
export default ErrorFallback;
