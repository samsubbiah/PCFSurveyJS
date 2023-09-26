import * as React from "react";

import { TextField } from "@fluentui/react";
import { iComponentProps } from "./iComponentProps";

export const components1: React.FunctionComponent<iComponentProps> = (props)=>{
    
  return (
    <TextField label="my text field"  value={props.context.parameters.sampleProperty.raw!} />
  );
};