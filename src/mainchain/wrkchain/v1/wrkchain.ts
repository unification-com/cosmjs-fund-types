/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.wrkchain.v1";
/** WrkChain holds metadata about a registered wrkchain */
export interface WrkChain {
  /** wrkchain_id is the id of the wrkchain */
  wrkchainId: bigint;
  /** moniker is the readable id of the wrkchain */
  moniker: string;
  /** name is the human friendly name of the wrkchain */
  name: string;
  /** genesis is an optional hash of the wrkchain's genesis block */
  genesis: string;
  /** type is the wrkchain type, e.g. geth, cosmos etc. */
  type: string;
  /** lastblock is the current highest recorded height for the wrkchain */
  lastblock: bigint;
  /** num_blocks is the current number of block hashes stored in state for the wrkchain */
  numBlocks: bigint;
  /** lowest_height is the lowest recorded height currently held in state for the wrkchain */
  lowestHeight: bigint;
  /** reg_time is the unix epoch of the wrkchain's registration time */
  regTime: bigint;
  /** owner is the owner address of the wrkchain */
  owner: string;
}
/** WrkChainStorageLimit holds tata about the wrkchain's current in-state storage limit */
export interface WrkChainStorageLimit {
  /** wrkchain_id is the id of the wrkchain */
  wrkchainId: bigint;
  /** in_state_limit is the current maximum number of blocks that will be held in state for the wrkchain */
  inStateLimit: bigint;
}
/** WrkChainBlock holds data about a wrkchain's block hash submission */
export interface WrkChainBlock {
  /** height is the block number/height of the stored wrkchain block hash */
  height: bigint;
  /** blockhash is the block hash of the stored wrkchain block */
  blockhash: string;
  /** parenthash is the optional hash of the parent block of the stored wrkchain block hash */
  parenthash: string;
  /** hash1 is an optional hash of any type of the stored wrkchain block hash */
  hash1: string;
  /** hash2 is an optional hash of any type of the stored wrkchain block hash */
  hash2: string;
  /** hash3 is an optional hash of any type of the stored wrkchain block hash */
  hash3: string;
  /** sub_time is the unix epoch of the wkrchain hash submission */
  subTime: bigint;
}
/** Params defines the parameters for the wrkchain module. */
export interface Params {
  /** fee_register is the cost to register a wkrchain */
  feeRegister: bigint;
  /** fee_record is the cost to record a single wkrchain hash */
  feeRecord: bigint;
  /** fee_purchase_storage is the cost to purchase a single additional unit of in-state storage */
  feePurchaseStorage: bigint;
  /** denom is the expected denomination to pay for fees, e.g. nund */
  denom: string;
  /** default_storage_limit is the default in-state storage limit for all new wkrchains */
  defaultStorageLimit: bigint;
  /** max_storage_limit is the maximum in-state storage slots any one wkrchain can have */
  maxStorageLimit: bigint;
}
function createBaseWrkChain(): WrkChain {
  return {
    wrkchainId: BigInt(0),
    moniker: "",
    name: "",
    genesis: "",
    type: "",
    lastblock: BigInt(0),
    numBlocks: BigInt(0),
    lowestHeight: BigInt(0),
    regTime: BigInt(0),
    owner: "",
  };
}
export const WrkChain = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChain",
  encode(message: WrkChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.genesis !== "") {
      writer.uint32(34).string(message.genesis);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.lastblock !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastblock);
    }
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(56).uint64(message.numBlocks);
    }
    if (message.lowestHeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.lowestHeight);
    }
    if (message.regTime !== BigInt(0)) {
      writer.uint32(72).uint64(message.regTime);
    }
    if (message.owner !== "") {
      writer.uint32(82).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.genesis = reader.string();
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.lastblock = reader.uint64();
          break;
        case 7:
          message.numBlocks = reader.uint64();
          break;
        case 8:
          message.lowestHeight = reader.uint64();
          break;
        case 9:
          message.regTime = reader.uint64();
          break;
        case 10:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WrkChain {
    const obj = createBaseWrkChain();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.genesis)) obj.genesis = String(object.genesis);
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.lastblock)) obj.lastblock = BigInt(object.lastblock.toString());
    if (isSet(object.numBlocks)) obj.numBlocks = BigInt(object.numBlocks.toString());
    if (isSet(object.lowestHeight)) obj.lowestHeight = BigInt(object.lowestHeight.toString());
    if (isSet(object.regTime)) obj.regTime = BigInt(object.regTime.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: WrkChain): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.name !== undefined && (obj.name = message.name);
    message.genesis !== undefined && (obj.genesis = message.genesis);
    message.type !== undefined && (obj.type = message.type);
    message.lastblock !== undefined && (obj.lastblock = (message.lastblock || BigInt(0)).toString());
    message.numBlocks !== undefined && (obj.numBlocks = (message.numBlocks || BigInt(0)).toString());
    message.lowestHeight !== undefined && (obj.lowestHeight = (message.lowestHeight || BigInt(0)).toString());
    message.regTime !== undefined && (obj.regTime = (message.regTime || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WrkChain>, I>>(object: I): WrkChain {
    const message = createBaseWrkChain();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    message.moniker = object.moniker ?? "";
    message.name = object.name ?? "";
    message.genesis = object.genesis ?? "";
    message.type = object.type ?? "";
    if (object.lastblock !== undefined && object.lastblock !== null) {
      message.lastblock = BigInt(object.lastblock.toString());
    }
    if (object.numBlocks !== undefined && object.numBlocks !== null) {
      message.numBlocks = BigInt(object.numBlocks.toString());
    }
    if (object.lowestHeight !== undefined && object.lowestHeight !== null) {
      message.lowestHeight = BigInt(object.lowestHeight.toString());
    }
    if (object.regTime !== undefined && object.regTime !== null) {
      message.regTime = BigInt(object.regTime.toString());
    }
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseWrkChainStorageLimit(): WrkChainStorageLimit {
  return {
    wrkchainId: BigInt(0),
    inStateLimit: BigInt(0),
  };
}
export const WrkChainStorageLimit = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainStorageLimit",
  encode(message: WrkChainStorageLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrkchainId);
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainStorageLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainStorageLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchainId = reader.uint64();
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
  fromJSON(object: any): WrkChainStorageLimit {
    const obj = createBaseWrkChainStorageLimit();
    if (isSet(object.wrkchainId)) obj.wrkchainId = BigInt(object.wrkchainId.toString());
    if (isSet(object.inStateLimit)) obj.inStateLimit = BigInt(object.inStateLimit.toString());
    return obj;
  },
  toJSON(message: WrkChainStorageLimit): unknown {
    const obj: any = {};
    message.wrkchainId !== undefined && (obj.wrkchainId = (message.wrkchainId || BigInt(0)).toString());
    message.inStateLimit !== undefined && (obj.inStateLimit = (message.inStateLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WrkChainStorageLimit>, I>>(object: I): WrkChainStorageLimit {
    const message = createBaseWrkChainStorageLimit();
    if (object.wrkchainId !== undefined && object.wrkchainId !== null) {
      message.wrkchainId = BigInt(object.wrkchainId.toString());
    }
    if (object.inStateLimit !== undefined && object.inStateLimit !== null) {
      message.inStateLimit = BigInt(object.inStateLimit.toString());
    }
    return message;
  },
};
function createBaseWrkChainBlock(): WrkChainBlock {
  return {
    height: BigInt(0),
    blockhash: "",
    parenthash: "",
    hash1: "",
    hash2: "",
    hash3: "",
    subTime: BigInt(0),
  };
}
export const WrkChainBlock = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlock",
  encode(message: WrkChainBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.blockhash !== "") {
      writer.uint32(18).string(message.blockhash);
    }
    if (message.parenthash !== "") {
      writer.uint32(26).string(message.parenthash);
    }
    if (message.hash1 !== "") {
      writer.uint32(34).string(message.hash1);
    }
    if (message.hash2 !== "") {
      writer.uint32(42).string(message.hash2);
    }
    if (message.hash3 !== "") {
      writer.uint32(50).string(message.hash3);
    }
    if (message.subTime !== BigInt(0)) {
      writer.uint32(56).uint64(message.subTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.blockhash = reader.string();
          break;
        case 3:
          message.parenthash = reader.string();
          break;
        case 4:
          message.hash1 = reader.string();
          break;
        case 5:
          message.hash2 = reader.string();
          break;
        case 6:
          message.hash3 = reader.string();
          break;
        case 7:
          message.subTime = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WrkChainBlock {
    const obj = createBaseWrkChainBlock();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.blockhash)) obj.blockhash = String(object.blockhash);
    if (isSet(object.parenthash)) obj.parenthash = String(object.parenthash);
    if (isSet(object.hash1)) obj.hash1 = String(object.hash1);
    if (isSet(object.hash2)) obj.hash2 = String(object.hash2);
    if (isSet(object.hash3)) obj.hash3 = String(object.hash3);
    if (isSet(object.subTime)) obj.subTime = BigInt(object.subTime.toString());
    return obj;
  },
  toJSON(message: WrkChainBlock): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.blockhash !== undefined && (obj.blockhash = message.blockhash);
    message.parenthash !== undefined && (obj.parenthash = message.parenthash);
    message.hash1 !== undefined && (obj.hash1 = message.hash1);
    message.hash2 !== undefined && (obj.hash2 = message.hash2);
    message.hash3 !== undefined && (obj.hash3 = message.hash3);
    message.subTime !== undefined && (obj.subTime = (message.subTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WrkChainBlock>, I>>(object: I): WrkChainBlock {
    const message = createBaseWrkChainBlock();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.blockhash = object.blockhash ?? "";
    message.parenthash = object.parenthash ?? "";
    message.hash1 = object.hash1 ?? "";
    message.hash2 = object.hash2 ?? "";
    message.hash3 = object.hash3 ?? "";
    if (object.subTime !== undefined && object.subTime !== null) {
      message.subTime = BigInt(object.subTime.toString());
    }
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
  typeUrl: "/mainchain.wrkchain.v1.Params",
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
