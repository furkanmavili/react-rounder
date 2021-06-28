import React from "react";
import { Link } from "@chakra-ui/react";

function Footer() {
  return (
    <div>
      Created by{" "}
      <Link fontWeight="bold" color="teal.200" href="https://github.com/furkanmavili" isExternal>
        Furkan Mavili &#9996;
      </Link>
    </div>
  );
}

export default Footer;
