/* eslint-disable */
import { Params, EnterpriseUndPurchaseOrder, LockedUnd, SpentEFUND } from "./enterprise";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.enterprise.v1";
/** GenesisState defines the enterprise module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  startingPurchaseOrderId: bigint;
  purchaseOrders: EnterpriseUndPurchaseOrder[];
  lockedUnd: LockedUnd[];
  totalLocked: Coin;
  whitelist: string[];
  spentEfund: SpentEFUND[];
  totalSpent: Coin;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    startingPurchaseOrderId: BigInt(0),
    purchaseOrders: [],
    lockedUnd: [],
    totalLocked: Coin.fromPartial({}),
    whitelist: [],
    spentEfund: [],
    totalSpent: Coin.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.enterprise.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingPurchaseOrderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingPurchaseOrderId);
    }
    for (const v of message.purchaseOrders) {
      EnterpriseUndPurchaseOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lockedUnd) {
      LockedUnd.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalLocked !== undefined) {
      Coin.encode(message.totalLocked, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.whitelist) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.spentEfund) {
      SpentEFUND.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.totalSpent !== undefined) {
      Coin.encode(message.totalSpent, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.startingPurchaseOrderId = reader.uint64();
          break;
        case 3:
          message.purchaseOrders.push(EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lockedUnd.push(LockedUnd.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalLocked = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.whitelist.push(reader.string());
          break;
        case 7:
          message.spentEfund.push(SpentEFUND.decode(reader, reader.uint32()));
          break;
        case 8:
          message.totalSpent = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.startingPurchaseOrderId))
      obj.startingPurchaseOrderId = BigInt(object.startingPurchaseOrderId.toString());
    if (Array.isArray(object?.purchaseOrders))
      obj.purchaseOrders = object.purchaseOrders.map((e: any) => EnterpriseUndPurchaseOrder.fromJSON(e));
    if (Array.isArray(object?.lockedUnd))
      obj.lockedUnd = object.lockedUnd.map((e: any) => LockedUnd.fromJSON(e));
    if (isSet(object.totalLocked)) obj.totalLocked = Coin.fromJSON(object.totalLocked);
    if (Array.isArray(object?.whitelist)) obj.whitelist = object.whitelist.map((e: any) => String(e));
    if (Array.isArray(object?.spentEfund))
      obj.spentEfund = object.spentEfund.map((e: any) => SpentEFUND.fromJSON(e));
    if (isSet(object.totalSpent)) obj.totalSpent = Coin.fromJSON(object.totalSpent);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.startingPurchaseOrderId !== undefined &&
      (obj.startingPurchaseOrderId = (message.startingPurchaseOrderId || BigInt(0)).toString());
    if (message.purchaseOrders) {
      obj.purchaseOrders = message.purchaseOrders.map((e) =>
        e ? EnterpriseUndPurchaseOrder.toJSON(e) : undefined,
      );
    } else {
      obj.purchaseOrders = [];
    }
    if (message.lockedUnd) {
      obj.lockedUnd = message.lockedUnd.map((e) => (e ? LockedUnd.toJSON(e) : undefined));
    } else {
      obj.lockedUnd = [];
    }
    message.totalLocked !== undefined &&
      (obj.totalLocked = message.totalLocked ? Coin.toJSON(message.totalLocked) : undefined);
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e);
    } else {
      obj.whitelist = [];
    }
    if (message.spentEfund) {
      obj.spentEfund = message.spentEfund.map((e) => (e ? SpentEFUND.toJSON(e) : undefined));
    } else {
      obj.spentEfund = [];
    }
    message.totalSpent !== undefined &&
      (obj.totalSpent = message.totalSpent ? Coin.toJSON(message.totalSpent) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.startingPurchaseOrderId !== undefined && object.startingPurchaseOrderId !== null) {
      message.startingPurchaseOrderId = BigInt(object.startingPurchaseOrderId.toString());
    }
    message.purchaseOrders =
      object.purchaseOrders?.map((e) => EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
    message.lockedUnd = object.lockedUnd?.map((e) => LockedUnd.fromPartial(e)) || [];
    if (object.totalLocked !== undefined && object.totalLocked !== null) {
      message.totalLocked = Coin.fromPartial(object.totalLocked);
    }
    message.whitelist = object.whitelist?.map((e) => e) || [];
    message.spentEfund = object.spentEfund?.map((e) => SpentEFUND.fromPartial(e)) || [];
    if (object.totalSpent !== undefined && object.totalSpent !== null) {
      message.totalSpent = Coin.fromPartial(object.totalSpent);
    }
    return message;
  },
};
