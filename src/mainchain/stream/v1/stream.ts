/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.stream.v1";
/** StreamPeriod enumerates the valid periods for calculating flow rates */
export enum StreamPeriod {
  /** STREAM_PERIOD_UNSPECIFIED - STREAM_PERIOD_UNSPECIFIED defines unspecified */
  STREAM_PERIOD_UNSPECIFIED = 0,
  /** STREAM_PERIOD_SECOND - STREAM_PERIOD_SECOND defines second */
  STREAM_PERIOD_SECOND = 1,
  /** STREAM_PERIOD_MINUTE - STREAM_PERIOD_MINUTE defines minute */
  STREAM_PERIOD_MINUTE = 2,
  /** STREAM_PERIOD_HOUR - STREAM_PERIOD_HOUR defines hour */
  STREAM_PERIOD_HOUR = 3,
  /** STREAM_PERIOD_DAY - STREAM_PERIOD_DAY defines day */
  STREAM_PERIOD_DAY = 4,
  /** STREAM_PERIOD_WEEK - STREAM_PERIOD_WEEK defines week */
  STREAM_PERIOD_WEEK = 5,
  /** STREAM_PERIOD_MONTH - STREAM_PERIOD_MONTH defines month */
  STREAM_PERIOD_MONTH = 6,
  /** STREAM_PERIOD_YEAR - STREAM_PERIOD_YEAR defines year */
  STREAM_PERIOD_YEAR = 7,
  UNRECOGNIZED = -1,
}
export function streamPeriodFromJSON(object: any): StreamPeriod {
  switch (object) {
    case 0:
    case "STREAM_PERIOD_UNSPECIFIED":
      return StreamPeriod.STREAM_PERIOD_UNSPECIFIED;
    case 1:
    case "STREAM_PERIOD_SECOND":
      return StreamPeriod.STREAM_PERIOD_SECOND;
    case 2:
    case "STREAM_PERIOD_MINUTE":
      return StreamPeriod.STREAM_PERIOD_MINUTE;
    case 3:
    case "STREAM_PERIOD_HOUR":
      return StreamPeriod.STREAM_PERIOD_HOUR;
    case 4:
    case "STREAM_PERIOD_DAY":
      return StreamPeriod.STREAM_PERIOD_DAY;
    case 5:
    case "STREAM_PERIOD_WEEK":
      return StreamPeriod.STREAM_PERIOD_WEEK;
    case 6:
    case "STREAM_PERIOD_MONTH":
      return StreamPeriod.STREAM_PERIOD_MONTH;
    case 7:
    case "STREAM_PERIOD_YEAR":
      return StreamPeriod.STREAM_PERIOD_YEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamPeriod.UNRECOGNIZED;
  }
}
export function streamPeriodToJSON(object: StreamPeriod): string {
  switch (object) {
    case StreamPeriod.STREAM_PERIOD_UNSPECIFIED:
      return "STREAM_PERIOD_UNSPECIFIED";
    case StreamPeriod.STREAM_PERIOD_SECOND:
      return "STREAM_PERIOD_SECOND";
    case StreamPeriod.STREAM_PERIOD_MINUTE:
      return "STREAM_PERIOD_MINUTE";
    case StreamPeriod.STREAM_PERIOD_HOUR:
      return "STREAM_PERIOD_HOUR";
    case StreamPeriod.STREAM_PERIOD_DAY:
      return "STREAM_PERIOD_DAY";
    case StreamPeriod.STREAM_PERIOD_WEEK:
      return "STREAM_PERIOD_WEEK";
    case StreamPeriod.STREAM_PERIOD_MONTH:
      return "STREAM_PERIOD_MONTH";
    case StreamPeriod.STREAM_PERIOD_YEAR:
      return "STREAM_PERIOD_YEAR";
    case StreamPeriod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Stream holds data about a stream */
export interface Stream {
  /** deposit tracks the total amount the user has deposited to cover the stream, including any updates to the stream */
  deposit: Coin;
  /** flow_rate is the current rate of nund per second */
  flowRate: bigint;
  /** last_outflow_time is the timestamp of the last claim. Allows for a start point to calculate the next claim */
  lastOutflowTime: Timestamp;
  /** deposit_zero_time is the timestamp for when the current deposited amount will run out */
  depositZeroTime: Timestamp;
  /** cancellable is whether a stream can be cancelled. Default is true, but will be false for example id eFUND is used */
  cancellable: boolean;
}
function createBaseStream(): Stream {
  return {
    deposit: Coin.fromPartial({}),
    flowRate: BigInt(0),
    lastOutflowTime: Timestamp.fromPartial({}),
    depositZeroTime: Timestamp.fromPartial({}),
    cancellable: false,
  };
}
export const Stream = {
  typeUrl: "/mainchain.stream.v1.Stream",
  encode(message: Stream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(16).int64(message.flowRate);
    }
    if (message.lastOutflowTime !== undefined) {
      Timestamp.encode(message.lastOutflowTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.depositZeroTime !== undefined) {
      Timestamp.encode(message.depositZeroTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.cancellable === true) {
      writer.uint32(40).bool(message.cancellable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Stream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.flowRate = reader.int64();
          break;
        case 3:
          message.lastOutflowTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.depositZeroTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.cancellable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Stream {
    const obj = createBaseStream();
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    if (isSet(object.flowRate)) obj.flowRate = BigInt(object.flowRate.toString());
    if (isSet(object.lastOutflowTime)) obj.lastOutflowTime = fromJsonTimestamp(object.lastOutflowTime);
    if (isSet(object.depositZeroTime)) obj.depositZeroTime = fromJsonTimestamp(object.depositZeroTime);
    if (isSet(object.cancellable)) obj.cancellable = Boolean(object.cancellable);
    return obj;
  },
  toJSON(message: Stream): unknown {
    const obj: any = {};
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.flowRate !== undefined && (obj.flowRate = (message.flowRate || BigInt(0)).toString());
    message.lastOutflowTime !== undefined &&
      (obj.lastOutflowTime = fromTimestamp(message.lastOutflowTime).toISOString());
    message.depositZeroTime !== undefined &&
      (obj.depositZeroTime = fromTimestamp(message.depositZeroTime).toISOString());
    message.cancellable !== undefined && (obj.cancellable = message.cancellable);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Stream>, I>>(object: I): Stream {
    const message = createBaseStream();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    if (object.flowRate !== undefined && object.flowRate !== null) {
      message.flowRate = BigInt(object.flowRate.toString());
    }
    if (object.lastOutflowTime !== undefined && object.lastOutflowTime !== null) {
      message.lastOutflowTime = Timestamp.fromPartial(object.lastOutflowTime);
    }
    if (object.depositZeroTime !== undefined && object.depositZeroTime !== null) {
      message.depositZeroTime = Timestamp.fromPartial(object.depositZeroTime);
    }
    message.cancellable = object.cancellable ?? false;
    return message;
  },
};
