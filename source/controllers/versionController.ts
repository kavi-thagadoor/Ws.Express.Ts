import { Request, Response } from 'express'; // Ensure correct import
import { EnvConfigKey, EnvConfigValues, GetEnvConfigByKey } from '../Constant';

export let version = (req: Request, res: Response): void => {
  let currentConfig = EnvConfigValues.CurrentEnvConfig;
  res.json({
    version: GetEnvConfigByKey(EnvConfigKey.Version),
    environment: currentConfig.EnvironmentName,
  });
};
