/* eslint-disable */
import { StreamPeriod, Stream, streamPeriodFromJSON, streamPeriodToJSON } from "./stream";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.stream.v1";
/** StreamResult contains data about a stream */
export interface StreamResult {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the wallet making the update */
  sender: string;
  /** stream is the stream data */
  stream?: Stream;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryCalculateFlowRateRequest is the request type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateRequest {
  /**
   * coin is the coin to be used in the calculation, e.g. 10000000000nund. This is the total amount to be paid over
   * the specified duration
   */
  coin: string;
  /** period is the enumerated value of a period to be used in the calculation, e.g. month = 6 */
  period: StreamPeriod;
  /** duration is the number of periods to be used in the calculation, e.g. 2 = 2 months */
  duration: bigint;
}
/** QueryCalculateFlowRateResponse is the response type for the Query/CalculateFlowRate RPC method */
export interface QueryCalculateFlowRateResponse {
  /** coin is the coin used in the calculation */
  coin: Coin;
  /** period is the enumerated value of a period used in the calculation, e.g. month = 6 */
  period: StreamPeriod;
  /** duration is the number of periods used in the calculation, e.g. 2 = 2 months */
  duration: bigint;
  /** seconds is the calculated number of seconds for the stream (seconds in period * duration) */
  seconds: bigint;
  /** flow_rate is the calculated rate of coins per second, in the lowest denomination - e.g. nund */
  flowRate: bigint;
}
/** QueryStreamsRequest is the request type for the Query/Streams RPC method */
export interface QueryStreamsRequest {
  pagination?: PageRequest;
}
/** QueryStreamsResponse is the response type for the Query/Streams RPC method */
export interface QueryStreamsResponse {
  /** streams is the list of all streams */
  streams: StreamResult[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryAllStreamsForReceiverRequest is the request type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverRequest {
  /** receiver_addr is the receiver wallet address being queried */
  receiverAddr: string;
  /** pagination is the pagination parameters for the request */
  pagination?: PageRequest;
}
/** QueryAllStreamsForReceiverResponse is the response type for the Query/AllStreamsForReceiver RPC method */
export interface QueryAllStreamsForReceiverResponse {
  /** receiver_addr is the receiver wallet address being queried */
  receiverAddr: string;
  /** streams is the list of all streams */
  streams: StreamResult[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryStreamByReceiverSenderRequest is the request type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderRequest {
  /** receiver_addr is the receiver wallet address being queried */
  receiverAddr: string;
  /** sender_addr is the sender wallet address being queried */
  senderAddr: string;
}
/** QueryStreamByReceiverSenderResponse is the response type for the Query/StreamByReceiverSender RPC method */
export interface QueryStreamByReceiverSenderResponse {
  /** stream is the StreamResult */
  stream: StreamResult;
}
/** QueryStreamReceiverSenderCurrentFlowRequest is the request type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowRequest {
  /** receiver_addr is the receiver wallet address being queried */
  receiverAddr: string;
  /** sender_addr is the sender wallet address being queried */
  senderAddr: string;
}
/** QueryStreamReceiverSenderCurrentFlowResponse is the response type for the Query/StreamReceiverSenderCurrentFlow RPC method */
export interface QueryStreamReceiverSenderCurrentFlowResponse {
  /** configured_flow_rate is the flow rate configured in the stream */
  configuredFlowRate: bigint;
  /** current_flow_rate is the actual flow rate. This will be zero if the depositZeroTime has passed, or deposit is zero */
  currentFlowRate: bigint;
}
/** QueryAllStreamsForSenderRequest is the request type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderRequest {
  /** sender_addr is the receiver wallet address being queried */
  senderAddr: string;
  /** pagination is the pagination parameters for the request */
  pagination?: PageRequest;
}
/** QueryAllStreamsForSenderResponse is the response type for the Query/AllStreamsForSender RPC method */
export interface QueryAllStreamsForSenderResponse {
  /** sender_addr is the receiver wallet address being queried */
  senderAddr: string;
  /** streams is the list of all streams */
  streams: StreamResult[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
function createBaseStreamResult(): StreamResult {
  return {
    receiver: "",
    sender: "",
    stream: undefined,
  };
}
export const StreamResult = {
  typeUrl: "/mainchain.stream.v1.StreamResult",
  encode(message: StreamResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): StreamResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamResult();
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
  fromJSON(object: any): StreamResult {
    const obj = createBaseStreamResult();
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.stream)) obj.stream = Stream.fromJSON(object.stream);
    return obj;
  },
  toJSON(message: StreamResult): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    message.stream !== undefined && (obj.stream = message.stream ? Stream.toJSON(message.stream) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StreamResult>, I>>(object: I): StreamResult {
    const message = createBaseStreamResult();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = Stream.fromPartial(object.stream);
    }
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/mainchain.stream.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/mainchain.stream.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryCalculateFlowRateRequest(): QueryCalculateFlowRateRequest {
  return {
    coin: "",
    period: 0,
    duration: BigInt(0),
  };
}
export const QueryCalculateFlowRateRequest = {
  typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateRequest",
  encode(message: QueryCalculateFlowRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== "") {
      writer.uint32(10).string(message.coin);
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(24).uint64(message.duration);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateFlowRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalculateFlowRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = reader.string();
          break;
        case 2:
          message.period = reader.int32() as any;
          break;
        case 3:
          message.duration = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalculateFlowRateRequest {
    const obj = createBaseQueryCalculateFlowRateRequest();
    if (isSet(object.coin)) obj.coin = String(object.coin);
    if (isSet(object.period)) obj.period = streamPeriodFromJSON(object.period);
    if (isSet(object.duration)) obj.duration = BigInt(object.duration.toString());
    return obj;
  },
  toJSON(message: QueryCalculateFlowRateRequest): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin);
    message.period !== undefined && (obj.period = streamPeriodToJSON(message.period));
    message.duration !== undefined && (obj.duration = (message.duration || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCalculateFlowRateRequest>, I>>(
    object: I,
  ): QueryCalculateFlowRateRequest {
    const message = createBaseQueryCalculateFlowRateRequest();
    message.coin = object.coin ?? "";
    message.period = object.period ?? 0;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration.toString());
    }
    return message;
  },
};
function createBaseQueryCalculateFlowRateResponse(): QueryCalculateFlowRateResponse {
  return {
    coin: Coin.fromPartial({}),
    period: 0,
    duration: BigInt(0),
    seconds: BigInt(0),
    flowRate: BigInt(0),
  };
}
export const QueryCalculateFlowRateResponse = {
  typeUrl: "/mainchain.stream.v1.QueryCalculateFlowRateResponse",
  encode(
    message: QueryCalculateFlowRateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(24).uint64(message.duration);
    }
    if (message.seconds !== BigInt(0)) {
      writer.uint32(32).uint64(message.seconds);
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(40).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateFlowRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalculateFlowRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = reader.int32() as any;
          break;
        case 3:
          message.duration = reader.uint64();
          break;
        case 4:
          message.seconds = reader.uint64();
          break;
        case 5:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalculateFlowRateResponse {
    const obj = createBaseQueryCalculateFlowRateResponse();
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    if (isSet(object.period)) obj.period = streamPeriodFromJSON(object.period);
    if (isSet(object.duration)) obj.duration = BigInt(object.duration.toString());
    if (isSet(object.seconds)) obj.seconds = BigInt(object.seconds.toString());
    if (isSet(object.flowRate)) obj.flowRate = BigInt(object.flowRate.toString());
    return obj;
  },
  toJSON(message: QueryCalculateFlowRateResponse): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.period !== undefined && (obj.period = streamPeriodToJSON(message.period));
    message.duration !== undefined && (obj.duration = (message.duration || BigInt(0)).toString());
    message.seconds !== undefined && (obj.seconds = (message.seconds || BigInt(0)).toString());
    message.flowRate !== undefined && (obj.flowRate = (message.flowRate || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCalculateFlowRateResponse>, I>>(
    object: I,
  ): QueryCalculateFlowRateResponse {
    const message = createBaseQueryCalculateFlowRateResponse();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    }
    message.period = object.period ?? 0;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration.toString());
    }
    if (object.seconds !== undefined && object.seconds !== null) {
      message.seconds = BigInt(object.seconds.toString());
    }
    if (object.flowRate !== undefined && object.flowRate !== null) {
      message.flowRate = BigInt(object.flowRate.toString());
    }
    return message;
  },
};
function createBaseQueryStreamsRequest(): QueryStreamsRequest {
  return {
    pagination: undefined,
  };
}
export const QueryStreamsRequest = {
  typeUrl: "/mainchain.stream.v1.QueryStreamsRequest",
  encode(message: QueryStreamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStreamsRequest {
    const obj = createBaseQueryStreamsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryStreamsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamsRequest>, I>>(object: I): QueryStreamsRequest {
    const message = createBaseQueryStreamsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryStreamsResponse(): QueryStreamsResponse {
  return {
    streams: [],
    pagination: undefined,
  };
}
export const QueryStreamsResponse = {
  typeUrl: "/mainchain.stream.v1.QueryStreamsResponse",
  encode(message: QueryStreamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.streams) {
      StreamResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streams.push(StreamResult.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStreamsResponse {
    const obj = createBaseQueryStreamsResponse();
    if (Array.isArray(object?.streams))
      obj.streams = object.streams.map((e: any) => StreamResult.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryStreamsResponse): unknown {
    const obj: any = {};
    if (message.streams) {
      obj.streams = message.streams.map((e) => (e ? StreamResult.toJSON(e) : undefined));
    } else {
      obj.streams = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamsResponse>, I>>(object: I): QueryStreamsResponse {
    const message = createBaseQueryStreamsResponse();
    message.streams = object.streams?.map((e) => StreamResult.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllStreamsForReceiverRequest(): QueryAllStreamsForReceiverRequest {
  return {
    receiverAddr: "",
    pagination: undefined,
  };
}
export const QueryAllStreamsForReceiverRequest = {
  typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverRequest",
  encode(
    message: QueryAllStreamsForReceiverRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.receiverAddr !== "") {
      writer.uint32(10).string(message.receiverAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForReceiverRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForReceiverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiverAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllStreamsForReceiverRequest {
    const obj = createBaseQueryAllStreamsForReceiverRequest();
    if (isSet(object.receiverAddr)) obj.receiverAddr = String(object.receiverAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllStreamsForReceiverRequest): unknown {
    const obj: any = {};
    message.receiverAddr !== undefined && (obj.receiverAddr = message.receiverAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStreamsForReceiverRequest>, I>>(
    object: I,
  ): QueryAllStreamsForReceiverRequest {
    const message = createBaseQueryAllStreamsForReceiverRequest();
    message.receiverAddr = object.receiverAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllStreamsForReceiverResponse(): QueryAllStreamsForReceiverResponse {
  return {
    receiverAddr: "",
    streams: [],
    pagination: undefined,
  };
}
export const QueryAllStreamsForReceiverResponse = {
  typeUrl: "/mainchain.stream.v1.QueryAllStreamsForReceiverResponse",
  encode(
    message: QueryAllStreamsForReceiverResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.receiverAddr !== "") {
      writer.uint32(10).string(message.receiverAddr);
    }
    for (const v of message.streams) {
      StreamResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForReceiverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForReceiverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiverAddr = reader.string();
          break;
        case 2:
          message.streams.push(StreamResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllStreamsForReceiverResponse {
    const obj = createBaseQueryAllStreamsForReceiverResponse();
    if (isSet(object.receiverAddr)) obj.receiverAddr = String(object.receiverAddr);
    if (Array.isArray(object?.streams))
      obj.streams = object.streams.map((e: any) => StreamResult.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllStreamsForReceiverResponse): unknown {
    const obj: any = {};
    message.receiverAddr !== undefined && (obj.receiverAddr = message.receiverAddr);
    if (message.streams) {
      obj.streams = message.streams.map((e) => (e ? StreamResult.toJSON(e) : undefined));
    } else {
      obj.streams = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStreamsForReceiverResponse>, I>>(
    object: I,
  ): QueryAllStreamsForReceiverResponse {
    const message = createBaseQueryAllStreamsForReceiverResponse();
    message.receiverAddr = object.receiverAddr ?? "";
    message.streams = object.streams?.map((e) => StreamResult.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryStreamByReceiverSenderRequest(): QueryStreamByReceiverSenderRequest {
  return {
    receiverAddr: "",
    senderAddr: "",
  };
}
export const QueryStreamByReceiverSenderRequest = {
  typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderRequest",
  encode(
    message: QueryStreamByReceiverSenderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.receiverAddr !== "") {
      writer.uint32(10).string(message.receiverAddr);
    }
    if (message.senderAddr !== "") {
      writer.uint32(18).string(message.senderAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamByReceiverSenderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamByReceiverSenderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiverAddr = reader.string();
          break;
        case 2:
          message.senderAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStreamByReceiverSenderRequest {
    const obj = createBaseQueryStreamByReceiverSenderRequest();
    if (isSet(object.receiverAddr)) obj.receiverAddr = String(object.receiverAddr);
    if (isSet(object.senderAddr)) obj.senderAddr = String(object.senderAddr);
    return obj;
  },
  toJSON(message: QueryStreamByReceiverSenderRequest): unknown {
    const obj: any = {};
    message.receiverAddr !== undefined && (obj.receiverAddr = message.receiverAddr);
    message.senderAddr !== undefined && (obj.senderAddr = message.senderAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamByReceiverSenderRequest>, I>>(
    object: I,
  ): QueryStreamByReceiverSenderRequest {
    const message = createBaseQueryStreamByReceiverSenderRequest();
    message.receiverAddr = object.receiverAddr ?? "";
    message.senderAddr = object.senderAddr ?? "";
    return message;
  },
};
function createBaseQueryStreamByReceiverSenderResponse(): QueryStreamByReceiverSenderResponse {
  return {
    stream: StreamResult.fromPartial({}),
  };
}
export const QueryStreamByReceiverSenderResponse = {
  typeUrl: "/mainchain.stream.v1.QueryStreamByReceiverSenderResponse",
  encode(
    message: QueryStreamByReceiverSenderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.stream !== undefined) {
      StreamResult.encode(message.stream, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamByReceiverSenderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamByReceiverSenderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stream = StreamResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStreamByReceiverSenderResponse {
    const obj = createBaseQueryStreamByReceiverSenderResponse();
    if (isSet(object.stream)) obj.stream = StreamResult.fromJSON(object.stream);
    return obj;
  },
  toJSON(message: QueryStreamByReceiverSenderResponse): unknown {
    const obj: any = {};
    message.stream !== undefined &&
      (obj.stream = message.stream ? StreamResult.toJSON(message.stream) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamByReceiverSenderResponse>, I>>(
    object: I,
  ): QueryStreamByReceiverSenderResponse {
    const message = createBaseQueryStreamByReceiverSenderResponse();
    if (object.stream !== undefined && object.stream !== null) {
      message.stream = StreamResult.fromPartial(object.stream);
    }
    return message;
  },
};
function createBaseQueryStreamReceiverSenderCurrentFlowRequest(): QueryStreamReceiverSenderCurrentFlowRequest {
  return {
    receiverAddr: "",
    senderAddr: "",
  };
}
export const QueryStreamReceiverSenderCurrentFlowRequest = {
  typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowRequest",
  encode(
    message: QueryStreamReceiverSenderCurrentFlowRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.receiverAddr !== "") {
      writer.uint32(10).string(message.receiverAddr);
    }
    if (message.senderAddr !== "") {
      writer.uint32(18).string(message.senderAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamReceiverSenderCurrentFlowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiverAddr = reader.string();
          break;
        case 2:
          message.senderAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStreamReceiverSenderCurrentFlowRequest {
    const obj = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
    if (isSet(object.receiverAddr)) obj.receiverAddr = String(object.receiverAddr);
    if (isSet(object.senderAddr)) obj.senderAddr = String(object.senderAddr);
    return obj;
  },
  toJSON(message: QueryStreamReceiverSenderCurrentFlowRequest): unknown {
    const obj: any = {};
    message.receiverAddr !== undefined && (obj.receiverAddr = message.receiverAddr);
    message.senderAddr !== undefined && (obj.senderAddr = message.senderAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamReceiverSenderCurrentFlowRequest>, I>>(
    object: I,
  ): QueryStreamReceiverSenderCurrentFlowRequest {
    const message = createBaseQueryStreamReceiverSenderCurrentFlowRequest();
    message.receiverAddr = object.receiverAddr ?? "";
    message.senderAddr = object.senderAddr ?? "";
    return message;
  },
};
function createBaseQueryStreamReceiverSenderCurrentFlowResponse(): QueryStreamReceiverSenderCurrentFlowResponse {
  return {
    configuredFlowRate: BigInt(0),
    currentFlowRate: BigInt(0),
  };
}
export const QueryStreamReceiverSenderCurrentFlowResponse = {
  typeUrl: "/mainchain.stream.v1.QueryStreamReceiverSenderCurrentFlowResponse",
  encode(
    message: QueryStreamReceiverSenderCurrentFlowResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.configuredFlowRate !== BigInt(0)) {
      writer.uint32(8).int64(message.configuredFlowRate);
    }
    if (message.currentFlowRate !== BigInt(0)) {
      writer.uint32(16).int64(message.currentFlowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStreamReceiverSenderCurrentFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configuredFlowRate = reader.int64();
          break;
        case 2:
          message.currentFlowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStreamReceiverSenderCurrentFlowResponse {
    const obj = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
    if (isSet(object.configuredFlowRate))
      obj.configuredFlowRate = BigInt(object.configuredFlowRate.toString());
    if (isSet(object.currentFlowRate)) obj.currentFlowRate = BigInt(object.currentFlowRate.toString());
    return obj;
  },
  toJSON(message: QueryStreamReceiverSenderCurrentFlowResponse): unknown {
    const obj: any = {};
    message.configuredFlowRate !== undefined &&
      (obj.configuredFlowRate = (message.configuredFlowRate || BigInt(0)).toString());
    message.currentFlowRate !== undefined &&
      (obj.currentFlowRate = (message.currentFlowRate || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStreamReceiverSenderCurrentFlowResponse>, I>>(
    object: I,
  ): QueryStreamReceiverSenderCurrentFlowResponse {
    const message = createBaseQueryStreamReceiverSenderCurrentFlowResponse();
    if (object.configuredFlowRate !== undefined && object.configuredFlowRate !== null) {
      message.configuredFlowRate = BigInt(object.configuredFlowRate.toString());
    }
    if (object.currentFlowRate !== undefined && object.currentFlowRate !== null) {
      message.currentFlowRate = BigInt(object.currentFlowRate.toString());
    }
    return message;
  },
};
function createBaseQueryAllStreamsForSenderRequest(): QueryAllStreamsForSenderRequest {
  return {
    senderAddr: "",
    pagination: undefined,
  };
}
export const QueryAllStreamsForSenderRequest = {
  typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderRequest",
  encode(
    message: QueryAllStreamsForSenderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.senderAddr !== "") {
      writer.uint32(10).string(message.senderAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForSenderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForSenderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllStreamsForSenderRequest {
    const obj = createBaseQueryAllStreamsForSenderRequest();
    if (isSet(object.senderAddr)) obj.senderAddr = String(object.senderAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllStreamsForSenderRequest): unknown {
    const obj: any = {};
    message.senderAddr !== undefined && (obj.senderAddr = message.senderAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStreamsForSenderRequest>, I>>(
    object: I,
  ): QueryAllStreamsForSenderRequest {
    const message = createBaseQueryAllStreamsForSenderRequest();
    message.senderAddr = object.senderAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllStreamsForSenderResponse(): QueryAllStreamsForSenderResponse {
  return {
    senderAddr: "",
    streams: [],
    pagination: undefined,
  };
}
export const QueryAllStreamsForSenderResponse = {
  typeUrl: "/mainchain.stream.v1.QueryAllStreamsForSenderResponse",
  encode(
    message: QueryAllStreamsForSenderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.senderAddr !== "") {
      writer.uint32(10).string(message.senderAddr);
    }
    for (const v of message.streams) {
      StreamResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStreamsForSenderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStreamsForSenderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddr = reader.string();
          break;
        case 2:
          message.streams.push(StreamResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllStreamsForSenderResponse {
    const obj = createBaseQueryAllStreamsForSenderResponse();
    if (isSet(object.senderAddr)) obj.senderAddr = String(object.senderAddr);
    if (Array.isArray(object?.streams))
      obj.streams = object.streams.map((e: any) => StreamResult.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllStreamsForSenderResponse): unknown {
    const obj: any = {};
    message.senderAddr !== undefined && (obj.senderAddr = message.senderAddr);
    if (message.streams) {
      obj.streams = message.streams.map((e) => (e ? StreamResult.toJSON(e) : undefined));
    } else {
      obj.streams = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStreamsForSenderResponse>, I>>(
    object: I,
  ): QueryAllStreamsForSenderResponse {
    const message = createBaseQueryAllStreamsForSenderResponse();
    message.senderAddr = object.senderAddr ?? "";
    message.streams = object.streams?.map((e) => StreamResult.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** CalculateFlowRate can be used to calculate a flow rate (coins per second) to be used when creating/updating a stream */
  CalculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse>;
  /** Streams queries all Streams. */
  Streams(request?: QueryStreamsRequest): Promise<QueryStreamsResponse>;
  /** AllStreamsForReceiver queries all Streams for a given receiver address */
  AllStreamsForReceiver(
    request: QueryAllStreamsForReceiverRequest,
  ): Promise<QueryAllStreamsForReceiverResponse>;
  /** StreamByReceiverSender queries a stream for a given receiver and sender pair */
  StreamByReceiverSender(
    request: QueryStreamByReceiverSenderRequest,
  ): Promise<QueryStreamByReceiverSenderResponse>;
  /** StreamReceiverSenderCurrentFlow queries a stream by the given receiver/sender pair and returns the current flow data */
  StreamReceiverSenderCurrentFlow(
    request: QueryStreamReceiverSenderCurrentFlowRequest,
  ): Promise<QueryStreamReceiverSenderCurrentFlowResponse>;
  /** AllStreamsForSender queries all Streams for a given sender address */
  AllStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.CalculateFlowRate = this.CalculateFlowRate.bind(this);
    this.Streams = this.Streams.bind(this);
    this.AllStreamsForReceiver = this.AllStreamsForReceiver.bind(this);
    this.StreamByReceiverSender = this.StreamByReceiverSender.bind(this);
    this.StreamReceiverSenderCurrentFlow = this.StreamReceiverSenderCurrentFlow.bind(this);
    this.AllStreamsForSender = this.AllStreamsForSender.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  CalculateFlowRate(request: QueryCalculateFlowRateRequest): Promise<QueryCalculateFlowRateResponse> {
    const data = QueryCalculateFlowRateRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "CalculateFlowRate", data);
    return promise.then((data) => QueryCalculateFlowRateResponse.decode(new BinaryReader(data)));
  }
  Streams(
    request: QueryStreamsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryStreamsResponse> {
    const data = QueryStreamsRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "Streams", data);
    return promise.then((data) => QueryStreamsResponse.decode(new BinaryReader(data)));
  }
  AllStreamsForReceiver(
    request: QueryAllStreamsForReceiverRequest,
  ): Promise<QueryAllStreamsForReceiverResponse> {
    const data = QueryAllStreamsForReceiverRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "AllStreamsForReceiver", data);
    return promise.then((data) => QueryAllStreamsForReceiverResponse.decode(new BinaryReader(data)));
  }
  StreamByReceiverSender(
    request: QueryStreamByReceiverSenderRequest,
  ): Promise<QueryStreamByReceiverSenderResponse> {
    const data = QueryStreamByReceiverSenderRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "StreamByReceiverSender", data);
    return promise.then((data) => QueryStreamByReceiverSenderResponse.decode(new BinaryReader(data)));
  }
  StreamReceiverSenderCurrentFlow(
    request: QueryStreamReceiverSenderCurrentFlowRequest,
  ): Promise<QueryStreamReceiverSenderCurrentFlowResponse> {
    const data = QueryStreamReceiverSenderCurrentFlowRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "StreamReceiverSenderCurrentFlow", data);
    return promise.then((data) =>
      QueryStreamReceiverSenderCurrentFlowResponse.decode(new BinaryReader(data)),
    );
  }
  AllStreamsForSender(request: QueryAllStreamsForSenderRequest): Promise<QueryAllStreamsForSenderResponse> {
    const data = QueryAllStreamsForSenderRequest.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Query", "AllStreamsForSender", data);
    return promise.then((data) => QueryAllStreamsForSenderResponse.decode(new BinaryReader(data)));
  }
}
