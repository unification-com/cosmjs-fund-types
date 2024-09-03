/* eslint-disable */
import { Params, WrkChain } from "./wrkchain";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.wrkchain.v1";
/** GenesisState defines the wrkchain module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  startingWrkchainId: bigint;
  registeredWrkchains: WrkChainExport[];
}
/**
 * WrkChainBlockGenesisExport is a trimmed version of WrkChainBlock
 * for genesis exports to conserve space
 */
export interface WrkChainBlockGenesisExport {
  he: bigint;
  bh: string;
  ph: string;
  h1: string;
  h2: string;
  h3: string;
  st: bigint;
}
/** WrkChainExport holds genesis export data for a wrkchain, including hashes */
export interface WrkChainExport {
  wrkchain: WrkChain;
  inStateLimit: bigint;
  blocks: WrkChainBlockGenesisExport[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    startingWrkchainId: BigInt(0),
    registeredWrkchains: [],
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.wrkchain.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingWrkchainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingWrkchainId);
    }
    for (const v of message.registeredWrkchains) {
      WrkChainExport.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.startingWrkchainId = reader.uint64();
          break;
        case 3:
          message.registeredWrkchains.push(WrkChainExport.decode(reader, reader.uint32()));
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
    if (isSet(object.startingWrkchainId))
      obj.startingWrkchainId = BigInt(object.startingWrkchainId.toString());
    if (Array.isArray(object?.registeredWrkchains))
      obj.registeredWrkchains = object.registeredWrkchains.map((e: any) => WrkChainExport.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.startingWrkchainId !== undefined &&
      (obj.startingWrkchainId = (message.startingWrkchainId || BigInt(0)).toString());
    if (message.registeredWrkchains) {
      obj.registeredWrkchains = message.registeredWrkchains.map((e) =>
        e ? WrkChainExport.toJSON(e) : undefined,
      );
    } else {
      obj.registeredWrkchains = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.startingWrkchainId !== undefined && object.startingWrkchainId !== null) {
      message.startingWrkchainId = BigInt(object.startingWrkchainId.toString());
    }
    message.registeredWrkchains = object.registeredWrkchains?.map((e) => WrkChainExport.fromPartial(e)) || [];
    return message;
  },
};
function createBaseWrkChainBlockGenesisExport(): WrkChainBlockGenesisExport {
  return {
    he: BigInt(0),
    bh: "",
    ph: "",
    h1: "",
    h2: "",
    h3: "",
    st: BigInt(0),
  };
}
export const WrkChainBlockGenesisExport = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainBlockGenesisExport",
  encode(message: WrkChainBlockGenesisExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.he !== BigInt(0)) {
      writer.uint32(8).uint64(message.he);
    }
    if (message.bh !== "") {
      writer.uint32(18).string(message.bh);
    }
    if (message.ph !== "") {
      writer.uint32(26).string(message.ph);
    }
    if (message.h1 !== "") {
      writer.uint32(34).string(message.h1);
    }
    if (message.h2 !== "") {
      writer.uint32(42).string(message.h2);
    }
    if (message.h3 !== "") {
      writer.uint32(50).string(message.h3);
    }
    if (message.st !== BigInt(0)) {
      writer.uint32(56).uint64(message.st);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainBlockGenesisExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainBlockGenesisExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.he = reader.uint64();
          break;
        case 2:
          message.bh = reader.string();
          break;
        case 3:
          message.ph = reader.string();
          break;
        case 4:
          message.h1 = reader.string();
          break;
        case 5:
          message.h2 = reader.string();
          break;
        case 6:
          message.h3 = reader.string();
          break;
        case 7:
          message.st = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WrkChainBlockGenesisExport {
    const obj = createBaseWrkChainBlockGenesisExport();
    if (isSet(object.he)) obj.he = BigInt(object.he.toString());
    if (isSet(object.bh)) obj.bh = String(object.bh);
    if (isSet(object.ph)) obj.ph = String(object.ph);
    if (isSet(object.h1)) obj.h1 = String(object.h1);
    if (isSet(object.h2)) obj.h2 = String(object.h2);
    if (isSet(object.h3)) obj.h3 = String(object.h3);
    if (isSet(object.st)) obj.st = BigInt(object.st.toString());
    return obj;
  },
  toJSON(message: WrkChainBlockGenesisExport): unknown {
    const obj: any = {};
    message.he !== undefined && (obj.he = (message.he || BigInt(0)).toString());
    message.bh !== undefined && (obj.bh = message.bh);
    message.ph !== undefined && (obj.ph = message.ph);
    message.h1 !== undefined && (obj.h1 = message.h1);
    message.h2 !== undefined && (obj.h2 = message.h2);
    message.h3 !== undefined && (obj.h3 = message.h3);
    message.st !== undefined && (obj.st = (message.st || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WrkChainBlockGenesisExport>, I>>(
    object: I,
  ): WrkChainBlockGenesisExport {
    const message = createBaseWrkChainBlockGenesisExport();
    if (object.he !== undefined && object.he !== null) {
      message.he = BigInt(object.he.toString());
    }
    message.bh = object.bh ?? "";
    message.ph = object.ph ?? "";
    message.h1 = object.h1 ?? "";
    message.h2 = object.h2 ?? "";
    message.h3 = object.h3 ?? "";
    if (object.st !== undefined && object.st !== null) {
      message.st = BigInt(object.st.toString());
    }
    return message;
  },
};
function createBaseWrkChainExport(): WrkChainExport {
  return {
    wrkchain: WrkChain.fromPartial({}),
    inStateLimit: BigInt(0),
    blocks: [],
  };
}
export const WrkChainExport = {
  typeUrl: "/mainchain.wrkchain.v1.WrkChainExport",
  encode(message: WrkChainExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrkchain !== undefined) {
      WrkChain.encode(message.wrkchain, writer.uint32(10).fork()).ldelim();
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    for (const v of message.blocks) {
      WrkChainBlockGenesisExport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrkChainExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrkChainExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrkchain = WrkChain.decode(reader, reader.uint32());
          break;
        case 2:
          message.inStateLimit = reader.uint64();
          break;
        case 3:
          message.blocks.push(WrkChainBlockGenesisExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WrkChainExport {
    const obj = createBaseWrkChainExport();
    if (isSet(object.wrkchain)) obj.wrkchain = WrkChain.fromJSON(object.wrkchain);
    if (isSet(object.inStateLimit)) obj.inStateLimit = BigInt(object.inStateLimit.toString());
    if (Array.isArray(object?.blocks))
      obj.blocks = object.blocks.map((e: any) => WrkChainBlockGenesisExport.fromJSON(e));
    return obj;
  },
  toJSON(message: WrkChainExport): unknown {
    const obj: any = {};
    message.wrkchain !== undefined &&
      (obj.wrkchain = message.wrkchain ? WrkChain.toJSON(message.wrkchain) : undefined);
    message.inStateLimit !== undefined && (obj.inStateLimit = (message.inStateLimit || BigInt(0)).toString());
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => (e ? WrkChainBlockGenesisExport.toJSON(e) : undefined));
    } else {
      obj.blocks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WrkChainExport>, I>>(object: I): WrkChainExport {
    const message = createBaseWrkChainExport();
    if (object.wrkchain !== undefined && object.wrkchain !== null) {
      message.wrkchain = WrkChain.fromPartial(object.wrkchain);
    }
    if (object.inStateLimit !== undefined && object.inStateLimit !== null) {
      message.inStateLimit = BigInt(object.inStateLimit.toString());
    }
    message.blocks = object.blocks?.map((e) => WrkChainBlockGenesisExport.fromPartial(e)) || [];
    return message;
  },
};
