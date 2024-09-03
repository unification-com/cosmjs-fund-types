/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import {
  PurchaseOrderStatus,
  Params,
  EnterpriseUndPurchaseOrder,
  UndSupply,
  EnterpriseUserAccount,
  purchaseOrderStatusFromJSON,
  purchaseOrderStatusToJSON,
} from "./enterprise";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.enterprise.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
/** QueryEnterpriseUndPurchaseOrderRequest is the request type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderRequest {
  /** purchase_order_id defines the PO to query for. */
  purchaseOrderId: bigint;
}
/** QueryEnterpriseUndPurchaseOrderResponse is the response type for the Query/EnterpriseUndPurchaseOrder RPC method. */
export interface QueryEnterpriseUndPurchaseOrderResponse {
  purchaseOrder: EnterpriseUndPurchaseOrder;
}
/**
 * QueryEnterpriseUndPurchaseOrdersRequest is the request type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersRequest {
  pagination?: PageRequest;
  purchaser: string;
  status: PurchaseOrderStatus;
}
/**
 * QueryEnterpriseUndPurchaseOrdersResponse is the response type for the Query/EnterpriseUndPurchaseOrders RPC
 * method
 */
export interface QueryEnterpriseUndPurchaseOrdersResponse {
  /** purchase_orders is the list of all purchase orders */
  purchaseOrders: EnterpriseUndPurchaseOrder[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryLockedUndByAddressRequest is the request type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressRequest {
  /** owner is the address to query */
  owner: string;
}
/** QueryLockedUndByAddressResponse is the response type for the Query/LockedUndByAddress RPC method */
export interface QueryLockedUndByAddressResponse {
  amount: Coin;
}
/** QueryTotalLockedRequest is the request type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedRequest {}
/** QueryTotalLockedResponse is the response type for the Query/TotalLocked RPC method */
export interface QueryTotalLockedResponse {
  amount: Coin;
}
/** QueryTotalUnlockedRequest is the request type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedRequest {}
/** QueryTotalUnlockedResponse is the response type for the Query/TotalUnlocked RPC method */
export interface QueryTotalUnlockedResponse {
  amount: Coin;
}
/** QueryEnterpriseSupplyRequest is the request type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyRequest {}
/** QueryEnterpriseSupplyResponse is the response type for the Query/EnterpriseSupply RPC method */
export interface QueryEnterpriseSupplyResponse {
  supply: UndSupply;
}
/** QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyRequest {
  pagination?: PageRequest;
}
/** QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC method */
export interface QueryTotalSupplyResponse {
  supply: Coin[];
  pagination?: PageResponse;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
  /** denom is the coin denom to query balances for. */
  denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
  /** amount is the supply of the coin. */
  amount: Coin;
}
/** QueryWhitelistRequest is the request type for the Query/Whitelist RPC method. */
export interface QueryWhitelistRequest {}
/** QueryWhitelistResponse is the response type for the Query/Whitelist RPC method. */
export interface QueryWhitelistResponse {
  addresses: string[];
}
/** QueryWhitelistedRequest is the request type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedRequest {
  /** address is the address to query */
  address: string;
}
/** QueryWhitelistedResponse is the response type for the Query/Whitelisted RPC method. */
export interface QueryWhitelistedResponse {
  address: string;
  whitelisted: boolean;
}
/** QueryEnterpriseAccountRequest is the request type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountRequest {
  /** address is the address to query */
  address: string;
}
/** QueryEnterpriseAccountResponse is the response type for the Query/EnterpriseAccount RPC method. */
export interface QueryEnterpriseAccountResponse {
  account: EnterpriseUserAccount;
}
/** QueryTotalSpentEFUNDRequest is the request type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDRequest {}
/** QueryTotalSpentEFUNDResponse is the response type for the Query/TotalSpentEFUND RPC method. */
export interface QueryTotalSpentEFUNDResponse {
  amount: Coin;
}
/** QuerySpentEFUNDByAddressRequest is the request type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressRequest {
  /** address is the address to query */
  address: string;
}
/** QuerySpentEFUNDByAddressResponse is the response type for the Query/SpentEFUNDByAddress RPC method. */
export interface QuerySpentEFUNDByAddressResponse {
  amount: Coin;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryParamsRequest",
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
  typeUrl: "/mainchain.enterprise.v1.QueryParamsResponse",
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
function createBaseQueryEnterpriseUndPurchaseOrderRequest(): QueryEnterpriseUndPurchaseOrderRequest {
  return {
    purchaseOrderId: BigInt(0),
  };
}
export const QueryEnterpriseUndPurchaseOrderRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderRequest",
  encode(
    message: QueryEnterpriseUndPurchaseOrderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.purchaseOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseOrderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEnterpriseUndPurchaseOrderRequest {
    const obj = createBaseQueryEnterpriseUndPurchaseOrderRequest();
    if (isSet(object.purchaseOrderId)) obj.purchaseOrderId = BigInt(object.purchaseOrderId.toString());
    return obj;
  },
  toJSON(message: QueryEnterpriseUndPurchaseOrderRequest): unknown {
    const obj: any = {};
    message.purchaseOrderId !== undefined &&
      (obj.purchaseOrderId = (message.purchaseOrderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseUndPurchaseOrderRequest>, I>>(
    object: I,
  ): QueryEnterpriseUndPurchaseOrderRequest {
    const message = createBaseQueryEnterpriseUndPurchaseOrderRequest();
    if (object.purchaseOrderId !== undefined && object.purchaseOrderId !== null) {
      message.purchaseOrderId = BigInt(object.purchaseOrderId.toString());
    }
    return message;
  },
};
function createBaseQueryEnterpriseUndPurchaseOrderResponse(): QueryEnterpriseUndPurchaseOrderResponse {
  return {
    purchaseOrder: EnterpriseUndPurchaseOrder.fromPartial({}),
  };
}
export const QueryEnterpriseUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrderResponse",
  encode(
    message: QueryEnterpriseUndPurchaseOrderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.purchaseOrder !== undefined) {
      EnterpriseUndPurchaseOrder.encode(message.purchaseOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrder = EnterpriseUndPurchaseOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEnterpriseUndPurchaseOrderResponse {
    const obj = createBaseQueryEnterpriseUndPurchaseOrderResponse();
    if (isSet(object.purchaseOrder))
      obj.purchaseOrder = EnterpriseUndPurchaseOrder.fromJSON(object.purchaseOrder);
    return obj;
  },
  toJSON(message: QueryEnterpriseUndPurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseOrder !== undefined &&
      (obj.purchaseOrder = message.purchaseOrder
        ? EnterpriseUndPurchaseOrder.toJSON(message.purchaseOrder)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseUndPurchaseOrderResponse>, I>>(
    object: I,
  ): QueryEnterpriseUndPurchaseOrderResponse {
    const message = createBaseQueryEnterpriseUndPurchaseOrderResponse();
    if (object.purchaseOrder !== undefined && object.purchaseOrder !== null) {
      message.purchaseOrder = EnterpriseUndPurchaseOrder.fromPartial(object.purchaseOrder);
    }
    return message;
  },
};
function createBaseQueryEnterpriseUndPurchaseOrdersRequest(): QueryEnterpriseUndPurchaseOrdersRequest {
  return {
    pagination: undefined,
    purchaser: "",
    status: 0,
  };
}
export const QueryEnterpriseUndPurchaseOrdersRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersRequest",
  encode(
    message: QueryEnterpriseUndPurchaseOrdersRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.purchaser = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEnterpriseUndPurchaseOrdersRequest {
    const obj = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.purchaser)) obj.purchaser = String(object.purchaser);
    if (isSet(object.status)) obj.status = purchaseOrderStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: QueryEnterpriseUndPurchaseOrdersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.purchaser !== undefined && (obj.purchaser = message.purchaser);
    message.status !== undefined && (obj.status = purchaseOrderStatusToJSON(message.status));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseUndPurchaseOrdersRequest>, I>>(
    object: I,
  ): QueryEnterpriseUndPurchaseOrdersRequest {
    const message = createBaseQueryEnterpriseUndPurchaseOrdersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    message.purchaser = object.purchaser ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};
function createBaseQueryEnterpriseUndPurchaseOrdersResponse(): QueryEnterpriseUndPurchaseOrdersResponse {
  return {
    purchaseOrders: [],
    pagination: undefined,
  };
}
export const QueryEnterpriseUndPurchaseOrdersResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseUndPurchaseOrdersResponse",
  encode(
    message: QueryEnterpriseUndPurchaseOrdersResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.purchaseOrders) {
      EnterpriseUndPurchaseOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseUndPurchaseOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrders.push(EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryEnterpriseUndPurchaseOrdersResponse {
    const obj = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
    if (Array.isArray(object?.purchaseOrders))
      obj.purchaseOrders = object.purchaseOrders.map((e: any) => EnterpriseUndPurchaseOrder.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryEnterpriseUndPurchaseOrdersResponse): unknown {
    const obj: any = {};
    if (message.purchaseOrders) {
      obj.purchaseOrders = message.purchaseOrders.map((e) =>
        e ? EnterpriseUndPurchaseOrder.toJSON(e) : undefined,
      );
    } else {
      obj.purchaseOrders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseUndPurchaseOrdersResponse>, I>>(
    object: I,
  ): QueryEnterpriseUndPurchaseOrdersResponse {
    const message = createBaseQueryEnterpriseUndPurchaseOrdersResponse();
    message.purchaseOrders =
      object.purchaseOrders?.map((e) => EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryLockedUndByAddressRequest(): QueryLockedUndByAddressRequest {
  return {
    owner: "",
  };
}
export const QueryLockedUndByAddressRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressRequest",
  encode(
    message: QueryLockedUndByAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedUndByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedUndByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLockedUndByAddressRequest {
    const obj = createBaseQueryLockedUndByAddressRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryLockedUndByAddressRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLockedUndByAddressRequest>, I>>(
    object: I,
  ): QueryLockedUndByAddressRequest {
    const message = createBaseQueryLockedUndByAddressRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQueryLockedUndByAddressResponse(): QueryLockedUndByAddressResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QueryLockedUndByAddressResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryLockedUndByAddressResponse",
  encode(
    message: QueryLockedUndByAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedUndByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedUndByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLockedUndByAddressResponse {
    const obj = createBaseQueryLockedUndByAddressResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QueryLockedUndByAddressResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLockedUndByAddressResponse>, I>>(
    object: I,
  ): QueryLockedUndByAddressResponse {
    const message = createBaseQueryLockedUndByAddressResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseQueryTotalLockedRequest(): QueryTotalLockedRequest {
  return {};
}
export const QueryTotalLockedRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedRequest",
  encode(_: QueryTotalLockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLockedRequest();
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
  fromJSON(_: any): QueryTotalLockedRequest {
    const obj = createBaseQueryTotalLockedRequest();
    return obj;
  },
  toJSON(_: QueryTotalLockedRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalLockedRequest>, I>>(_: I): QueryTotalLockedRequest {
    const message = createBaseQueryTotalLockedRequest();
    return message;
  },
};
function createBaseQueryTotalLockedResponse(): QueryTotalLockedResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QueryTotalLockedResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalLockedResponse",
  encode(message: QueryTotalLockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLockedResponse {
    const obj = createBaseQueryTotalLockedResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QueryTotalLockedResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalLockedResponse>, I>>(
    object: I,
  ): QueryTotalLockedResponse {
    const message = createBaseQueryTotalLockedResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseQueryTotalUnlockedRequest(): QueryTotalUnlockedRequest {
  return {};
}
export const QueryTotalUnlockedRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedRequest",
  encode(_: QueryTotalUnlockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnlockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnlockedRequest();
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
  fromJSON(_: any): QueryTotalUnlockedRequest {
    const obj = createBaseQueryTotalUnlockedRequest();
    return obj;
  },
  toJSON(_: QueryTotalUnlockedRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalUnlockedRequest>, I>>(_: I): QueryTotalUnlockedRequest {
    const message = createBaseQueryTotalUnlockedRequest();
    return message;
  },
};
function createBaseQueryTotalUnlockedResponse(): QueryTotalUnlockedResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QueryTotalUnlockedResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalUnlockedResponse",
  encode(message: QueryTotalUnlockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnlockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnlockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalUnlockedResponse {
    const obj = createBaseQueryTotalUnlockedResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QueryTotalUnlockedResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalUnlockedResponse>, I>>(
    object: I,
  ): QueryTotalUnlockedResponse {
    const message = createBaseQueryTotalUnlockedResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseQueryEnterpriseSupplyRequest(): QueryEnterpriseSupplyRequest {
  return {};
}
export const QueryEnterpriseSupplyRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyRequest",
  encode(_: QueryEnterpriseSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseSupplyRequest();
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
  fromJSON(_: any): QueryEnterpriseSupplyRequest {
    const obj = createBaseQueryEnterpriseSupplyRequest();
    return obj;
  },
  toJSON(_: QueryEnterpriseSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseSupplyRequest>, I>>(
    _: I,
  ): QueryEnterpriseSupplyRequest {
    const message = createBaseQueryEnterpriseSupplyRequest();
    return message;
  },
};
function createBaseQueryEnterpriseSupplyResponse(): QueryEnterpriseSupplyResponse {
  return {
    supply: UndSupply.fromPartial({}),
  };
}
export const QueryEnterpriseSupplyResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseSupplyResponse",
  encode(message: QueryEnterpriseSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supply !== undefined) {
      UndSupply.encode(message.supply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = UndSupply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEnterpriseSupplyResponse {
    const obj = createBaseQueryEnterpriseSupplyResponse();
    if (isSet(object.supply)) obj.supply = UndSupply.fromJSON(object.supply);
    return obj;
  },
  toJSON(message: QueryEnterpriseSupplyResponse): unknown {
    const obj: any = {};
    message.supply !== undefined &&
      (obj.supply = message.supply ? UndSupply.toJSON(message.supply) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseSupplyResponse>, I>>(
    object: I,
  ): QueryEnterpriseSupplyResponse {
    const message = createBaseQueryEnterpriseSupplyResponse();
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = UndSupply.fromPartial(object.supply);
    }
    return message;
  },
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {
    pagination: undefined,
  };
}
export const QueryTotalSupplyRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyRequest",
  encode(message: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSupplyRequest {
    const obj = createBaseQueryTotalSupplyRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryTotalSupplyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(object: I): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    supply: [],
    pagination: undefined,
  };
}
export const QueryTotalSupplyResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSupplyResponse",
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryTotalSupplyResponse {
    const obj = createBaseQueryTotalSupplyResponse();
    if (Array.isArray(object?.supply)) obj.supply = object.supply.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.supply = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(
    object: I,
  ): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
  return {
    denom: "",
  };
}
export const QuerySupplyOfRequest = {
  typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfRequest",
  encode(message: QuerySupplyOfRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyOfRequest {
    const obj = createBaseQuerySupplyOfRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QuerySupplyOfRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(object: I): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QuerySupplyOfResponse = {
  typeUrl: "/mainchain.enterprise.v1.QuerySupplyOfResponse",
  encode(message: QuerySupplyOfResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyOfResponse {
    const obj = createBaseQuerySupplyOfResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QuerySupplyOfResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(object: I): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseQueryWhitelistRequest(): QueryWhitelistRequest {
  return {};
}
export const QueryWhitelistRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistRequest",
  encode(_: QueryWhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistRequest();
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
  fromJSON(_: any): QueryWhitelistRequest {
    const obj = createBaseQueryWhitelistRequest();
    return obj;
  },
  toJSON(_: QueryWhitelistRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistRequest>, I>>(_: I): QueryWhitelistRequest {
    const message = createBaseQueryWhitelistRequest();
    return message;
  },
};
function createBaseQueryWhitelistResponse(): QueryWhitelistResponse {
  return {
    addresses: [],
  };
}
export const QueryWhitelistResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistResponse",
  encode(message: QueryWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWhitelistResponse {
    const obj = createBaseQueryWhitelistResponse();
    if (Array.isArray(object?.addresses)) obj.addresses = object.addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryWhitelistResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistResponse>, I>>(object: I): QueryWhitelistResponse {
    const message = createBaseQueryWhitelistResponse();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryWhitelistedRequest(): QueryWhitelistedRequest {
  return {
    address: "",
  };
}
export const QueryWhitelistedRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedRequest",
  encode(message: QueryWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWhitelistedRequest {
    const obj = createBaseQueryWhitelistedRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryWhitelistedRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedRequest>, I>>(object: I): QueryWhitelistedRequest {
    const message = createBaseQueryWhitelistedRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryWhitelistedResponse(): QueryWhitelistedResponse {
  return {
    address: "",
    whitelisted: false,
  };
}
export const QueryWhitelistedResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryWhitelistedResponse",
  encode(message: QueryWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.whitelisted === true) {
      writer.uint32(16).bool(message.whitelisted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWhitelistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.whitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWhitelistedResponse {
    const obj = createBaseQueryWhitelistedResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.whitelisted)) obj.whitelisted = Boolean(object.whitelisted);
    return obj;
  },
  toJSON(message: QueryWhitelistedResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.whitelisted !== undefined && (obj.whitelisted = message.whitelisted);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedResponse>, I>>(
    object: I,
  ): QueryWhitelistedResponse {
    const message = createBaseQueryWhitelistedResponse();
    message.address = object.address ?? "";
    message.whitelisted = object.whitelisted ?? false;
    return message;
  },
};
function createBaseQueryEnterpriseAccountRequest(): QueryEnterpriseAccountRequest {
  return {
    address: "",
  };
}
export const QueryEnterpriseAccountRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountRequest",
  encode(message: QueryEnterpriseAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEnterpriseAccountRequest {
    const obj = createBaseQueryEnterpriseAccountRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryEnterpriseAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseAccountRequest>, I>>(
    object: I,
  ): QueryEnterpriseAccountRequest {
    const message = createBaseQueryEnterpriseAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryEnterpriseAccountResponse(): QueryEnterpriseAccountResponse {
  return {
    account: EnterpriseUserAccount.fromPartial({}),
  };
}
export const QueryEnterpriseAccountResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryEnterpriseAccountResponse",
  encode(
    message: QueryEnterpriseAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.account !== undefined) {
      EnterpriseUserAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEnterpriseAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEnterpriseAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = EnterpriseUserAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEnterpriseAccountResponse {
    const obj = createBaseQueryEnterpriseAccountResponse();
    if (isSet(object.account)) obj.account = EnterpriseUserAccount.fromJSON(object.account);
    return obj;
  },
  toJSON(message: QueryEnterpriseAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? EnterpriseUserAccount.toJSON(message.account) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEnterpriseAccountResponse>, I>>(
    object: I,
  ): QueryEnterpriseAccountResponse {
    const message = createBaseQueryEnterpriseAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = EnterpriseUserAccount.fromPartial(object.account);
    }
    return message;
  },
};
function createBaseQueryTotalSpentEFUNDRequest(): QueryTotalSpentEFUNDRequest {
  return {};
}
export const QueryTotalSpentEFUNDRequest = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDRequest",
  encode(_: QueryTotalSpentEFUNDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSpentEFUNDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSpentEFUNDRequest();
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
  fromJSON(_: any): QueryTotalSpentEFUNDRequest {
    const obj = createBaseQueryTotalSpentEFUNDRequest();
    return obj;
  },
  toJSON(_: QueryTotalSpentEFUNDRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSpentEFUNDRequest>, I>>(
    _: I,
  ): QueryTotalSpentEFUNDRequest {
    const message = createBaseQueryTotalSpentEFUNDRequest();
    return message;
  },
};
function createBaseQueryTotalSpentEFUNDResponse(): QueryTotalSpentEFUNDResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QueryTotalSpentEFUNDResponse = {
  typeUrl: "/mainchain.enterprise.v1.QueryTotalSpentEFUNDResponse",
  encode(message: QueryTotalSpentEFUNDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSpentEFUNDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSpentEFUNDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSpentEFUNDResponse {
    const obj = createBaseQueryTotalSpentEFUNDResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QueryTotalSpentEFUNDResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSpentEFUNDResponse>, I>>(
    object: I,
  ): QueryTotalSpentEFUNDResponse {
    const message = createBaseQueryTotalSpentEFUNDResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseQuerySpentEFUNDByAddressRequest(): QuerySpentEFUNDByAddressRequest {
  return {
    address: "",
  };
}
export const QuerySpentEFUNDByAddressRequest = {
  typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressRequest",
  encode(
    message: QuerySpentEFUNDByAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpentEFUNDByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpentEFUNDByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpentEFUNDByAddressRequest {
    const obj = createBaseQuerySpentEFUNDByAddressRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QuerySpentEFUNDByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySpentEFUNDByAddressRequest>, I>>(
    object: I,
  ): QuerySpentEFUNDByAddressRequest {
    const message = createBaseQuerySpentEFUNDByAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQuerySpentEFUNDByAddressResponse(): QuerySpentEFUNDByAddressResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QuerySpentEFUNDByAddressResponse = {
  typeUrl: "/mainchain.enterprise.v1.QuerySpentEFUNDByAddressResponse",
  encode(
    message: QuerySpentEFUNDByAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpentEFUNDByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpentEFUNDByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpentEFUNDByAddressResponse {
    const obj = createBaseQuerySpentEFUNDByAddressResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QuerySpentEFUNDByAddressResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySpentEFUNDByAddressResponse>, I>>(
    object: I,
  ): QuerySpentEFUNDByAddressResponse {
    const message = createBaseQuerySpentEFUNDByAddressResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/enterprise module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */
  EnterpriseUndPurchaseOrder(
    request: QueryEnterpriseUndPurchaseOrderRequest,
  ): Promise<QueryEnterpriseUndPurchaseOrderResponse>;
  /** EnterpriseUndPurchaseOrders queries all current purchase orders. */
  EnterpriseUndPurchaseOrders(
    request: QueryEnterpriseUndPurchaseOrdersRequest,
  ): Promise<QueryEnterpriseUndPurchaseOrdersResponse>;
  /** LockedUndByAddress queries an account address for their locked FUND */
  LockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse>;
  /** TotalLocked queries the total locked FUND */
  TotalLocked(request?: QueryTotalLockedRequest): Promise<QueryTotalLockedResponse>;
  /** TotalUnlocked queries the total Unlocked FUND */
  TotalUnlocked(request?: QueryTotalUnlockedRequest): Promise<QueryTotalUnlockedResponse>;
  /** EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */
  EnterpriseSupply(request?: QueryEnterpriseSupplyRequest): Promise<QueryEnterpriseSupplyResponse>;
  /**
   * TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
   * for general use, i.e. with locked eFUND removed from total for nund
   */
  TotalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
   * with locked eFUND removed from total for nund
   */
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /**
   * TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
   * for general use, i.e. with locked eFUND removed from total for nund
   */
  TotalSupplyOverwrite(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
   * with locked eFUND removed from total for nund
   */
  SupplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Whitelist queries whitelisted addresses authorised to raise new purchase orders */
  Whitelist(request?: QueryWhitelistRequest): Promise<QueryWhitelistResponse>;
  /** Whitelisted queries whether or not the given address is authorised to raise new purchase orders */
  Whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
  /** EnterpriseAccount queries an account address for their locked FUND and other data */
  EnterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse>;
  /** TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */
  TotalSpentEFUND(request?: QueryTotalSpentEFUNDRequest): Promise<QueryTotalSpentEFUNDResponse>;
  /** SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */
  SpentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EnterpriseUndPurchaseOrder = this.EnterpriseUndPurchaseOrder.bind(this);
    this.EnterpriseUndPurchaseOrders = this.EnterpriseUndPurchaseOrders.bind(this);
    this.LockedUndByAddress = this.LockedUndByAddress.bind(this);
    this.TotalLocked = this.TotalLocked.bind(this);
    this.TotalUnlocked = this.TotalUnlocked.bind(this);
    this.EnterpriseSupply = this.EnterpriseSupply.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.SupplyOf = this.SupplyOf.bind(this);
    this.TotalSupplyOverwrite = this.TotalSupplyOverwrite.bind(this);
    this.SupplyOfOverwrite = this.SupplyOfOverwrite.bind(this);
    this.Whitelist = this.Whitelist.bind(this);
    this.Whitelisted = this.Whitelisted.bind(this);
    this.EnterpriseAccount = this.EnterpriseAccount.bind(this);
    this.TotalSpentEFUND = this.TotalSpentEFUND.bind(this);
    this.SpentEFUNDByAddress = this.SpentEFUNDByAddress.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  EnterpriseUndPurchaseOrder(
    request: QueryEnterpriseUndPurchaseOrderRequest,
  ): Promise<QueryEnterpriseUndPurchaseOrderResponse> {
    const data = QueryEnterpriseUndPurchaseOrderRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrder", data);
    return promise.then((data) => QueryEnterpriseUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  EnterpriseUndPurchaseOrders(
    request: QueryEnterpriseUndPurchaseOrdersRequest,
  ): Promise<QueryEnterpriseUndPurchaseOrdersResponse> {
    const data = QueryEnterpriseUndPurchaseOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrders", data);
    return promise.then((data) => QueryEnterpriseUndPurchaseOrdersResponse.decode(new BinaryReader(data)));
  }
  LockedUndByAddress(request: QueryLockedUndByAddressRequest): Promise<QueryLockedUndByAddressResponse> {
    const data = QueryLockedUndByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "LockedUndByAddress", data);
    return promise.then((data) => QueryLockedUndByAddressResponse.decode(new BinaryReader(data)));
  }
  TotalLocked(request: QueryTotalLockedRequest = {}): Promise<QueryTotalLockedResponse> {
    const data = QueryTotalLockedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalLocked", data);
    return promise.then((data) => QueryTotalLockedResponse.decode(new BinaryReader(data)));
  }
  TotalUnlocked(request: QueryTotalUnlockedRequest = {}): Promise<QueryTotalUnlockedResponse> {
    const data = QueryTotalUnlockedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalUnlocked", data);
    return promise.then((data) => QueryTotalUnlockedResponse.decode(new BinaryReader(data)));
  }
  EnterpriseSupply(request: QueryEnterpriseSupplyRequest = {}): Promise<QueryEnterpriseSupplyResponse> {
    const data = QueryEnterpriseSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseSupply", data);
    return promise.then((data) => QueryEnterpriseSupplyResponse.decode(new BinaryReader(data)));
  }
  TotalSupply(
    request: QueryTotalSupplyRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSupply", data);
    return promise.then((data) => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SupplyOf", data);
    return promise.then((data) => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  TotalSupplyOverwrite(
    request: QueryTotalSupplyRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSupplyOverwrite", data);
    return promise.then((data) => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
  SupplyOfOverwrite(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SupplyOfOverwrite", data);
    return promise.then((data) => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  }
  Whitelist(request: QueryWhitelistRequest = {}): Promise<QueryWhitelistResponse> {
    const data = QueryWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelist", data);
    return promise.then((data) => QueryWhitelistResponse.decode(new BinaryReader(data)));
  }
  Whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse> {
    const data = QueryWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelisted", data);
    return promise.then((data) => QueryWhitelistedResponse.decode(new BinaryReader(data)));
  }
  EnterpriseAccount(request: QueryEnterpriseAccountRequest): Promise<QueryEnterpriseAccountResponse> {
    const data = QueryEnterpriseAccountRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseAccount", data);
    return promise.then((data) => QueryEnterpriseAccountResponse.decode(new BinaryReader(data)));
  }
  TotalSpentEFUND(request: QueryTotalSpentEFUNDRequest = {}): Promise<QueryTotalSpentEFUNDResponse> {
    const data = QueryTotalSpentEFUNDRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSpentEFUND", data);
    return promise.then((data) => QueryTotalSpentEFUNDResponse.decode(new BinaryReader(data)));
  }
  SpentEFUNDByAddress(request: QuerySpentEFUNDByAddressRequest): Promise<QuerySpentEFUNDByAddressResponse> {
    const data = QuerySpentEFUNDByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SpentEFUNDByAddress", data);
    return promise.then((data) => QuerySpentEFUNDByAddressResponse.decode(new BinaryReader(data)));
  }
}
