import { server } from "./socket";
import "./routes"; // Import routes after initialization
import { connectToDatabase } from './DatabaseConfig';
import * as cons from "./Constant";
require('dotenv').config();

const PORT: any = cons.EnvConfigValues.CurrentEnvConfig.Port ?? 6060;
const CONFIG_FILE: any = cons.GetConfigFileName();
server.listen(PORT, () => {
  connectToDatabase();
  console.log(`The server is running on port ${PORT} with the config ${CONFIG_FILE}.json`);
});
