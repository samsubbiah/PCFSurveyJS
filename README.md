# PCFSurveyJS

go to developer command promt for 2019(https://learn.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2022)

pac pcf init --namespace SurveyJSSep23 --name SurveyJSSep23 --template field

npm install

npm run  build

npm start watch 

create a solution directory

cd solutions
 
pac solution init --publisher-name dev --publisher-prefix dp


pac solution add-reference --path "C:\Sep23SurveyJSPCF"
#assuming Sep23SurveyJSPCF is in C Directory

msbuild /t:build /restore


ReactJS commands
================

npm install react react-dom @fluentui/react
npm i --save-dev @types/react-dom

SurveyJS Commands
==================

npm install survey-react-ui --save
