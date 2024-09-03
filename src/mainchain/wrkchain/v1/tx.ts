/* eslint-disable */
import { Params } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.wrkchain.v1";
/** MsgRegisterWrkChain represents a message to register a new wrkchain */
export interface MsgRegisterWrkChain {
  /** moniker is a short identifier for a wrkchain */
  moniker: string;
  /** name is a long name for a wrkchain */
  name: string;
  /** genesis_hash is a hash of the genesis block of the wrkchain */
  genesisHash: string;
  /** base_type is the type of wrkchain, e.g. geth, cosmos etc. */
  baseType: string;
  /** owner is the address of the owner of the wrkchain */
  owner: string;
}
/** MsgRegisterWrkChainResponse defines the Msg/RegisterWrkChain response type. */
export interface MsgRegisterWrkChainResponse {
  /** wrkchain_id is the id of the new wrkchain */
  wrkchainId: bigint;
}
/** MsgRecordWrkChainBlock represents a message to submit a set of block hashes for a registered wrkchain */
export interface MsgRecordWrkChainBlock {
  /** wrkchain_id is the id of the wrkchain the hashes are being submitted for */
  wrkchainId: bigint;
  /** height is the block height/number of the hashes being submitted */
  height: bigint;
  /** block_hash is the main block hash */
  blockHash: string;
  /** parent_hash is an optional parent block hash for the given height/block number */
  parentHash: string;
  /** hash1 is an optional supplementary hash to be submitted, for example TxHash */
  hash1: string;
  /** hash2 is an optional supplementary hash to be submitted, for example TxHash */
  hash2: string;
  /** hash3 is an optional supplementary hash to be submitted, for example TxHash */
  hash3: string;
  /** owner is the address of the owner of the wrkchain */
  owner: string;
}
/** MsgRecordWrkChainBlockResponse defines the Msg/RecordWrkChainBlock response type. */
export interface MsgRecordWrkChainBlockResponse {
  /** wrkchain_id is the id of the wrkchain */
  wrkchainId: bigint;
  /** height is the height of the submitted block hashes */
  height: bigint;
}
/** MsgPurchaseWrkChainStateStorage represents a message to purchase more wrkchain storage */
export interface MsgPurchaseWrkChainStateStorage {
  /** wrkchain_id is the id of the wrkchain the storage is being purchased for */
  wrkchainId: bigint;
  /** number is the number of state storage spaces to purchase */
  number: bigint;
  /** owner is the address of the owner of the wrkchain */
  owner: string;
}
/** MsgPurchaseWrkChainStateStorageResponse defines the Msg/PurchaseWrkChainStateStorage response type. */
export interface MsgPurchaseWrkChainStateStorageResponse {
  /** wrkchain_id is the id of the wrkchain the storage is being purchased for */
  wrkchainId: bigint;
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
   * params defines the x/wrkchain parameters to update.
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
function createBaseMsgRegisterWrkChain(): MsgRegisterWrkChain {
  return {
    moniker: "",
    name: "",
    genesisHash: "",
    baseType: "",
    owner: "",
  };
}
export const MsgRegisterWrkChain = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChain",
  encode(message: MsgRegisterWrkChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.genesisHash !== "") {
      writer.uint32(34).string(message.genesisHash);
    }
    if (message.baseType !== "") {
      writer.uint32(42).string(message.baseType);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWrkChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterWrkChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.genesisHash = reader.string();
          break;
        case 5:
          message.baseType = reader.string();
          break;
        case 6:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterWrkChain {
    const obj = createBaseMsgRegisterWrkChain();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.genesisHash)) obj.genesisHash = String(object.genesisHash);
    if (isSet(object.baseType)) obj.baseType = String(object.baseType);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgRegisterWrkChain): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.name !== undefined && (obj.name = message.name);
    message.genesisHash !== undefined && (obj.genesisHash = message.genesisHash);
    message.baseType !== undefined && (obj.baseType = message.baseType);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterWrkChain>, I>>(object: I): MsgRegisterWrkChain {
    const message = createBaseMsgRegisterWrkChain();
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    message.genesisHash = object.genesisHash ?? "";
    message.baseType = object.baseType ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgRegisterWrkChainResponse(): MsgRegisterWrkChainResponse {
  return {
    wrkchainId: BigInt(0),
  };
}
export const MsgRegisterWrkChainResponse = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRegisterWrkChainResponse",
  encode(message: MsgRegisterWrkChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWrkChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterWrkChainResponse();
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
  fromJSON(object: any): MsgRegisterWrkChainResponse {
    const obj = createBaseMsgRegisterWrkChainResponse();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    return obj;
  },
  toJSON(message: MsgRegisterWrkChainResponse): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterWrkChainResponse>, I>>(
    object: I,
  ): MsgRegisterWrkChainResponse {
    const message = createBaseMsgRegisterWrkChainResponse();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    return message;
  },
};
function createBaseMsgRecordWrkChainBlock(): MsgRecordWrkChainBlock {
  return {
    wrkchainId: BigInt(0),
    height: BigInt(0),
    blockHash: "",
    parentHash: "",
    hash1: "",
    hash2: "",
    hash3: "",
    owner: "",
  };
}
export const MsgRecordWrkChainBlock = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock",
  encode(message: MsgRecordWrkChainBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.blockHash !== "") {
      writer.uint32(26).string(message.blockHash);
    }
    if (message.parentHash !== "") {
      writer.uint32(34).string(message.parentHash);
    }
    if (message.hash1 !== "") {
      writer.uint32(42).string(message.hash1);
    }
    if (message.hash2 !== "") {
      writer.uint32(50).string(message.hash2);
    }
    if (message.hash3 !== "") {
      writer.uint32(58).string(message.hash3);
    }
    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordWrkChainBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordWrkChainBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.blockHash = reader.string();
          break;
        case 4:
          message.parentHash = reader.string();
          break;
        case 5:
          message.hash1 = reader.string();
          break;
        case 6:
          message.hash2 = reader.string();
          break;
        case 7:
          message.hash3 = reader.string();
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
  fromJSON(object: any): MsgRecordWrkChainBlock {
    const obj = createBaseMsgRecordWrkChainBlock();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.blockHash)) obj.blockHash = String(object.blockHash);
    if (isSet(object.parentHash)) obj.parentHash = String(object.parentHash);
    if (isSet(object.hash1)) obj.hash1 = String(object.hash1);
    if (isSet(object.hash2)) obj.hash2 = String(object.hash2);
    if (isSet(object.hash3)) obj.hash3 = String(object.hash3);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgRecordWrkChainBlock): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.parentHash !== undefined && (obj.parentHash = message.parentHash);
    message.hash1 !== undefined && (obj.hash1 = message.hash1);
    message.hash2 !== undefined && (obj.hash2 = message.hash2);
    message.hash3 !== undefined && (obj.hash3 = message.hash3);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecordWrkChainBlock>, I>>(object: I): MsgRecordWrkChainBlock {
    const message = createBaseMsgRecordWrkChainBlock();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.blockHash = object.blockHash ?? "";
    message.parentHash = object.parentHash ?? "";
    message.hash1 = object.hash1 ?? "";
    message.hash2 = object.hash2 ?? "";
    message.hash3 = object.hash3 ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgRecordWrkChainBlockResponse(): MsgRecordWrkChainBlockResponse {
  return {
    wrkchainId: BigInt(0),
    height: BigInt(0),
  };
}
export const MsgRecordWrkChainBlockResponse = {
  typeUrl: "/mainchain.wrkchain.v1.MsgRecordWrkChainBlockResponse",
  encode(
    message: MsgRecordWrkChainBlockResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecordWrkChainBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordWrkChainBlockResponse();
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
  fromJSON(object: any): MsgRecordWrkChainBlockResponse {
    const obj = createBaseMsgRecordWrkChainBlockResponse();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: MsgRecordWrkChainBlockResponse): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecordWrkChainBlockResponse>, I>>(
    object: I,
  ): MsgRecordWrkChainBlockResponse {
    const message = createBaseMsgRecordWrkChainBlockResponse();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseMsgPurchaseWrkChainStateStorage(): MsgPurchaseWrkChainStateStorage {
  return {
    wrkchainId: BigInt(0),
    number: BigInt(0),
    owner: "",
  };
}
export const MsgPurchaseWrkChainStateStorage = {
  typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage",
  encode(
    message: MsgPurchaseWrkChainStateStorage,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.number !== BigInt(0)) {
      writer.uint32(16).uint64(message.number);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseWrkChainStateStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseWrkChainStateStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
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
  fromJSON(object: any): MsgPurchaseWrkChainStateStorage {
    const obj = createBaseMsgPurchaseWrkChainStateStorage();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.number)) obj.number = BigInt(object.number.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgPurchaseWrkChainStateStorage): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.number !== undefined && (obj.number = (message.number || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurchaseWrkChainStateStorage>, I>>(
    object: I,
  ): MsgPurchaseWrkChainStateStorage {
    const message = createBaseMsgPurchaseWrkChainStateStorage();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseMsgPurchaseWrkChainStateStorageResponse(): MsgPurchaseWrkChainStateStorageResponse {
  return {
    wrkchainId: BigInt(0),
    numberPurchased: BigInt(0),
    numCanPurchase: BigInt(0),
  };
}
export const MsgPurchaseWrkChainStateStorageResponse = {
  typeUrl: "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorageResponse",
  encode(
    message: MsgPurchaseWrkChainStateStorageResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.numberPurchased !== BigInt(0)) {
      writer.uint32(16).uint64(message.numberPurchased);
    }
    if (message.numCanPurchase !== BigInt(0)) {
      writer.uint32(24).uint64(message.numCanPurchase);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPurchaseWrkChainStateStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
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
  fromJSON(object: any): MsgPurchaseWrkChainStateStorageResponse {
    const obj = createBaseMsgPurchaseWrkChainStateStorageResponse();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.numberPurchased)) obj.numberPurchased = BigInt(object.numberPurchased.toString());
    if (isSet(object.numCanPurchase)) obj.numCanPurchase = BigInt(object.numCanPurchase.toString());
    return obj;
  },
  toJSON(message: MsgPurchaseWrkChainStateStorageResponse): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.numberPurchased !== undefined &&
      (obj.numberPurchased = (message.numberPurchased || BigInt(0)).toString());
    message.numCanPurchase !== undefined &&
      (obj.numCanPurchase = (message.numCanPurchase || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPurchaseWrkChainStateStorageResponse>, I>>(
    object: I,
  ): MsgPurchaseWrkChainStateStorageResponse {
    const message = createBaseMsgPurchaseWrkChainStateStorageResponse();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
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
  typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParams",
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
  typeUrl: "/mainchain.wrkchain.v1.MsgUpdateParamsResponse",
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
/** Msg defines the wrkchain Msg service. */
export interface Msg {
  /** RegisterWrkChain defines a method to register a new wrkchain */
  RegisterWrkChain(request: MsgRegisterWrkChain): Promise<MsgRegisterWrkChainResponse>;
  /** RecordWrkChainBlock defines a method to record a block hash set for a registered wrkchain */
  RecordWrkChainBlock(request: MsgRecordWrkChainBlock): Promise<MsgRecordWrkChainBlockResponse>;
  /** PurchaseWrkChainStateStorage defines the method to purchase more state storage */
  PurchaseWrkChainStateStorage(
    request: MsgPurchaseWrkChainStateStorage,
  ): Promise<MsgPurchaseWrkChainStateStorageResponse>;
  /**
   * UpdateParams defines an operation for updating the x/wrkchain module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterWrkChain = this.RegisterWrkChain.bind(this);
    this.RecordWrkChainBlock = this.RecordWrkChainBlock.bind(this);
    this.PurchaseWrkChainStateStorage = this.PurchaseWrkChainStateStorage.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  RegisterWrkChain(request: MsgRegisterWrkChain): Promise<MsgRegisterWrkChainResponse> {
    const data = MsgRegisterWrkChain.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "RegisterWrkChain", data);
    return promise.then((data) => MsgRegisterWrkChainResponse.decode(new BinaryReader(data)));
  }
  RecordWrkChainBlock(request: MsgRecordWrkChainBlock): Promise<MsgRecordWrkChainBlockResponse> {
    const data = MsgRecordWrkChainBlock.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "RecordWrkChainBlock", data);
    return promise.then((data) => MsgRecordWrkChainBlockResponse.decode(new BinaryReader(data)));
  }
  PurchaseWrkChainStateStorage(
    request: MsgPurchaseWrkChainStateStorage,
  ): Promise<MsgPurchaseWrkChainStateStorageResponse> {
    const data = MsgPurchaseWrkChainStateStorage.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "PurchaseWrkChainStateStorage", data);
    return promise.then((data) => MsgPurchaseWrkChainStateStorageResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("mainchain.wrkchain.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
