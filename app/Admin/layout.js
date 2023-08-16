import Main from "./Main";

export default function RootLayoutPlus({ children }) {
  return (
    <div>
      <Main>{children}</Main>
    </div>
  );
}
