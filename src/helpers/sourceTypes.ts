import { Address } from 'viem';

export type ERC20Transaction = {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  from: string;
  contractAddress: Address;
  to: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  transactionIndex: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
};

export type GetERC20TransactionsResponse = {
  result: ERC20Transaction[];
};

export type GetNormalTransactionsResponse = {
  result: NormalTransaction[];
};

export type NormalTransaction = {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  gasUsed: string;
  contractAddress: Address;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
};

export type ERC721Transaction = {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  from: string;
  contractAddress: Address;
  to: string;
  tokenID: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  transactionIndex: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
};

export type GetERC721TransactionsResponse = {
  result: ERC721Transaction[];
};

export type GetTokenBalanceResponse = {
  result: string;
  status: string;
};

export type IGRDonation = {
  id: string;
  amountUSD: number;
  scoreAdded: number;
  transaction: string;
  roundName: string;
  projectTitle: string;
};

export type SafeInfo = {
  address: Address;
  nonce: number;
  threshold: number;
  owners: string[];
  masterCopy: string;
  modules: any[];
  fallbackHandler: string;
  guard: string;
  version: string;
};
export type GitcoinProject = {
  id: string;
  projectNumber: number;
  metaPtr: string;
  metadata: {
    title: string;
    description: string;
    website: string;
    projectTwitter: string;
    userGithub: string;
    projectGithub: string;
    logoImg: string;
    bannerImg: string;
    bannerImgData: object;
    logoImgData: object;
    credentials: {
      github: {
        credentialSubject: {
          id: string;
        };
      };
    };
  };
  owners: string[];
};

type PoapEvent = {
  id: number;
  fancy_id: string;
  name: string;
  event_url: string;
  image_url: string;
  country: string;
  city: string;
  description: string;
  year: number;
  start_date: string;
  end_date: string;
  expiry_date: string;
  supply: number;
};

export type POAP = {
  event: PoapEvent;
  tokenId: string;
  owner: string;
  chain: string;
  created: string;
};
