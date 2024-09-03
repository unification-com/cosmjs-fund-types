/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.beacon.v1";
/** Beacon holds metadata about a registered beacon */
export interface Beacon {
  /** beacon_id is the id of the beacon */
  beaconId: bigint;
  /** moniker is the readable id of the beacon */
  moniker: string;
  /** name is the human friendly name of the beacon */
  name: string;
  /** last_timestamp_id is the current highest recorded timestamp id for the beacon */
  lastTimestampId: bigint;
  /** first_id_in_state is the lowest recorded timestamp id currently held in state for the beacon */
  firstIdInState: bigint;
  /** num_in_state is the current number of timestamps stored in state for the beacon */
  numInState: bigint;
  /** reg_time is the unix epoch of the beacon's registration time */
  regTime: bigint;
  /** owner is the owner address of the beacon */
  owner: string;
}
/** BeaconStorageLimit holds tata about the beacon's current in-state storage limit */
export interface BeaconStorageLimit {
  /** beacon_id is the id of the beacon */
  beaconId: bigint;
  /** in_state_limit is the current maximum number of timestmamps that will be held in state for the beacon */
  inStateLimit: bigint;
}
/** BeaconTimestamp holds each hash submitted to a registered beacon */
export interface BeaconTimestamp {
  /** timestamp_id is the id of the timestamp */
  timestampId: bigint;
  /** submit_time is the unix epoch of the timestamp's record time */
  submitTime: bigint;
  /** hash is the actual data stored for the timestamp */
  hash: string;
}
/** Params defines the parameters for the beacon module. */
export interface Params {
  /** fee_register is the cost to register a beacon */
  feeRegister: bigint;
  /** fee_record is the cost to record a single timestamp */
  feeRecord: bigint;
  /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
  feePurchaseStorage: bigint;
  /** denom is the expected denomination to pay for fees, e.g. nund */
  denom: string;
  /** default_storage_limit is the default in-state storage limit for all new beacons */
  defaultStorageLimit: bigint;
  /** max_storage_limit is the maximum in-state storage slots any one beacon can have */
  maxStorageLimit: bigint;
}
function createBaseBeacon(): Beacon {
  return {
    beaconId: BigInt(0),
    moniker: "",
    name: "",
    lastTimestampId: BigInt(0),
    firstIdInState: BigInt(0),
    numInState: BigInt(0),
    regTime: BigInt(0),
    owner: "",
  };
}
export const Beacon = {
  typeUrl: "/mainchain.beacon.v1.Beacon",
  encode(message: Beacon, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.lastTimestampId !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastTimestampId);
    }
    if (message.firstIdInState !== BigInt(0)) {
      writer.uint32(40).uint64(message.firstIdInState);
    }
    if (message.numInState !== BigInt(0)) {
      writer.uint32(48).uint64(message.numInState);
    }
    if (message.regTime !== BigInt(0)) {
      writer.uint32(56).uint64(message.regTime);
    }
    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Beacon {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeacon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.lastTimestampId = reader.uint64();
          break;
        case 5:
          message.firstIdInState = reader.uint64();
          break;
        case 6:
          message.numInState = reader.uint64();
          break;
        case 7:
          message.regTime = reader.uint64();
          break;
        case 8:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Beacon {
    const obj = createBaseBeacon();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.lastTimestampId)) obj.lastTimestampId = BigInt(object.lastTimestampId.toString());
    if (isSet(object.firstIdInState)) obj.firstIdInState = BigInt(object.firstIdInState.toString());
    if (isSet(object.numInState)) obj.numInState = BigInt(object.numInState.toString());
    if (isSet(object.regTime)) obj.regTime = BigInt(object.regTime.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: Beacon): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.name !== undefined && (obj.name = message.name);
    message.lastTimestampId !== undefined &&
      (obj.lastTimestampId = (message.lastTimestampId || BigInt(0)).toString());
    message.firstIdInState !== undefined &&
      (obj.firstIdInState = (message.firstIdInState || BigInt(0)).toString());
    message.numInState !== undefined && (obj.numInState = (message.numInState || BigInt(0)).toString());
    message.regTime !== undefined && (obj.regTime = (message.regTime || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Beacon>, I>>(object: I): Beacon {
    const message = createBaseBeacon();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    if (object.lastTimestampId !== undefined && object.lastTimestampId !== null) {
      message.lastTimestampId = BigInt(object.lastTimestampId.toString());
    }
    if (object.firstIdInState !== undefined && object.firstIdInState !== null) {
      message.firstIdInState = BigInt(object.firstIdInState.toString());
    }
    if (object.numInState !== undefined && object.numInState !== null) {
      message.numInState = BigInt(object.numInState.toString());
    }
    if (object.regTime !== undefined && object.regTime !== null) {
      message.regTime = BigInt(object.regTime.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseBeaconStorageLimit(): BeaconStorageLimit {
  return {
    beaconId: BigInt(0),
    inStateLimit: BigInt(0),
  };
}
export const BeaconStorageLimit = {
  typeUrl: "/mainchain.beacon.v1.BeaconStorageLimit",
  encode(message: BeaconStorageLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconStorageLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconStorageLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.inStateLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BeaconStorageLimit {
    const obj = createBaseBeaconStorageLimit();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.inStateLimit)) obj.inStateLimit = BigInt(object.inStateLimit.toString());
    return obj;
  },
  toJSON(message: BeaconStorageLimit): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.inStateLimit !== undefined && (obj.inStateLimit = (message.inStateLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BeaconStorageLimit>, I>>(object: I): BeaconStorageLimit {
    const message = createBaseBeaconStorageLimit();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    if (object.inStateLimit !== undefined && object.inStateLimit !== null) {
      message.inStateLimit = BigInt(object.inStateLimit.toString());
    }
    return message;
  },
};
function createBaseBeaconTimestamp(): BeaconTimestamp {
  return {
    timestampId: BigInt(0),
    submitTime: BigInt(0),
    hash: "",
  };
}
export const BeaconTimestamp = {
  typeUrl: "/mainchain.beacon.v1.BeaconTimestamp",
  encode(message: BeaconTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestampId !== BigInt(0)) {
      writer.uint32(8).uint64(message.timestampId);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(16).uint64(message.submitTime);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestampId = reader.uint64();
          break;
        case 2:
          message.submitTime = reader.uint64();
          break;
        case 3:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BeaconTimestamp {
    const obj = createBaseBeaconTimestamp();
    if (isSet(object.timestampId)) obj.timestampId = BigInt(object.timestampId.toString());
    if (isSet(object.submitTime)) obj.submitTime = BigInt(object.submitTime.toString());
    if (isSet(object.hash)) obj.hash = String(object.hash);
    return obj;
  },
  toJSON(message: BeaconTimestamp): unknown {
    const obj: any = {};
    message.timestampId !== undefined && (obj.timestampId = (message.timestampId || BigInt(0)).toString());
    message.submitTime !== undefined && (obj.submitTime = (message.submitTime || BigInt(0)).toString());
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BeaconTimestamp>, I>>(object: I): BeaconTimestamp {
    const message = createBaseBeaconTimestamp();
    if (object.timestampId !== undefined && object.timestampId !== null) {
      message.timestampId = BigInt(object.timestampId.toString());
    }
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = BigInt(object.submitTime.toString());
    }
    message.hash = object.hash ?? "";
    return message;
  },
};
function createBaseParams(): Params {
  return {
    feeRegister: BigInt(0),
    feeRecord: BigInt(0),
    feePurchaseStorage: BigInt(0),
    denom: "",
    defaultStorageLimit: BigInt(0),
    maxStorageLimit: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/mainchain.beacon.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeRegister !== BigInt(0)) {
      writer.uint32(8).uint64(message.feeRegister);
    }
    if (message.feeRecord !== BigInt(0)) {
      writer.uint32(16).uint64(message.feeRecord);
    }
    if (message.feePurchaseStorage !== BigInt(0)) {
      writer.uint32(24).uint64(message.feePurchaseStorage);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.defaultStorageLimit !== BigInt(0)) {
      writer.uint32(40).uint64(message.defaultStorageLimit);
    }
    if (message.maxStorageLimit !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxStorageLimit);
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
          message.feeRegister = reader.uint64();
          break;
        case 2:
          message.feeRecord = reader.uint64();
          break;
        case 3:
          message.feePurchaseStorage = reader.uint64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.defaultStorageLimit = reader.uint64();
          break;
        case 6:
          message.maxStorageLimit = reader.uint64();
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
    if (isSet(object.feeRegister)) obj.feeRegister = BigInt(object.feeRegister.toString());
    if (isSet(object.feeRecord)) obj.feeRecord = BigInt(object.feeRecord.toString());
    if (isSet(object.feePurchaseStorage))
      obj.feePurchaseStorage = BigInt(object.feePurchaseStorage.toString());
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.defaultStorageLimit))
      obj.defaultStorageLimit = BigInt(object.defaultStorageLimit.toString());
    if (isSet(object.maxStorageLimit)) obj.maxStorageLimit = BigInt(object.maxStorageLimit.toString());
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.feeRegister !== undefined && (obj.feeRegister = (message.feeRegister || BigInt(0)).toString());
    message.feeRecord !== undefined && (obj.feeRecord = (message.feeRecord || BigInt(0)).toString());
    message.feePurchaseStorage !== undefined &&
      (obj.feePurchaseStorage = (message.feePurchaseStorage || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.defaultStorageLimit !== undefined &&
      (obj.defaultStorageLimit = (message.defaultStorageLimit || BigInt(0)).toString());
    message.maxStorageLimit !== undefined &&
      (obj.maxStorageLimit = (message.maxStorageLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.feeRegister !== undefined && object.feeRegister !== null) {
      message.feeRegister = BigInt(object.feeRegister.toString());
    }
    if (object.feeRecord !== undefined && object.feeRecord !== null) {
      message.feeRecord = BigInt(object.feeRecord.toString());
    }
    if (object.feePurchaseStorage !== undefined && object.feePurchaseStorage !== null) {
      message.feePurchaseStorage = BigInt(object.feePurchaseStorage.toString());
    }
    message.denom = object.denom ?? "";
    if (object.defaultStorageLimit !== undefined && object.defaultStorageLimit !== null) {
      message.defaultStorageLimit = BigInt(object.defaultStorageLimit.toString());
    }
    if (object.maxStorageLimit !== undefined && object.maxStorageLimit !== null) {
      message.maxStorageLimit = BigInt(object.maxStorageLimit.toString());
    }
    return message;
  },
};
