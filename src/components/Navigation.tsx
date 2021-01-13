import Brand from "components/Brand";
import { auth } from "contexts";
import { Button, Icon } from "ui-components";

const Navigation = () => {
  const { signout, user } = auth.useAuth();

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <Brand />
      {Boolean(user) && (
        <Button onClick={signout} invisible>
          <Icon name="ExitToApp" color="black" size="2.5rem" />
        </Button>
      )}
    </div>
  );
};

export default Navigation;
