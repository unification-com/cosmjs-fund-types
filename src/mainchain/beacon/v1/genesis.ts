/* eslint-disable */
import { Params, Beacon } from "./beacon";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.beacon.v1";
/** GenesisState defines the beacon module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  startingBeaconId: bigint;
  registeredBeacons: BeaconExport[];
}
/**
 * BeaconTimestampGenesisExport is a trimmed version of BeaconTimestamp
 * for genesis exports to conserve space
 */
export interface BeaconTimestampGenesisExport {
  id: bigint;
  t: bigint;
  h: string;
}
/** BeaconExport holds genesis export data for a beacon, including submitted timestamps */
export interface BeaconExport {
  beacon: Beacon;
  inStateLimit: bigint;
  timestamps: BeaconTimestampGenesisExport[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    startingBeaconId: BigInt(0),
    registeredBeacons: [],
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.beacon.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingBeaconId !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingBeaconId);
    }
    for (const v of message.registeredBeacons) {
      BeaconExport.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.startingBeaconId = reader.uint64();
          break;
        case 3:
          message.registeredBeacons.push(BeaconExport.decode(reader, reader.uint32()));
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
    if (isSet(object.startingBeaconId)) obj.startingBeaconId = BigInt(object.startingBeaconId.toString());
    if (Array.isArray(object?.registeredBeacons))
      obj.registeredBeacons = object.registeredBeacons.map((e: any) => BeaconExport.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.startingBeaconId !== undefined &&
      (obj.startingBeaconId = (message.startingBeaconId || BigInt(0)).toString());
    if (message.registeredBeacons) {
      obj.registeredBeacons = message.registeredBeacons.map((e) => (e ? BeaconExport.toJSON(e) : undefined));
    } else {
      obj.registeredBeacons = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.startingBeaconId !== undefined && object.startingBeaconId !== null) {
      message.startingBeaconId = BigInt(object.startingBeaconId.toString());
    }
    message.registeredBeacons = object.registeredBeacons?.map((e) => BeaconExport.fromPartial(e)) || [];
    return message;
  },
};
function createBaseBeaconTimestampGenesisExport(): BeaconTimestampGenesisExport {
  return {
    id: BigInt(0),
    t: BigInt(0),
    h: "",
  };
}
export const BeaconTimestampGenesisExport = {
  typeUrl: "/mainchain.beacon.v1.BeaconTimestampGenesisExport",
  encode(message: BeaconTimestampGenesisExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.t !== BigInt(0)) {
      writer.uint32(16).uint64(message.t);
    }
    if (message.h !== "") {
      writer.uint32(26).string(message.h);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconTimestampGenesisExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconTimestampGenesisExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.t = reader.uint64();
          break;
        case 3:
          message.h = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BeaconTimestampGenesisExport {
    const obj = createBaseBeaconTimestampGenesisExport();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.t)) obj.t = BigInt(object.t.toString());
    if (isSet(object.h)) obj.h = String(object.h);
    return obj;
  },
  toJSON(message: BeaconTimestampGenesisExport): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.t !== undefined && (obj.t = (message.t || BigInt(0)).toString());
    message.h !== undefined && (obj.h = message.h);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BeaconTimestampGenesisExport>, I>>(
    object: I,
  ): BeaconTimestampGenesisExport {
    const message = createBaseBeaconTimestampGenesisExport();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.t !== undefined && object.t !== null) {
      message.t = BigInt(object.t.toString());
    }
    message.h = object.h ?? "";
    return message;
  },
};
function createBaseBeaconExport(): BeaconExport {
  return {
    beacon: Beacon.fromPartial({}),
    inStateLimit: BigInt(0),
    timestamps: [],
  };
}
export const BeaconExport = {
  typeUrl: "/mainchain.beacon.v1.BeaconExport",
  encode(message: BeaconExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beacon !== undefined) {
      Beacon.encode(message.beacon, writer.uint32(10).fork()).ldelim();
    }
    if (message.inStateLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.inStateLimit);
    }
    for (const v of message.timestamps) {
      BeaconTimestampGenesisExport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BeaconExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeaconExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beacon = Beacon.decode(reader, reader.uint32());
          break;
        case 2:
          message.inStateLimit = reader.uint64();
          break;
        case 3:
          message.timestamps.push(BeaconTimestampGenesisExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BeaconExport {
    const obj = createBaseBeaconExport();
    if (isSet(object.beacon)) obj.beacon = Beacon.fromJSON(object.beacon);
    if (isSet(object.inStateLimit)) obj.inStateLimit = BigInt(object.inStateLimit.toString());
    if (Array.isArray(object?.timestamps))
      obj.timestamps = object.timestamps.map((e: any) => BeaconTimestampGenesisExport.fromJSON(e));
    return obj;
  },
  toJSON(message: BeaconExport): unknown {
    const obj: any = {};
    message.beacon !== undefined && (obj.beacon = message.beacon ? Beacon.toJSON(message.beacon) : undefined);
    message.inStateLimit !== undefined && (obj.inStateLimit = (message.inStateLimit || BigInt(0)).toString());
    if (message.timestamps) {
      obj.timestamps = message.timestamps.map((e) =>
        e ? BeaconTimestampGenesisExport.toJSON(e) : undefined,
      );
    } else {
      obj.timestamps = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BeaconExport>, I>>(object: I): BeaconExport {
    const message = createBaseBeaconExport();
    if (object.beacon !== undefined && object.beacon !== null) {
      message.beacon = Beacon.fromPartial(object.beacon);
    }
    if (object.inStateLimit !== undefined && object.inStateLimit !== null) {
      message.inStateLimit = BigInt(object.inStateLimit.toString());
    }
    message.timestamps = object.timestamps?.map((e) => BeaconTimestampGenesisExport.fromPartial(e)) || [];
    return message;
  },
};
