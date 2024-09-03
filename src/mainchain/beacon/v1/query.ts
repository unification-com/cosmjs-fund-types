/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, Beacon, BeaconTimestamp } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.beacon.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
/** QueryBeaconRequest is the request type for the Query/Beacon RPC method */
export interface QueryBeaconRequest {
  /** beacon_id is the id of the beacon to query for */
  beaconId: bigint;
}
/** QueryBeaconResponse is the response type for the Query/Beacon RPC method */
export interface QueryBeaconResponse {
  beacon?: Beacon;
}
/** QueryBeaconTimestampRequest is the request type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampRequest {
  /** beacon_id is the id of the beacon to query for */
  beaconId: bigint;
  /** timestamp_id is the id of the timestamp to query for */
  timestampId: bigint;
}
/** QueryBeaconTimestampResponse is the response type for the Query/BeaconTimestamp RPC method */
export interface QueryBeaconTimestampResponse {
  timestamp?: BeaconTimestamp;
  beaconId: bigint;
  owner: string;
}
/** QueryBeaconsFilteredRequest is the request type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredRequest {
  /** moniker is the moniker of the beacon to search for */
  moniker: string;
  /** owner is an address to search for */
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryBeaconsFilteredResponse is the response type for the Query/BeaconsFiltered RPC method */
export interface QueryBeaconsFilteredResponse {
  beacons: Beacon[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryBeaconStorageRequest is the request type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageRequest {
  /** beacon_id is the id of the beacon to query for */
  beaconId: bigint;
}
/** QueryBeaconStorageResponse is the response type for the Query/BeaconStorage RPC method */
export interface QueryBeaconStorageResponse {
  beaconId: bigint;
  owner: string;
  /** current_limit is the current in-state storage limit for this beacon */
  currentLimit: bigint;
  /** current_used is the number of in-state slots currently used */
  currentUsed: bigint;
  /** max is the maximum possible slots a beacon can have, as defined by the beacon module params */
  max: bigint;
  /** max_purchasable is the maximum number a beacon can purchase without exceeding max */
  maxPurchasable: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryParamsRequest",
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
  typeUrl: "/mainchain.beacon.v1.QueryParamsResponse",
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
function createBaseQueryBeaconRequest(): QueryBeaconRequest {
  return {
    beaconId: BigInt(0),
  };
}
export const QueryBeaconRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconRequest",
  encode(message: QueryBeaconRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBeaconRequest {
    const obj = createBaseQueryBeaconRequest();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    return obj;
  },
  toJSON(message: QueryBeaconRequest): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconRequest>, I>>(object: I): QueryBeaconRequest {
    const message = createBaseQueryBeaconRequest();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    return message;
  },
};
function createBaseQueryBeaconResponse(): QueryBeaconResponse {
  return {
    beacon: undefined,
  };
}
export const QueryBeaconResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconResponse",
  encode(message: QueryBeaconResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beacon !== undefined) {
      Beacon.encode(message.beacon, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beacon = Beacon.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBeaconResponse {
    const obj = createBaseQueryBeaconResponse();
    if (isSet(object.beacon)) obj.beacon = Beacon.fromJSON(object.beacon);
    return obj;
  },
  toJSON(message: QueryBeaconResponse): unknown {
    const obj: any = {};
    message.beacon !== undefined && (obj.beacon = message.beacon ? Beacon.toJSON(message.beacon) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconResponse>, I>>(object: I): QueryBeaconResponse {
    const message = createBaseQueryBeaconResponse();
    if (object.beacon !== undefined && object.beacon !== null) {
      message.beacon = Beacon.fromPartial(object.beacon);
    }
    return message;
  },
};
function createBaseQueryBeaconTimestampRequest(): QueryBeaconTimestampRequest {
  return {
    beaconId: BigInt(0),
    timestampId: BigInt(0),
  };
}
export const QueryBeaconTimestampRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampRequest",
  encode(message: QueryBeaconTimestampRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.timestampId !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestampId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconTimestampRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconTimestampRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.timestampId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBeaconTimestampRequest {
    const obj = createBaseQueryBeaconTimestampRequest();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.timestampId)) obj.timestampId = BigInt(object.timestampId.toString());
    return obj;
  },
  toJSON(message: QueryBeaconTimestampRequest): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.timestampId !== undefined && (obj.timestampId = (message.timestampId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconTimestampRequest>, I>>(
    object: I,
  ): QueryBeaconTimestampRequest {
    const message = createBaseQueryBeaconTimestampRequest();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    if (object.timestampId !== undefined && object.timestampId !== null) {
      message.timestampId = BigInt(object.timestampId.toString());
    }
    return message;
  },
};
function createBaseQueryBeaconTimestampResponse(): QueryBeaconTimestampResponse {
  return {
    timestamp: undefined,
    beaconId: BigInt(0),
    owner: "",
  };
}
export const QueryBeaconTimestampResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconTimestampResponse",
  encode(message: QueryBeaconTimestampResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      BeaconTimestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(16).uint64(message.beaconId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconTimestampResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconTimestampResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = BeaconTimestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.beaconId = reader.uint64();
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
  fromJSON(object: any): QueryBeaconTimestampResponse {
    const obj = createBaseQueryBeaconTimestampResponse();
    if (isSet(object.timestamp)) obj.timestamp = BeaconTimestamp.fromJSON(object.timestamp);
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryBeaconTimestampResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp ? BeaconTimestamp.toJSON(message.timestamp) : undefined);
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconTimestampResponse>, I>>(
    object: I,
  ): QueryBeaconTimestampResponse {
    const message = createBaseQueryBeaconTimestampResponse();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BeaconTimestamp.fromPartial(object.timestamp);
    }
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQueryBeaconsFilteredRequest(): QueryBeaconsFilteredRequest {
  return {
    moniker: "",
    owner: "",
    pagination: undefined,
  };
}
export const QueryBeaconsFilteredRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredRequest",
  encode(message: QueryBeaconsFilteredRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconsFilteredRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconsFilteredRequest();
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
  fromJSON(object: any): QueryBeaconsFilteredRequest {
    const obj = createBaseQueryBeaconsFilteredRequest();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBeaconsFilteredRequest): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconsFilteredRequest>, I>>(
    object: I,
  ): QueryBeaconsFilteredRequest {
    const message = createBaseQueryBeaconsFilteredRequest();
    message.moniker = object.moniker ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryBeaconsFilteredResponse(): QueryBeaconsFilteredResponse {
  return {
    beacons: [],
    pagination: undefined,
  };
}
export const QueryBeaconsFilteredResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconsFilteredResponse",
  encode(message: QueryBeaconsFilteredResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.beacons) {
      Beacon.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconsFilteredResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconsFilteredResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beacons.push(Beacon.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBeaconsFilteredResponse {
    const obj = createBaseQueryBeaconsFilteredResponse();
    if (Array.isArray(object?.beacons)) obj.beacons = object.beacons.map((e: any) => Beacon.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBeaconsFilteredResponse): unknown {
    const obj: any = {};
    if (message.beacons) {
      obj.beacons = message.beacons.map((e) => (e ? Beacon.toJSON(e) : undefined));
    } else {
      obj.beacons = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconsFilteredResponse>, I>>(
    object: I,
  ): QueryBeaconsFilteredResponse {
    const message = createBaseQueryBeaconsFilteredResponse();
    message.beacons = object.beacons?.map((e) => Beacon.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryBeaconStorageRequest(): QueryBeaconStorageRequest {
  return {
    beaconId: BigInt(0),
  };
}
export const QueryBeaconStorageRequest = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageRequest",
  encode(message: QueryBeaconStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBeaconStorageRequest {
    const obj = createBaseQueryBeaconStorageRequest();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    return obj;
  },
  toJSON(message: QueryBeaconStorageRequest): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconStorageRequest>, I>>(
    object: I,
  ): QueryBeaconStorageRequest {
    const message = createBaseQueryBeaconStorageRequest();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    return message;
  },
};
function createBaseQueryBeaconStorageResponse(): QueryBeaconStorageResponse {
  return {
    beaconId: BigInt(0),
    owner: "",
    currentLimit: BigInt(0),
    currentUsed: BigInt(0),
    max: BigInt(0),
    maxPurchasable: BigInt(0),
  };
}
export const QueryBeaconStorageResponse = {
  typeUrl: "/mainchain.beacon.v1.QueryBeaconStorageResponse",
  encode(message: QueryBeaconStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeaconStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeaconStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
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
  fromJSON(object: any): QueryBeaconStorageResponse {
    const obj = createBaseQueryBeaconStorageResponse();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.currentLimit)) obj.currentLimit = BigInt(object.currentLimit.toString());
    if (isSet(object.currentUsed)) obj.currentUsed = BigInt(object.currentUsed.toString());
    if (isSet(object.max)) obj.max = BigInt(object.max.toString());
    if (isSet(object.maxPurchasable)) obj.maxPurchasable = BigInt(object.maxPurchasable.toString());
    return obj;
  },
  toJSON(message: QueryBeaconStorageResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.currentLimit !== undefined && (obj.currentLimit = (message.currentLimit || BigInt(0)).toString());
    message.currentUsed !== undefined && (obj.currentUsed = (message.currentUsed || BigInt(0)).toString());
    message.max !== undefined && (obj.max = (message.max || BigInt(0)).toString());
    message.maxPurchasable !== undefined &&
      (obj.maxPurchasable = (message.maxPurchasable || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeaconStorageResponse>, I>>(
    object: I,
  ): QueryBeaconStorageResponse {
    const message = createBaseQueryBeaconStorageResponse();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
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
  /** Params queries the parameters of x/beacon module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Beacon queries the metadata of a beacon. */
  Beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse>;
  /** BeaconTimestamp queries a timestamp of a beacon */
  BeaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse>;
  /** BeaconsFiltered queries all beacon metadata for given search parameters */
  BeaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse>;
  /** BeaconStorage queries beacon storage for for given beacon ID */
  BeaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Beacon = this.Beacon.bind(this);
    this.BeaconTimestamp = this.BeaconTimestamp.bind(this);
    this.BeaconsFiltered = this.BeaconsFiltered.bind(this);
    this.BeaconStorage = this.BeaconStorage.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Beacon(request: QueryBeaconRequest): Promise<QueryBeaconResponse> {
    const data = QueryBeaconRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "Beacon", data);
    return promise.then((data) => QueryBeaconResponse.decode(new BinaryReader(data)));
  }
  BeaconTimestamp(request: QueryBeaconTimestampRequest): Promise<QueryBeaconTimestampResponse> {
    const data = QueryBeaconTimestampRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconTimestamp", data);
    return promise.then((data) => QueryBeaconTimestampResponse.decode(new BinaryReader(data)));
  }
  BeaconsFiltered(request: QueryBeaconsFilteredRequest): Promise<QueryBeaconsFilteredResponse> {
    const data = QueryBeaconsFilteredRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconsFiltered", data);
    return promise.then((data) => QueryBeaconsFilteredResponse.decode(new BinaryReader(data)));
  }
  BeaconStorage(request: QueryBeaconStorageRequest): Promise<QueryBeaconStorageResponse> {
    const data = QueryBeaconStorageRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconStorage", data);
    return promise.then((data) => QueryBeaconStorageResponse.decode(new BinaryReader(data)));
  }
}
