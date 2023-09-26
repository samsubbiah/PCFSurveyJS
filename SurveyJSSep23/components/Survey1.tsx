import 'survey-core/defaultV2.min.css';

import * as React from "react";

import { TextField } from "@fluentui/react";
import { iComponentProps } from "./iComponentProps";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { Console } from 'console';



const surveyJson = {
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  };

export const Survey1: React.FunctionComponent<iComponentProps> = (props)=>{
    const survey = new Model(surveyJson);
   // survey.showNavigationButtons = false;
    const surveyComplete = React.useCallback((sender: { data: any; }) => {
      const results = JSON.stringify(sender.data);
      alert(results);
    }, []);

 
    survey.onComplete.add(surveyComplete);
    survey.onValueChanged.add((result, options) => {
      console.log('kkkkk: ', options)
      console.log('kkkkk: ', options.value);
      console.log('kkkkk: ', options.question.name);
      console.log('kkkkk: ', options.question.fullTitle);
      console.log('kkkkk: ', options.name);
  })
    

   
  return (
    
    <Survey model={survey} />
  );
};