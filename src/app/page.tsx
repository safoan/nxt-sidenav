import Image from "next/image";

import client from "./component/client";
import dashboard from "./component/dashboard";
import user from "./component/user";
import product from "./component/product";
import customer from "./component/customer";
import invoice from "./component/invoice";


export default function Home() {
  return (
    <>
    <client/>
    <dashboard/>
    </>
  );
}

