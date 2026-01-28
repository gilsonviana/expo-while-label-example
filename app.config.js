import wyndham from "./clients/wyndham/config.ts";

const clients = {
  wyndham,
};

const clientAppConfiguration = clients[process.env.EXPO_PUBLIC_CLIENT];

export default {
  ...clientAppConfiguration,
};
