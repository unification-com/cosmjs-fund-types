/* eslint-disable */
import { Params } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.beacon.v1";
/** MsgRegisterBeacon represents a message to register a new beacon */
export interface MsgRegisterBeacon {
  /** moniker is a short identifier for a beacon */
  moniker: string;
  /** name is a long name for a beacon */
  name: string;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
/** MsgRegisterBeaconResponse defines the Msg/RegisterBeacon response type. */
export interface MsgRegisterBeaconResponse {
  /** beacon_id is the id of the new beacon */
  beaconId: bigint;
}
/** MsgRecordBeaconTimestamp represents a message to record a timestamp for a registered beacon */
export interface MsgRecordBeaconTimestamp {
  /** beacon_id is the id of the beacon the timestamp is being submitted for */
  beaconId: bigint;
  /** hash is the hash or data being submitted */
  hash: string;
  /** submit_time is a unix epoch value of the submission time */
  submitTime: bigint;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
/** MsgRecordBeaconTimestampResponse defines the Msg/RecordBeacon response type. */
export interface MsgRecordBeaconTimestampResponse {
  /** beacon_id is the id of the beacon */
  beaconId: bigint;
  /** timestamp_id is the id of the new timestamp */
  timestampId: bigint;
}
/** MsgPurchaseBeaconStateStorage represents a message to purchase more beacon storage */
export interface MsgPurchaseBeaconStateStorage {
  /** beacon_id is the id of the beacon the storage is being purchased for */
  beaconId: bigint;
  /** number is the number of state storage spaces to purchase */
  number: bigint;
  /** owner is the address of the owner of the beacon */
  owner: string;
}
/** MsgPurchaseBeaconStateStorageResponse defines the Msg/PurchaseBeaconStateStorage response type. */
export interface MsgPurchaseBeaconStateStorageResponse {
  /** beacon_id is the id of the beacon the storage is being purchased for */
  beaconId: bigint;
  /** number_purchased is the number of state storage spaces purchased */
  numberPurchased: bigint;
  /** num_can_purchase is the number of remaining slots available for purchase */
  numCanPurchase: bigint;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/beacon parameters to update.
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
function createBaseMsgRegisterBeacon(): MsgRegisterBeacon {
  return {
    moniker: "",
    name: "",
    owner: "",
  };
}
export const MsgRegisterBeacon = {
  typeUrl: "/mainchain.beacon.v1.MsgRegisterBeacon",
  encode(message: MsgRegisterBeacon, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeacon {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBeacon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.name = reader.string();
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
  fromJSON(object: any): MsgRegisterBeacon {
    const obj = createBaseMsgRegisterBeacon();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgRegisterBeacon): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterBeacon>, I>>(object: I): MsgRegisterBeacon {
    const message = createBaseMsgRegisterBeacon();
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgRegisterBeaconResponse(): MsgRegisterBeaconResponse {
  return {
    beaconId: BigInt(0),
  };
}
export const MsgRegisterBeaconResponse = {
  typeUrl: "/mainchain.beacon.v1.MsgRegisterBeaconResponse",
  encode(message: MsgRegisterBeaconResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterBeaconResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBeaconResponse();
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
  fromJSON(object: any): MsgRegisterBeaconResponse {
    const obj = createBaseMsgRegisterBeaconResponse();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    return obj;
  },
  toJSON(message: MsgRegisterBeaconResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterBeaconResponse>, I>>(
    object: I,
  ): MsgRegisterBeaconResponse {
    const message = createBaseMsgRegisterBeaconResponse();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    return message;
  },
};
function createBaseMsgRecordBeaconTimestamp(): MsgRecordBeaconTimestamp {
  return {
    beaconId: BigInt(0),
    hash: "",
    submitTime: BigInt(0),
    owner: "",
  };
}
export const MsgRecordBeaconTimestamp = {
  typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestamp",
  encode(message: MsgRecordBeaconTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.submitTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.submitTime);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordBeaconTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.submitTime = reader.uint64();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecordBeaconTimestamp {
    const obj = createBaseMsgRecordBeaconTimestamp();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.submitTime)) obj.submitTime = BigInt(object.submitTime.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgRecordBeaconTimestamp): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.hash !== undefined && (obj.hash = message.hash);
    message.submitTime !== undefined && (obj.submitTime = (message.submitTime || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecordBeaconTimestamp>, I>>(
    object: I,
  ): MsgRecordBeaconTimestamp {
    const message = createBaseMsgRecordBeaconTimestamp();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    message.hash = object.hash ?? "";
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = BigInt(object.submitTime.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgRecordBeaconTimestampResponse(): MsgRecordBeaconTimestampResponse {
  return {
    beaconId: BigInt(0),
    timestampId: BigInt(0),
  };
}
export const MsgRecordBeaconTimestampResponse = {
  typeUrl: "/mainchain.beacon.v1.MsgRecordBeaconTimestampResponse",
  encode(
    message: MsgRecordBeaconTimestampResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.timestampId !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestampId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordBeaconTimestampResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordBeaconTimestampResponse();
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
  fromJSON(object: any): MsgRecordBeaconTimestampResponse {
    const obj = createBaseMsgRecordBeaconTimestampResponse();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.timestampId)) obj.timestampId = BigInt(object.timestampId.toString());
    return obj;
  },
  toJSON(message: MsgRecordBeaconTimestampResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.timestampId !== undefined && (obj.timestampId = (message.timestampId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecordBeaconTimestampResponse>, I>>(
    object: I,
  ): MsgRecordBeaconTimestampResponse {
    const message = createBaseMsgRecordBeaconTimestampResponse();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    if (object.timestampId !== undefined && object.timestampId !== null) {
      message.timestampId = BigInt(object.timestampId.toString());
    }
    return message;
  },
};
function createBaseMsgPurchaseBeaconStateStorage(): MsgPurchaseBeaconStateStorage {
  return {
    beaconId: BigInt(0),
    number: BigInt(0),
    owner: "",
  };
}
export const MsgPurchaseBeaconStateStorage = {
  typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage",
  encode(message: MsgPurchaseBeaconStateStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(16).uint64(message.number);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseBeaconStateStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.number = reader.uint64();
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
  fromJSON(object: any): MsgPurchaseBeaconStateStorage {
    const obj = createBaseMsgPurchaseBeaconStateStorage();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.number)) obj.number = BigInt(object.number.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgPurchaseBeaconStateStorage): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.number !== undefined && (obj.number = (message.number || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurchaseBeaconStateStorage>, I>>(
    object: I,
  ): MsgPurchaseBeaconStateStorage {
    const message = createBaseMsgPurchaseBeaconStateStorage();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgPurchaseBeaconStateStorageResponse(): MsgPurchaseBeaconStateStorageResponse {
  return {
    beaconId: BigInt(0),
    numberPurchased: BigInt(0),
    numCanPurchase: BigInt(0),
  };
}
export const MsgPurchaseBeaconStateStorageResponse = {
  typeUrl: "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorageResponse",
  encode(
    message: MsgPurchaseBeaconStateStorageResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.beaconId !== BigInt(0)) {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.numberPurchased !== BigInt(0)) {
      writer.uint32(16).uint64(message.numberPurchased);
    }
    if (message.numCanPurchase !== BigInt(0)) {
      writer.uint32(24).uint64(message.numCanPurchase);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseBeaconStateStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseBeaconStateStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = reader.uint64();
          break;
        case 2:
          message.numberPurchased = reader.uint64();
          break;
        case 3:
          message.numCanPurchase = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPurchaseBeaconStateStorageResponse {
    const obj = createBaseMsgPurchaseBeaconStateStorageResponse();
    if (isSet(object.beaconId)) obj.beaconId = BigInt(object.beaconId.toString());
    if (isSet(object.numberPurchased)) obj.numberPurchased = BigInt(object.numberPurchased.toString());
    if (isSet(object.numCanPurchase)) obj.numCanPurchase = BigInt(object.numCanPurchase.toString());
    return obj;
  },
  toJSON(message: MsgPurchaseBeaconStateStorageResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = (message.beaconId || BigInt(0)).toString());
    message.numberPurchased !== undefined &&
      (obj.numberPurchased = (message.numberPurchased || BigInt(0)).toString());
    message.numCanPurchase !== undefined &&
      (obj.numCanPurchase = (message.numCanPurchase || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurchaseBeaconStateStorageResponse>, I>>(
    object: I,
  ): MsgPurchaseBeaconStateStorageResponse {
    const message = createBaseMsgPurchaseBeaconStateStorageResponse();
    if (object.beaconId !== undefined && object.beaconId !== null) {
      message.beaconId = BigInt(object.beaconId.toString());
    }
    if (object.numberPurchased !== undefined && object.numberPurchased !== null) {
      message.numberPurchased = BigInt(object.numberPurchased.toString());
    }
    if (object.numCanPurchase !== undefined && object.numCanPurchase !== null) {
      message.numCanPurchase = BigInt(object.numCanPurchase.toString());
    }
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
  typeUrl: "/mainchain.beacon.v1.MsgUpdateParams",
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
  typeUrl: "/mainchain.beacon.v1.MsgUpdateParamsResponse",
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
/** Msg defines the beacon Msg service. */
export interface Msg {
  /** RegisterBeacon defines a method to register a new beacon */
  RegisterBeacon(request: MsgRegisterBeacon): Promise<MsgRegisterBeaconResponse>;
  /** RecordBeaconTimestamp defines a method to record a timestamp for a registered beacon */
  RecordBeaconTimestamp(request: MsgRecordBeaconTimestamp): Promise<MsgRecordBeaconTimestampResponse>;
  /** PurchaseBeaconStateStorage defines the method to purchase more state storage */
  PurchaseBeaconStateStorage(
    request: MsgPurchaseBeaconStateStorage,
  ): Promise<MsgPurchaseBeaconStateStorageResponse>;
  /**
   * UpdateParams defines an operation for updating the x/beacon module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterBeacon = this.RegisterBeacon.bind(this);
    this.RecordBeaconTimestamp = this.RecordBeaconTimestamp.bind(this);
    this.PurchaseBeaconStateStorage = this.PurchaseBeaconStateStorage.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  RegisterBeacon(request: MsgRegisterBeacon): Promise<MsgRegisterBeaconResponse> {
    const data = MsgRegisterBeacon.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Msg", "RegisterBeacon", data);
    return promise.then((data) => MsgRegisterBeaconResponse.decode(new BinaryReader(data)));
  }
  RecordBeaconTimestamp(request: MsgRecordBeaconTimestamp): Promise<MsgRecordBeaconTimestampResponse> {
    const data = MsgRecordBeaconTimestamp.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Msg", "RecordBeaconTimestamp", data);
    return promise.then((data) => MsgRecordBeaconTimestampResponse.decode(new BinaryReader(data)));
  }
  PurchaseBeaconStateStorage(
    request: MsgPurchaseBeaconStateStorage,
  ): Promise<MsgPurchaseBeaconStateStorageResponse> {
    const data = MsgPurchaseBeaconStateStorage.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Msg", "PurchaseBeaconStateStorage", data);
    return promise.then((data) => MsgPurchaseBeaconStateStorageResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("mainchain.beacon.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
