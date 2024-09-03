/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, WrkChain, WrkChainBlock } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.wrkchain.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
/** QueryWrkChainRequest is the request type for the Query/WrkChain RPC method */
export interface QueryWrkChainRequest {
  /** wrkchain_id is the id of the wrkchain to query for */
  wrkchainId: bigint;
}
/** QueryWrkChainResponse is the response type for the Query/WrkChain RPC method */
export interface QueryWrkChainResponse {
  wrkchain?: WrkChain;
}
/** QueryWrkChainBlockRequest is the request type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockRequest {
  /** wrkchain_id is the id of the wrkchain to query for */
  wrkchainId: bigint;
  /** height is the block number of the hash to query for */
  height: bigint;
}
/** QueryWrkChainBlockResponse is the response type for the Query/WrkChainBlock RPC method */
export interface QueryWrkChainBlockResponse {
  block?: WrkChainBlock;
  wrkchainId: bigint;
  owner: string;
}
/** QueryWrkChainsFilteredRequest is the request type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredRequest {
  /** moniker is the moniker of the wrkchain to search for */
  moniker: string;
  /** owner is an address to search for */
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryWrkChainsFilteredResponse is the response type for the Query/WrkChainsFiltered RPC method */
export interface QueryWrkChainsFilteredResponse {
  wrkchains: WrkChain[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryWrkChainStorageRequest is the request type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageRequest {
  /** wrkchain_id is the id of the wrkchain to query for */
  wrkchainId: bigint;
}
/** QueryWrkChainStorageResponse is the response type for the Query/WrkChainStorage RPC method */
export interface QueryWrkChainStorageResponse {
  wrkchainId: bigint;
  owner: string;
  /** current_limit is the current in-state storage limit for this wrkchain */
  currentLimit: bigint;
  /** current_used is the number of in-state slots currently used */
  currentUsed: bigint;
  /** max is the maximum possible slots a wrkchain can have, as defined by the wrkchain module params */
  max: bigint;
  /** max_purchasable is the maximum number a wrkchain can purchase without exceeding max */
  maxPurchasable: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/mainchain.wrkchain.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/mainchain.wrkchain.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryWrkChainRequest(): QueryWrkChainRequest {
  return {
    wrkchainId: BigInt(0),
  };
}
export const QueryWrkChainRequest = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainRequest",
  encode(message: QueryWrkChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainRequest {
    const obj = createBaseQueryWrkChainRequest();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    return obj;
  },
  toJSON(message: QueryWrkChainRequest): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainRequest>, I>>(object: I): QueryWrkChainRequest {
    const message = createBaseQueryWrkChainRequest();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    return message;
  },
};
function createBaseQueryWrkChainResponse(): QueryWrkChainResponse {
  return {
    wrkchain: undefined,
  };
}
export const QueryWrkChainResponse = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainResponse",
  encode(message: QueryWrkChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchain !== undefined) {
      WrkChain.encode(message.wrkchain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchain = WrkChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainResponse {
    const obj = createBaseQueryWrkChainResponse();
    if (isSet(object.wrkchain)) obj.wrkchain = WrkChain.fromJSON(object.wrkchain);
    return obj;
  },
  toJSON(message: QueryWrkChainResponse): unknown {
    const obj: any = {};
    message.wrkchain !== undefined &&
      (obj.wrkchain = message.wrkchain ? WrkChain.toJSON(message.wrkchain) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainResponse>, I>>(object: I): QueryWrkChainResponse {
    const message = createBaseQueryWrkChainResponse();
    if (object.wrkchain !== undefined && object.wrkchain !== null) {
      message.wrkchain = WrkChain.fromPartial(object.wrkchain);
    }
    return message;
  },
};
function createBaseQueryWrkChainBlockRequest(): QueryWrkChainBlockRequest {
  return {
    wrkchainId: BigInt(0),
    height: BigInt(0),
  };
}
export const QueryWrkChainBlockRequest = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockRequest",
  encode(message: QueryWrkChainBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainBlockRequest {
    const obj = createBaseQueryWrkChainBlockRequest();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QueryWrkChainBlockRequest): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainBlockRequest>, I>>(
    object: I,
  ): QueryWrkChainBlockRequest {
    const message = createBaseQueryWrkChainBlockRequest();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseQueryWrkChainBlockResponse(): QueryWrkChainBlockResponse {
  return {
    block: undefined,
    wrkchainId: BigInt(0),
    owner: "",
  };
}
export const QueryWrkChainBlockResponse = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainBlockResponse",
  encode(message: QueryWrkChainBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== undefined) {
      WrkChainBlock.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.wrkchainId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = WrkChainBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.wrkchainId = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainBlockResponse {
    const obj = createBaseQueryWrkChainBlockResponse();
    if (isSet(object.block)) obj.block = WrkChainBlock.fromJSON(object.block);
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryWrkChainBlockResponse): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block ? WrkChainBlock.toJSON(message.block) : undefined);
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainBlockResponse>, I>>(
    object: I,
  ): QueryWrkChainBlockResponse {
    const message = createBaseQueryWrkChainBlockResponse();
    if (object.block !== undefined && object.block !== null) {
      message.block = WrkChainBlock.fromPartial(object.block);
    }
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQueryWrkChainsFilteredRequest(): QueryWrkChainsFilteredRequest {
  return {
    moniker: "",
    owner: "",
    pagination: undefined,
  };
}
export const QueryWrkChainsFilteredRequest = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredRequest",
  encode(message: QueryWrkChainsFilteredRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainsFilteredRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainsFilteredRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainsFilteredRequest {
    const obj = createBaseQueryWrkChainsFilteredRequest();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryWrkChainsFilteredRequest): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainsFilteredRequest>, I>>(
    object: I,
  ): QueryWrkChainsFilteredRequest {
    const message = createBaseQueryWrkChainsFilteredRequest();
    message.moniker = object.moniker ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryWrkChainsFilteredResponse(): QueryWrkChainsFilteredResponse {
  return {
    wrkchains: [],
    pagination: undefined,
  };
}
export const QueryWrkChainsFilteredResponse = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainsFilteredResponse",
  encode(
    message: QueryWrkChainsFilteredResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.wrkchains) {
      WrkChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainsFilteredResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainsFilteredResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchains.push(WrkChain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainsFilteredResponse {
    const obj = createBaseQueryWrkChainsFilteredResponse();
    if (Array.isArray(object?.wrkchains))
      obj.wrkchains = object.wrkchains.map((e: any) => WrkChain.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryWrkChainsFilteredResponse): unknown {
    const obj: any = {};
    if (message.wrkchains) {
      obj.wrkchains = message.wrkchains.map((e) => (e ? WrkChain.toJSON(e) : undefined));
    } else {
      obj.wrkchains = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainsFilteredResponse>, I>>(
    object: I,
  ): QueryWrkChainsFilteredResponse {
    const message = createBaseQueryWrkChainsFilteredResponse();
    message.wrkchains = object.wrkchains?.map((e) => WrkChain.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryWrkChainStorageRequest(): QueryWrkChainStorageRequest {
  return {
    wrkchainId: BigInt(0),
  };
}
export const QueryWrkChainStorageRequest = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageRequest",
  encode(message: QueryWrkChainStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainStorageRequest {
    const obj = createBaseQueryWrkChainStorageRequest();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    return obj;
  },
  toJSON(message: QueryWrkChainStorageRequest): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainStorageRequest>, I>>(
    object: I,
  ): QueryWrkChainStorageRequest {
    const message = createBaseQueryWrkChainStorageRequest();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    return message;
  },
};
function createBaseQueryWrkChainStorageResponse(): QueryWrkChainStorageResponse {
  return {
    wrkchainId: BigInt(0),
    owner: "",
    currentLimit: BigInt(0),
    currentUsed: BigInt(0),
    max: BigInt(0),
    maxPurchasable: BigInt(0),
  };
}
export const QueryWrkChainStorageResponse = {
  typeUrl: "/mainchain.wrkchain.v1.QueryWrkChainStorageResponse",
  encode(message: QueryWrkChainStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.currentLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.currentLimit);
    }
    if (message.currentUsed !== BigInt(0)) {
      writer.uint32(32).uint64(message.currentUsed);
    }
    if (message.max !== BigInt(0)) {
      writer.uint32(40).uint64(message.max);
    }
    if (message.maxPurchasable !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxPurchasable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWrkChainStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWrkChainStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.currentLimit = reader.uint64();
          break;
        case 4:
          message.currentUsed = reader.uint64();
          break;
        case 5:
          message.max = reader.uint64();
          break;
        case 6:
          message.maxPurchasable = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWrkChainStorageResponse {
    const obj = createBaseQueryWrkChainStorageResponse();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.currentLimit)) obj.currentLimit = BigInt(object.currentLimit.toString());
    if (isSet(object.currentUsed)) obj.currentUsed = BigInt(object.currentUsed.toString());
    if (isSet(object.max)) obj.max = BigInt(object.max.toString());
    if (isSet(object.maxPurchasable)) obj.maxPurchasable = BigInt(object.maxPurchasable.toString());
    return obj;
  },
  toJSON(message: QueryWrkChainStorageResponse): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.currentLimit !== undefined && (obj.currentLimit = (message.currentLimit || BigInt(0)).toString());
    message.currentUsed !== undefined && (obj.currentUsed = (message.currentUsed || BigInt(0)).toString());
    message.max !== undefined && (obj.max = (message.max || BigInt(0)).toString());
    message.maxPurchasable !== undefined &&
      (obj.maxPurchasable = (message.maxPurchasable || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWrkChainStorageResponse>, I>>(
    object: I,
  ): QueryWrkChainStorageResponse {
    const message = createBaseQueryWrkChainStorageResponse();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    message.owner = object.owner ?? "";
    if (object.currentLimit !== undefined && object.currentLimit !== null) {
      message.currentLimit = BigInt(object.currentLimit.toString());
    }
    if (object.currentUsed !== undefined && object.currentUsed !== null) {
      message.currentUsed = BigInt(object.currentUsed.toString());
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = BigInt(object.max.toString());
    }
    if (object.maxPurchasable !== undefined && object.maxPurchasable !== null) {
      message.maxPurchasable = BigInt(object.maxPurchasable.toString());
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/wrkchain module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** WrkChain queries the metadata of a wrkchain. */
  WrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse>;
  /** WrkChainBlock queries a submitted hash of a wrkchain */
  WrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse>;
  /** WrkChainsFiltered queries all wrkchain metadata for given search parameters */
  WrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse>;
  /** WrkChainStorage queries wrkchain storage for for given wrkchain ID */
  WrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.WrkChain = this.WrkChain.bind(this);
    this.WrkChainBlock = this.WrkChainBlock.bind(this);
    this.WrkChainsFiltered = this.WrkChainsFiltered.bind(this);
    this.WrkChainStorage = this.WrkChainStorage.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  WrkChain(request: QueryWrkChainRequest): Promise<QueryWrkChainResponse> {
    const data = QueryWrkChainRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChain", data);
    return promise.then((data) => QueryWrkChainResponse.decode(new BinaryReader(data)));
  }
  WrkChainBlock(request: QueryWrkChainBlockRequest): Promise<QueryWrkChainBlockResponse> {
    const data = QueryWrkChainBlockRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainBlock", data);
    return promise.then((data) => QueryWrkChainBlockResponse.decode(new BinaryReader(data)));
  }
  WrkChainsFiltered(request: QueryWrkChainsFilteredRequest): Promise<QueryWrkChainsFilteredResponse> {
    const data = QueryWrkChainsFilteredRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainsFiltered", data);
    return promise.then((data) => QueryWrkChainsFilteredResponse.decode(new BinaryReader(data)));
  }
  WrkChainStorage(request: QueryWrkChainStorageRequest): Promise<QueryWrkChainStorageResponse> {
    const data = QueryWrkChainStorageRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainStorage", data);
    return promise.then((data) => QueryWrkChainStorageResponse.decode(new BinaryReader(data)));
  }
}
