import Brand from "components/Brand";
import { Navigation } from "components";

const Container = ({ children }) => (
  <div className="min-h-screen flex bg-gray-200 flex-col">
    <Navigation />
    <div className="flex bg-gray-200 flex-grow">{children}</div>
  </div>
);

export default Container;
