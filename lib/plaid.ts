import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const configration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      PLAID_CLIENT_ID: process.env.PLAID_CLIENT_ID,
      PLAID_SECRET: process.env.PLAID_SECRET,
    },
  },
});

export const plaidClient = new PlaidApi(configration);
