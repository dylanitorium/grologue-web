import { Container } from "components";
import SkewLoader from "react-spinners/SkewLoader";
import { Center } from "ui-components";

const Authenticating = () => {
  return (
    <Container>
      <Center>
        <SkewLoader color={"black"} />
      </Center>
    </Container>
  );
};

export default Authenticating;
