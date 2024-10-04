import {Button} from "@nextui-org/react";

export default function Buttons(props) {
  return (
      <Button color="primary" variant="bordered">
        {props.title}
      </Button>  
  );
}