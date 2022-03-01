import { AutomationFlow } from '../automations/upsert-users-to-reqres.automation.js';
import cron from 'node-cron';

const cronAutomation = cron.schedule('0 21 * * *', () => {
   AutomationFlow.run()
  });

  export { cronAutomation }