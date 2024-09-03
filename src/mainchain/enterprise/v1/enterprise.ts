/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.enterprise.v1";
/** PurchaseOrderStatus enumerates the valid statuses for a given purchase order. */
export enum PurchaseOrderStatus {
  /** STATUS_NIL - STATUS_NIL defines a no-op status. */
  STATUS_NIL = 0,
  /** STATUS_RAISED - STATUS_RAISED defines a raised status. */
  STATUS_RAISED = 1,
  /** STATUS_ACCEPTED - STATUS_ACCEPTED defines an accepted status. */
  STATUS_ACCEPTED = 2,
  /** STATUS_REJECTED - STATUS_REJECTED defines a rejected status. */
  STATUS_REJECTED = 3,
  /** STATUS_COMPLETED - STATUS_COMPLETED defines a completed status. */
  STATUS_COMPLETED = 4,
  UNRECOGNIZED = -1,
}
export function purchaseOrderStatusFromJSON(object: any): PurchaseOrderStatus {
  switch (object) {
    case 0:
    case "STATUS_NIL":
      return PurchaseOrderStatus.STATUS_NIL;
    case 1:
    case "STATUS_RAISED":
      return PurchaseOrderStatus.STATUS_RAISED;
    case 2:
    case "STATUS_ACCEPTED":
      return PurchaseOrderStatus.STATUS_ACCEPTED;
    case 3:
    case "STATUS_REJECTED":
      return PurchaseOrderStatus.STATUS_REJECTED;
    case 4:
    case "STATUS_COMPLETED":
      return PurchaseOrderStatus.STATUS_COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PurchaseOrderStatus.UNRECOGNIZED;
  }
}
export function purchaseOrderStatusToJSON(object: PurchaseOrderStatus): string {
  switch (object) {
    case PurchaseOrderStatus.STATUS_NIL:
      return "STATUS_NIL";
    case PurchaseOrderStatus.STATUS_RAISED:
      return "STATUS_RAISED";
    case PurchaseOrderStatus.STATUS_ACCEPTED:
      return "STATUS_ACCEPTED";
    case PurchaseOrderStatus.STATUS_REJECTED:
      return "STATUS_REJECTED";
    case PurchaseOrderStatus.STATUS_COMPLETED:
      return "STATUS_COMPLETED";
    case PurchaseOrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** WhitelistAction enumerates the valid actions for whitelisting addresses. */
export enum WhitelistAction {
  /** WHITELIST_ACTION_NIL - WHITELIST_ACTION_NIL defines a no-op action. */
  WHITELIST_ACTION_NIL = 0,
  /** WHITELIST_ACTION_ADD - WHITELIST_ACTION_ADD defines an add action. */
  WHITELIST_ACTION_ADD = 1,
  /** WHITELIST_ACTION_REMOVE - WHITELIST_ACTION_REMOVE defines a remove action. */
  WHITELIST_ACTION_REMOVE = 2,
  UNRECOGNIZED = -1,
}
export function whitelistActionFromJSON(object: any): WhitelistAction {
  switch (object) {
    case 0:
    case "WHITELIST_ACTION_NIL":
      return WhitelistAction.WHITELIST_ACTION_NIL;
    case 1:
    case "WHITELIST_ACTION_ADD":
      return WhitelistAction.WHITELIST_ACTION_ADD;
    case 2:
    case "WHITELIST_ACTION_REMOVE":
      return WhitelistAction.WHITELIST_ACTION_REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WhitelistAction.UNRECOGNIZED;
  }
}
export function whitelistActionToJSON(object: WhitelistAction): string {
  switch (object) {
    case WhitelistAction.WHITELIST_ACTION_NIL:
      return "WHITELIST_ACTION_NIL";
    case WhitelistAction.WHITELIST_ACTION_ADD:
      return "WHITELIST_ACTION_ADD";
    case WhitelistAction.WHITELIST_ACTION_REMOVE:
      return "WHITELIST_ACTION_REMOVE";
    case WhitelistAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PurchaseOrderDecision defines a decision made for a given purchase order, ie,
 * whether to accept or reject
 */
export interface PurchaseOrderDecision {
  /** signer is an authorised address for making decisions */
  signer: string;
  /** decision is the decision made, i.e. accept/reject */
  decision: PurchaseOrderStatus;
  /** decision_time is a unix epoch value of the decision submission time */
  decisionTime: bigint;
}
/** EnterpriseUndPurchaseOrder defines a purchase order raised by a whitelisted address */
export interface EnterpriseUndPurchaseOrder {
  /** id is the purchase order ID */
  id: bigint;
  /** purchaser is the address of the user who raised the order */
  purchaser: string;
  /** amount is the amount being raised for */
  amount: Coin;
  /** status is the current PurchaseOrderStatus */
  status: PurchaseOrderStatus;
  /** raise_time is a unix epoch value of the order submission time */
  raiseTime: bigint;
  /** completion_time is a unix epoch value of the time the order was completed */
  completionTime: bigint;
  /** decisions is an array of decisions made by authorised addresses */
  decisions: PurchaseOrderDecision[];
}
/** PurchaseOrders defines a list of purchase orders */
export interface PurchaseOrders {
  purchaseOrders: EnterpriseUndPurchaseOrder[];
}
/** LockedUnd defines the amount of locked FUND for an account */
export interface LockedUnd {
  /** owner is the address of the locked FUND owner */
  owner: string;
  /** amount is the amount currently locked and available to pay for beacon/wrkchain fees */
  amount: Coin;
}
/** SpentEFUND defines the amount of spent eFUND for an account */
export interface SpentEFUND {
  /** owner is the address of the eFUND owner */
  owner: string;
  /** amount is the amount currently locked and available to pay for beacon/wrkchain fees */
  amount: Coin;
}
/** EnterpriseUserAccount defines data about an enterprise user */
export interface EnterpriseUserAccount {
  /** owner is the address of the account */
  owner: string;
  /**
   * locked_efund is the amount of eFUND the account currently has locked and only available to pay for
   * beacon/wrkchain fees
   */
  lockedEfund: Coin;
  /**
   * general_supply is the amount currently held in the bank module's supply - i.e. standard FUND in general supply
   * usable for anything (transfers, staking, standard tx fees etc.)
   */
  generalSupply: Coin;
  /** spent_efund is a running tally of how much eFUND the account has used so far to pay for beacon/wrkchain fees */
  spentEfund: Coin;
  /**
   * spendable is the sum of locked eFUND and general bank module FUND - i.e. how much can be used to pay
   * BEACON/Wrkchain fees all together
   */
  spendable: Coin;
}
/** UndSupply defines the current FUND supply, including locked */
export interface UndSupply {
  /** denom is the denomination, e.g. nund */
  denom: string;
  /** amount is the amount of unlocked FUND in general supply */
  amount: bigint;
  /** locked is the amount of locked FUND */
  locked: bigint;
  /** amount is the sum of locked and unlocked FUND */
  total: bigint;
}
/** WhitelistAddresses defines a list of whitelisted addresses authorised to raise enterprise purchase orders */
export interface WhitelistAddresses {
  /** WhitelistAddresses defines a list of whitelisted addresses authorised to raise enterprise purchase orders */
  addresses: string[];
}
/** Params defines the parameters for the enterprise module. */
export interface Params {
  /** ent_signers is a list of addresses authorised to make decisions on raised purchase orders */
  entSigners: string;
  /** denom is the denomination of eFUND, e.g. nund */
  denom: string;
  /** min_accepts is the minumum number of ent_signers required to accept a PO before it is processed and efUND minted */
  minAccepts: bigint;
  /** decision_time_limit is the time limit within which all decisions must be made for a raised purchase order. */
  decisionTimeLimit: bigint;
}
function createBasePurchaseOrderDecision(): PurchaseOrderDecision {
  return {
    signer: "",
    decision: 0,
    decisionTime: BigInt(0),
  };
}
export const PurchaseOrderDecision = {
  typeUrl: "/mainchain.enterprise.v1.PurchaseOrderDecision",
  encode(message: PurchaseOrderDecision, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.decision !== 0) {
      writer.uint32(16).int32(message.decision);
    }
    if (message.decisionTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.decisionTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PurchaseOrderDecision {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurchaseOrderDecision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.decision = reader.int32() as any;
          break;
        case 3:
          message.decisionTime = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PurchaseOrderDecision {
    const obj = createBasePurchaseOrderDecision();
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.decision)) obj.decision = purchaseOrderStatusFromJSON(object.decision);
    if (isSet(object.decisionTime)) obj.decisionTime = BigInt(object.decisionTime.toString());
    return obj;
  },
  toJSON(message: PurchaseOrderDecision): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.decision !== undefined && (obj.decision = purchaseOrderStatusToJSON(message.decision));
    message.decisionTime !== undefined && (obj.decisionTime = (message.decisionTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PurchaseOrderDecision>, I>>(object: I): PurchaseOrderDecision {
    const message = createBasePurchaseOrderDecision();
    message.signer = object.signer ?? "";
    message.decision = object.decision ?? 0;
    if (object.decisionTime !== undefined && object.decisionTime !== null) {
      message.decisionTime = BigInt(object.decisionTime.toString());
    }
    return message;
  },
};
function createBaseEnterpriseUndPurchaseOrder(): EnterpriseUndPurchaseOrder {
  return {
    id: BigInt(0),
    purchaser: "",
    amount: Coin.fromPartial({}),
    status: 0,
    raiseTime: BigInt(0),
    completionTime: BigInt(0),
    decisions: [],
  };
}
export const EnterpriseUndPurchaseOrder = {
  typeUrl: "/mainchain.enterprise.v1.EnterpriseUndPurchaseOrder",
  encode(message: EnterpriseUndPurchaseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.purchaser !== "") {
      writer.uint32(18).string(message.purchaser);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.raiseTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.raiseTime);
    }
    if (message.completionTime !== BigInt(0)) {
      writer.uint32(48).uint64(message.completionTime);
    }
    for (const v of message.decisions) {
      PurchaseOrderDecision.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnterpriseUndPurchaseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnterpriseUndPurchaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.purchaser = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.raiseTime = reader.uint64();
          break;
        case 6:
          message.completionTime = reader.uint64();
          break;
        case 7:
          message.decisions.push(PurchaseOrderDecision.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnterpriseUndPurchaseOrder {
    const obj = createBaseEnterpriseUndPurchaseOrder();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.purchaser)) obj.purchaser = String(object.purchaser);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.status)) obj.status = purchaseOrderStatusFromJSON(object.status);
    if (isSet(object.raiseTime)) obj.raiseTime = BigInt(object.raiseTime.toString());
    if (isSet(object.completionTime)) obj.completionTime = BigInt(object.completionTime.toString());
    if (Array.isArray(object?.decisions))
      obj.decisions = object.decisions.map((e: any) => PurchaseOrderDecision.fromJSON(e));
    return obj;
  },
  toJSON(message: EnterpriseUndPurchaseOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.purchaser !== undefined && (obj.purchaser = message.purchaser);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.status !== undefined && (obj.status = purchaseOrderStatusToJSON(message.status));
    message.raiseTime !== undefined && (obj.raiseTime = (message.raiseTime || BigInt(0)).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = (message.completionTime || BigInt(0)).toString());
    if (message.decisions) {
      obj.decisions = message.decisions.map((e) => (e ? PurchaseOrderDecision.toJSON(e) : undefined));
    } else {
      obj.decisions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EnterpriseUndPurchaseOrder>, I>>(
    object: I,
  ): EnterpriseUndPurchaseOrder {
    const message = createBaseEnterpriseUndPurchaseOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.purchaser = object.purchaser ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.status = object.status ?? 0;
    if (object.raiseTime !== undefined && object.raiseTime !== null) {
      message.raiseTime = BigInt(object.raiseTime.toString());
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = BigInt(object.completionTime.toString());
    }
    message.decisions = object.decisions?.map((e) => PurchaseOrderDecision.fromPartial(e)) || [];
    return message;
  },
};
function createBasePurchaseOrders(): PurchaseOrders {
  return {
    purchaseOrders: [],
  };
}
export const PurchaseOrders = {
  typeUrl: "/mainchain.enterprise.v1.PurchaseOrders",
  encode(message: PurchaseOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.purchaseOrders) {
      EnterpriseUndPurchaseOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PurchaseOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurchaseOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseOrders.push(EnterpriseUndPurchaseOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PurchaseOrders {
    const obj = createBasePurchaseOrders();
    if (Array.isArray(object?.purchaseOrders))
      obj.purchaseOrders = object.purchaseOrders.map((e: any) => EnterpriseUndPurchaseOrder.fromJSON(e));
    return obj;
  },
  toJSON(message: PurchaseOrders): unknown {
    const obj: any = {};
    if (message.purchaseOrders) {
      obj.purchaseOrders = message.purchaseOrders.map((e) =>
        e ? EnterpriseUndPurchaseOrder.toJSON(e) : undefined,
      );
    } else {
      obj.purchaseOrders = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PurchaseOrders>, I>>(object: I): PurchaseOrders {
    const message = createBasePurchaseOrders();
    message.purchaseOrders =
      object.purchaseOrders?.map((e) => EnterpriseUndPurchaseOrder.fromPartial(e)) || [];
    return message;
  },
};
function createBaseLockedUnd(): LockedUnd {
  return {
    owner: "",
    amount: Coin.fromPartial({}),
  };
}
export const LockedUnd = {
  typeUrl: "/mainchain.enterprise.v1.LockedUnd",
  encode(message: LockedUnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockedUnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedUnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
  fromJSON(object: any): LockedUnd {
    const obj = createBaseLockedUnd();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: LockedUnd): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LockedUnd>, I>>(object: I): LockedUnd {
    const message = createBaseLockedUnd();
    message.owner = object.owner ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseSpentEFUND(): SpentEFUND {
  return {
    owner: "",
    amount: Coin.fromPartial({}),
  };
}
export const SpentEFUND = {
  typeUrl: "/mainchain.enterprise.v1.SpentEFUND",
  encode(message: SpentEFUND, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpentEFUND {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpentEFUND();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
  fromJSON(object: any): SpentEFUND {
    const obj = createBaseSpentEFUND();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: SpentEFUND): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpentEFUND>, I>>(object: I): SpentEFUND {
    const message = createBaseSpentEFUND();
    message.owner = object.owner ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseEnterpriseUserAccount(): EnterpriseUserAccount {
  return {
    owner: "",
    lockedEfund: Coin.fromPartial({}),
    generalSupply: Coin.fromPartial({}),
    spentEfund: Coin.fromPartial({}),
    spendable: Coin.fromPartial({}),
  };
}
export const EnterpriseUserAccount = {
  typeUrl: "/mainchain.enterprise.v1.EnterpriseUserAccount",
  encode(message: EnterpriseUserAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.lockedEfund !== undefined) {
      Coin.encode(message.lockedEfund, writer.uint32(18).fork()).ldelim();
    }
    if (message.generalSupply !== undefined) {
      Coin.encode(message.generalSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.spentEfund !== undefined) {
      Coin.encode(message.spentEfund, writer.uint32(34).fork()).ldelim();
    }
    if (message.spendable !== undefined) {
      Coin.encode(message.spendable, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnterpriseUserAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnterpriseUserAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.lockedEfund = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.generalSupply = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.spentEfund = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.spendable = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnterpriseUserAccount {
    const obj = createBaseEnterpriseUserAccount();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.lockedEfund)) obj.lockedEfund = Coin.fromJSON(object.lockedEfund);
    if (isSet(object.generalSupply)) obj.generalSupply = Coin.fromJSON(object.generalSupply);
    if (isSet(object.spentEfund)) obj.spentEfund = Coin.fromJSON(object.spentEfund);
    if (isSet(object.spendable)) obj.spendable = Coin.fromJSON(object.spendable);
    return obj;
  },
  toJSON(message: EnterpriseUserAccount): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.lockedEfund !== undefined &&
      (obj.lockedEfund = message.lockedEfund ? Coin.toJSON(message.lockedEfund) : undefined);
    message.generalSupply !== undefined &&
      (obj.generalSupply = message.generalSupply ? Coin.toJSON(message.generalSupply) : undefined);
    message.spentEfund !== undefined &&
      (obj.spentEfund = message.spentEfund ? Coin.toJSON(message.spentEfund) : undefined);
    message.spendable !== undefined &&
      (obj.spendable = message.spendable ? Coin.toJSON(message.spendable) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EnterpriseUserAccount>, I>>(object: I): EnterpriseUserAccount {
    const message = createBaseEnterpriseUserAccount();
    message.owner = object.owner ?? "";
    if (object.lockedEfund !== undefined && object.lockedEfund !== null) {
      message.lockedEfund = Coin.fromPartial(object.lockedEfund);
    }
    if (object.generalSupply !== undefined && object.generalSupply !== null) {
      message.generalSupply = Coin.fromPartial(object.generalSupply);
    }
    if (object.spentEfund !== undefined && object.spentEfund !== null) {
      message.spentEfund = Coin.fromPartial(object.spentEfund);
    }
    if (object.spendable !== undefined && object.spendable !== null) {
      message.spendable = Coin.fromPartial(object.spendable);
    }
    return message;
  },
};
function createBaseUndSupply(): UndSupply {
  return {
    denom: "",
    amount: BigInt(0),
    locked: BigInt(0),
    total: BigInt(0),
  };
}
export const UndSupply = {
  typeUrl: "/mainchain.enterprise.v1.UndSupply",
  encode(message: UndSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.locked !== BigInt(0)) {
      writer.uint32(24).uint64(message.locked);
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.uint64();
          break;
        case 3:
          message.locked = reader.uint64();
          break;
        case 4:
          message.total = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UndSupply {
    const obj = createBaseUndSupply();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    if (isSet(object.locked)) obj.locked = BigInt(object.locked.toString());
    if (isSet(object.total)) obj.total = BigInt(object.total.toString());
    return obj;
  },
  toJSON(message: UndSupply): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    message.locked !== undefined && (obj.locked = (message.locked || BigInt(0)).toString());
    message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UndSupply>, I>>(object: I): UndSupply {
    const message = createBaseUndSupply();
    message.denom = object.denom ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = BigInt(object.locked.toString());
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total.toString());
    }
    return message;
  },
};
function createBaseWhitelistAddresses(): WhitelistAddresses {
  return {
    addresses: [],
  };
}
export const WhitelistAddresses = {
  typeUrl: "/mainchain.enterprise.v1.WhitelistAddresses",
  encode(message: WhitelistAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistAddresses();
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
  fromJSON(object: any): WhitelistAddresses {
    const obj = createBaseWhitelistAddresses();
    if (Array.isArray(object?.addresses)) obj.addresses = object.addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: WhitelistAddresses): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WhitelistAddresses>, I>>(object: I): WhitelistAddresses {
    const message = createBaseWhitelistAddresses();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseParams(): Params {
  return {
    entSigners: "",
    denom: "",
    minAccepts: BigInt(0),
    decisionTimeLimit: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/mainchain.enterprise.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entSigners !== "") {
      writer.uint32(10).string(message.entSigners);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.minAccepts !== BigInt(0)) {
      writer.uint32(24).uint64(message.minAccepts);
    }
    if (message.decisionTimeLimit !== BigInt(0)) {
      writer.uint32(32).uint64(message.decisionTimeLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entSigners = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.minAccepts = reader.uint64();
          break;
        case 4:
          message.decisionTimeLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.entSigners)) obj.entSigners = String(object.entSigners);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.minAccepts)) obj.minAccepts = BigInt(object.minAccepts.toString());
    if (isSet(object.decisionTimeLimit)) obj.decisionTimeLimit = BigInt(object.decisionTimeLimit.toString());
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.entSigners !== undefined && (obj.entSigners = message.entSigners);
    message.denom !== undefined && (obj.denom = message.denom);
    message.minAccepts !== undefined && (obj.minAccepts = (message.minAccepts || BigInt(0)).toString());
    message.decisionTimeLimit !== undefined &&
      (obj.decisionTimeLimit = (message.decisionTimeLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.entSigners = object.entSigners ?? "";
    message.denom = object.denom ?? "";
    if (object.minAccepts !== undefined && object.minAccepts !== null) {
      message.minAccepts = BigInt(object.minAccepts.toString());
    }
    if (object.decisionTimeLimit !== undefined && object.decisionTimeLimit !== null) {
      message.decisionTimeLimit = BigInt(object.decisionTimeLimit.toString());
    }
    return message;
  },
};
