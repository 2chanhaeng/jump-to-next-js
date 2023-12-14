export default function HelloLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <h1>Hello</h1>
      {children}
    </div>
  );
}
