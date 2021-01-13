import { Container } from "components";
import { Center, Button } from "ui-components";

const Dashboard = () => {
  return (
    <Container>
      <Center>
        <div className="p-6 flex items-center md:max-w-xl flex-col md:flex-row justify-center">
          <p className="mb-6 md:mb-0 md:mr-4 text-center md:text-left">
            Get started by creating a new grow log. A grow log can start at any
            stage in the plant’s lifecycle.
          </p>
          <Button onClick={() => {}}>Create Log</Button>
        </div>
      </Center>
    </Container>
  );
};

export default Dashboard;
