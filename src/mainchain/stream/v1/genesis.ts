/* eslint-disable */
import { Params } from "./params";
import { Stream } from "./stream";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.stream.v1";
/** GenesisState defines the stream module's genesis state. */
export interface GenesisState {
  params: Params;
  streams: StreamExport[];
}
/** StreamExport holds genesis export data for a stream */
export interface StreamExport {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the wallet making the update */
  sender: string;
  /** stream is the stream data */
  stream: Stream;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    streams: [],
  };
}
export const GenesisState = {
  typeUrl: "/mainchain.stream.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.streams) {
      StreamExport.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.streams.push(StreamExport.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.streams))
      obj.streams = object.streams.map((e: any) => StreamExport.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.streams) {
      obj.streams = message.streams.map((e) => (e ? StreamExport.toJSON(e) : undefined));
    } else {
      obj.streams = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.streams = object.streams?.map((e) => StreamExport.fromPartial(e)) || [];
    return message;
  },
};
function createBaseStreamExport(): StreamExport {
  return {
    receiver: "",
    sender: "",
    stream: Stream.fromPartial({}),
  };
}
export const StreamExport = {
  typeUrl: "/mainchain.stream.v1.StreamExport",
  encode(message: StreamExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.stream !== undefined) {
      Stream.encode(message.stream, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StreamExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.stream = Stream.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StreamExport {
    const obj = createBaseStreamExport();
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.stream)) obj.stream = Stream.fromJSON(object.stream);
    return obj;
  },
  toJSON(message: StreamExport): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    message.stream !== undefined && (obj.stream = message.stream ? Stream.toJSON(message.stream) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StreamExport>, I>>(object: I): StreamExport {
    const message = createBaseStreamExport();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = Stream.fromPartial(object.stream);
    }
    return message;
  },
};
