/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import {
  PurchaseOrderStatus,
  WhitelistAction,
  Params,
  purchaseOrderStatusFromJSON,
  purchaseOrderStatusToJSON,
  whitelistActionFromJSON,
  whitelistActionToJSON,
} from "./enterprise";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.enterprise.v1";
/** MsgUndPurchaseOrder represents a message to raise a new purchase order */
export interface MsgUndPurchaseOrder {
  /** purchaser is the address of the account raising the purchase order */
  purchaser: string;
  /** amount is the amount of eFUND in nund */
  amount: Coin;
}
/** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
export interface MsgUndPurchaseOrderResponse {
  /** MsgUndPurchaseOrderResponse defines the Msg/UndPurchaseOrder response type. */
  purchaseOrderId: bigint;
}
/** MsgProcessUndPurchaseOrder represents a message to processed a raised purchase order */
export interface MsgProcessUndPurchaseOrder {
  /** purchase_order_id is the ID of the purchase order being raised */
  purchaseOrderId: bigint;
  /** decision is an enumerated PurchaseOrderStatus representing, for example accepted/rejected */
  decision: PurchaseOrderStatus;
  /** signer is the address of the authorised decision maker */
  signer: string;
}
/** MsgProcessUndPurchaseOrderResponse defines the Msg/ProcessUndPurchaseOrder response type. */
export interface MsgProcessUndPurchaseOrderResponse {}
/**
 * MsgWhitelistAddress represents a message to processed an address whitelist action.
 * only addresses whitelisted by an authorised decision maker can raise new purchase orders
 */
export interface MsgWhitelistAddress {
  /** address is the address for which the action is being executed */
  address: string;
  /** signer is the address of the authorised decision maker */
  signer: string;
  /** whitelist_action is the action being executed, and is either add or remove. */
  whitelistAction: WhitelistAction;
}
/** MsgWhitelistAddressResponse defines the Msg/WhitelistAddress response type. */
export interface MsgWhitelistAddressResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/staking parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgUndPurchaseOrder(): MsgUndPurchaseOrder {
  return {
    purchaser: "",
    amount: Coin.fromPartial({}),
  };
}
export const MsgUndPurchaseOrder = {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
  encode(message: MsgUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaser !== "") {
      writer.uint32(10).string(message.purchaser);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndPurchaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaser = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndPurchaseOrder {
    const obj = createBaseMsgUndPurchaseOrder();
    if (isSet(object.purchaser)) obj.purchaser = String(object.purchaser);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgUndPurchaseOrder): unknown {
    const obj: any = {};
    message.purchaser !== undefined && (obj.purchaser = message.purchaser);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndPurchaseOrder>, I>>(object: I): MsgUndPurchaseOrder {
    const message = createBaseMsgUndPurchaseOrder();
    message.purchaser = object.purchaser ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgUndPurchaseOrderResponse(): MsgUndPurchaseOrderResponse {
  return {
    purchaseOrderId: BigInt(0),
  };
}
export const MsgUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrderResponse",
  encode(message: MsgUndPurchaseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseOrderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndPurchaseOrderResponse();
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
  fromJSON(object: any): MsgUndPurchaseOrderResponse {
    const obj = createBaseMsgUndPurchaseOrderResponse();
    if (isSet(object.purchaseOrderId)) obj.purchaseOrderId = BigInt(object.purchaseOrderId.toString());
    return obj;
  },
  toJSON(message: MsgUndPurchaseOrderResponse): unknown {
    const obj: any = {};
    message.purchaseOrderId !== undefined &&
      (obj.purchaseOrderId = (message.purchaseOrderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndPurchaseOrderResponse>, I>>(
    object: I,
  ): MsgUndPurchaseOrderResponse {
    const message = createBaseMsgUndPurchaseOrderResponse();
    if (object.purchaseOrderId !== undefined && object.purchaseOrderId !== null) {
      message.purchaseOrderId = BigInt(object.purchaseOrderId.toString());
    }
    return message;
  },
};
function createBaseMsgProcessUndPurchaseOrder(): MsgProcessUndPurchaseOrder {
  return {
    purchaseOrderId: BigInt(0),
    decision: 0,
    signer: "",
  };
}
export const MsgProcessUndPurchaseOrder = {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
  encode(message: MsgProcessUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseOrderId);
    }
    if (message.decision !== 0) {
      writer.uint32(16).int32(message.decision);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessUndPurchaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrderId = reader.uint64();
          break;
        case 2:
          message.decision = reader.int32() as any;
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProcessUndPurchaseOrder {
    const obj = createBaseMsgProcessUndPurchaseOrder();
    if (isSet(object.purchaseOrderId)) obj.purchaseOrderId = BigInt(object.purchaseOrderId.toString());
    if (isSet(object.decision)) obj.decision = purchaseOrderStatusFromJSON(object.decision);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgProcessUndPurchaseOrder): unknown {
    const obj: any = {};
    message.purchaseOrderId !== undefined &&
      (obj.purchaseOrderId = (message.purchaseOrderId || BigInt(0)).toString());
    message.decision !== undefined && (obj.decision = purchaseOrderStatusToJSON(message.decision));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgProcessUndPurchaseOrder>, I>>(
    object: I,
  ): MsgProcessUndPurchaseOrder {
    const message = createBaseMsgProcessUndPurchaseOrder();
    if (object.purchaseOrderId !== undefined && object.purchaseOrderId !== null) {
      message.purchaseOrderId = BigInt(object.purchaseOrderId.toString());
    }
    message.decision = object.decision ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgProcessUndPurchaseOrderResponse(): MsgProcessUndPurchaseOrderResponse {
  return {};
}
export const MsgProcessUndPurchaseOrderResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrderResponse",
  encode(_: MsgProcessUndPurchaseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessUndPurchaseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessUndPurchaseOrderResponse();
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
  fromJSON(_: any): MsgProcessUndPurchaseOrderResponse {
    const obj = createBaseMsgProcessUndPurchaseOrderResponse();
    return obj;
  },
  toJSON(_: MsgProcessUndPurchaseOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgProcessUndPurchaseOrderResponse>, I>>(
    _: I,
  ): MsgProcessUndPurchaseOrderResponse {
    const message = createBaseMsgProcessUndPurchaseOrderResponse();
    return message;
  },
};
function createBaseMsgWhitelistAddress(): MsgWhitelistAddress {
  return {
    address: "",
    signer: "",
    whitelistAction: 0,
  };
}
export const MsgWhitelistAddress = {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
  encode(message: MsgWhitelistAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    if (message.whitelistAction !== 0) {
      writer.uint32(24).int32(message.whitelistAction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.signer = reader.string();
          break;
        case 3:
          message.whitelistAction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWhitelistAddress {
    const obj = createBaseMsgWhitelistAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.whitelistAction)) obj.whitelistAction = whitelistActionFromJSON(object.whitelistAction);
    return obj;
  },
  toJSON(message: MsgWhitelistAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.signer !== undefined && (obj.signer = message.signer);
    message.whitelistAction !== undefined &&
      (obj.whitelistAction = whitelistActionToJSON(message.whitelistAction));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWhitelistAddress>, I>>(object: I): MsgWhitelistAddress {
    const message = createBaseMsgWhitelistAddress();
    message.address = object.address ?? "";
    message.signer = object.signer ?? "";
    message.whitelistAction = object.whitelistAction ?? 0;
    return message;
  },
};
function createBaseMsgWhitelistAddressResponse(): MsgWhitelistAddressResponse {
  return {};
}
export const MsgWhitelistAddressResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddressResponse",
  encode(_: MsgWhitelistAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAddressResponse();
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
  fromJSON(_: any): MsgWhitelistAddressResponse {
    const obj = createBaseMsgWhitelistAddressResponse();
    return obj;
  },
  toJSON(_: MsgWhitelistAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWhitelistAddressResponse>, I>>(
    _: I,
  ): MsgWhitelistAddressResponse {
    const message = createBaseMsgWhitelistAddressResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/mainchain.enterprise.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
/** Msg defines the enterprise Msg service. */
export interface Msg {
  /** UndPurchaseOrder defines a method to create new purchase order. */
  UndPurchaseOrder(request: MsgUndPurchaseOrder): Promise<MsgUndPurchaseOrderResponse>;
  /** ProcessUndPurchaseOrder defines a method to process a decision on a purchase order. */
  ProcessUndPurchaseOrder(request: MsgProcessUndPurchaseOrder): Promise<MsgProcessUndPurchaseOrderResponse>;
  /** WhitelistAddress defines a method to execute a whitelist action. */
  WhitelistAddress(request: MsgWhitelistAddress): Promise<MsgWhitelistAddressResponse>;
  /**
   * UpdateParams defines an operation for updating the x/enterprise module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UndPurchaseOrder = this.UndPurchaseOrder.bind(this);
    this.ProcessUndPurchaseOrder = this.ProcessUndPurchaseOrder.bind(this);
    this.WhitelistAddress = this.WhitelistAddress.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  UndPurchaseOrder(request: MsgUndPurchaseOrder): Promise<MsgUndPurchaseOrderResponse> {
    const data = MsgUndPurchaseOrder.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "UndPurchaseOrder", data);
    return promise.then((data) => MsgUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  ProcessUndPurchaseOrder(request: MsgProcessUndPurchaseOrder): Promise<MsgProcessUndPurchaseOrderResponse> {
    const data = MsgProcessUndPurchaseOrder.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "ProcessUndPurchaseOrder", data);
    return promise.then((data) => MsgProcessUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  WhitelistAddress(request: MsgWhitelistAddress): Promise<MsgWhitelistAddressResponse> {
    const data = MsgWhitelistAddress.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "WhitelistAddress", data);
    return promise.then((data) => MsgWhitelistAddressResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("mainchain.enterprise.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
