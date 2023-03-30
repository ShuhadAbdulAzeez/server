import { redirectDomain } from '../../conifg/key';

export default (survey) => {
  return `
    <html>
    <body>
     <div style="text-align: center;">
      <h3>I'd like your input!</h3>
      <p>Please answer the following Question:</p>
      <p>${survey.body}</p>
      <div>
        <a href="${redirectDomain}/api/surveys/thanks">Yes</a>
      </div>
      <div>
        <a href="${redirectDomain}/api/surveys/thanks">No</a>
      </div>
     </div> 
    </body>
    </html>
  `;
};
