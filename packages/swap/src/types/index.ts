import { NetworkNames } from "@enkryptcom/types";
import type { toBN } from "web3-utils";
import type Web3Eth from "web3-eth";
// eslint-disable-next-line import/no-cycle
import { OneInchQuote } from "../providers/types";

export interface TokenType {
  address: string;
  symbol: string;
  decimals: number;
  name: string;
  logoURI: string;
  rank?: number;
  cgId?: string;
}

export interface TokenNetworkType {
  network: NetworkNames | string;
  isAddress: (addr: string) => boolean;
}
export interface TokenTypeTo extends Omit<TokenType, "address"> {
  address?: string;
  networks: TokenNetworkType[];
}

export interface FromTokenType {
  top: TokenType[];
  trending: TokenType[];
  all: TokenType[];
}

export interface ToTokenType {
  top: TokenTypeTo[];
  trending: TokenTypeTo[];
  all: TokenTypeTo[];
}

export type BN = ReturnType<typeof toBN>;

export interface EvmOptions {
  infiniteApproval: boolean;
}

// eslint-disable-next-line no-shadow
export enum WalletIdentifier {
  enkrypt = "enkrypt",
  mew = "mew",
}

export type APIType = Web3Eth;

export interface QuoteMetaOptions {
  infiniteApproval: boolean;
  walletIdentifier: WalletIdentifier;
  slippage?: string;
}

export interface SwapOptions {
  network: NetworkNames;
  api: APIType;
  evmOptions?: EvmOptions;
  walletIdentifier: WalletIdentifier;
}

// eslint-disable-next-line no-shadow
export enum ProviderName {
  oneInch = "oneInch",
  paraswap = "paraswap",
  zerox = "zerox",
  changelly = "changelly",
}

// eslint-disable-next-line no-shadow
export enum TransactionStatus {
  pending = "pending",
  failed = "failed",
  success = "success",
}

export interface getQuoteOptions {
  fromAddress: string;
  toAddress: string;
  amount: BN;
  fromToken: TokenType;
  toToken: TokenType;
  fromNetwork: NetworkNames;
  toNetwork: NetworkNames | string;
}

export interface EVMTransaction {
  gasLimit: string;
  to: string;
  value: string;
  data: string;
}

export interface MinMaxResponse {
  minimumFrom: BN;
  maximumFrom: BN;
}

export interface ProviderQuoteResponse {
  toTokenAmount: BN;
  fromTokenAmount: BN;
  totalGaslimit: number;
  provider: ProviderName;
  quote: OneInchQuote;
  minMax: MinMaxResponse;
}

export interface ProviderSwapResponse {
  transactions: EVMTransaction[];
  toTokenAmount: BN;
  fromTokenAmount: BN;
  provider: ProviderName;
  getStatusObject: (options: unknown) => Promise<unknown>;
}

export type ProviderFromTokenResponse = Record<string, TokenType>;

export type ProviderToTokenResponse = Record<string, TokenTypeTo>;
