/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
export const protobufPackage = "mainchain.stream.v1";
/** MsgCreateStream creates a new stream */
export interface MsgCreateStream {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the address of the stream creator, sending the stream */
  sender: string;
  /** deposit is the amount being sent to deposit for the stream */
  deposit: Coin;
  /** flow_rate is the rate of nund per second */
  flowRate: bigint;
}
/** MsgCreateStreamResponse is the response for MsgCreateStream */
export interface MsgCreateStreamResponse {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the address of the stream creator, sending the stream */
  sender: string;
  /** deposit is the amount being sent to deposit for the stream */
  deposit: Coin;
  /** flow_rate is the rate of nund per second */
  flowRate: bigint;
}
/** MsgClaimStream claims pending payments form a stream using the sender and receiver addresses */
export interface MsgClaimStream {
  /** sender is sender wallet of the stream being claimed */
  sender: string;
  /** receiver is the wallet making the claim */
  receiver: string;
}
export interface MsgClaimStreamResponse {
  /** total_claimed is the total value of the claim */
  totalClaimed: Coin;
  /** stream_payment is the amount received by the receiver wallet */
  streamPayment: Coin;
  /** validator_fee is the amount sent to validators */
  validatorFee: Coin;
  /** remaining_deposit is the amount of deposit remaining in the stream */
  remainingDeposit: Coin;
}
/** MsgTopUpDeposit tops up deposits in an existing stream */
export interface MsgTopUpDeposit {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the wallet making the deposit */
  sender: string;
  /** deposit is the amount being sent to deposit for the stream */
  deposit: Coin;
}
/** MsgTopUpDepositResponse is the response for MsgTopUpDeposit */
export interface MsgTopUpDepositResponse {
  /** deposit_amount is the amount deposited */
  depositAmount: Coin;
  /** current_deposit is the total current deposit in the stream */
  currentDeposit: Coin;
  /** deposit_zero_time is the timestamp for when the current deposited amount will run out */
  depositZeroTime: Timestamp;
}
/** MsgUpdateFlowRate updates a stream's flow rate */
export interface MsgUpdateFlowRate {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the wallet making the update */
  sender: string;
  /** flow_rate is the rate of nund per second */
  flowRate: bigint;
}
/** MsgUpdateFlowRateResponse is the response for MsgUpdateFlowRate */
export interface MsgUpdateFlowRateResponse {
  /** flow_rate is the rate of nund per second */
  flowRate: bigint;
}
/** MsgCancelStream */
export interface MsgCancelStream {
  /** receiver is the wallet that will receive stream payments */
  receiver: string;
  /** sender is the wallet cancelling */
  sender: string;
}
/** MsgCancelStreamResponse */
export interface MsgCancelStreamResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/stream parameters to update.
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
function createBaseMsgCreateStream(): MsgCreateStream {
  return {
    receiver: "",
    sender: "",
    deposit: Coin.fromPartial({}),
    flowRate: BigInt(0),
  };
}
export const MsgCreateStream = {
  typeUrl: "/mainchain.stream.v1.MsgCreateStream",
  encode(message: MsgCreateStream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(32).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStream();
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
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateStream {
    const obj = createBaseMsgCreateStream();
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    if (isSet(object.flowRate)) obj.flowRate = BigInt(object.flowRate.toString());
    return obj;
  },
  toJSON(message: MsgCreateStream): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.flowRate !== undefined && (obj.flowRate = (message.flowRate || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateStream>, I>>(object: I): MsgCreateStream {
    const message = createBaseMsgCreateStream();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    if (object.flowRate !== undefined && object.flowRate !== null) {
      message.flowRate = BigInt(object.flowRate.toString());
    }
    return message;
  },
};
function createBaseMsgCreateStreamResponse(): MsgCreateStreamResponse {
  return {
    receiver: "",
    sender: "",
    deposit: Coin.fromPartial({}),
    flowRate: BigInt(0),
  };
}
export const MsgCreateStreamResponse = {
  typeUrl: "/mainchain.stream.v1.MsgCreateStreamResponse",
  encode(message: MsgCreateStreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(32).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStreamResponse();
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
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateStreamResponse {
    const obj = createBaseMsgCreateStreamResponse();
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    if (isSet(object.flowRate)) obj.flowRate = BigInt(object.flowRate.toString());
    return obj;
  },
  toJSON(message: MsgCreateStreamResponse): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.flowRate !== undefined && (obj.flowRate = (message.flowRate || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateStreamResponse>, I>>(object: I): MsgCreateStreamResponse {
    const message = createBaseMsgCreateStreamResponse();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    if (object.flowRate !== undefined && object.flowRate !== null) {
      message.flowRate = BigInt(object.flowRate.toString());
    }
    return message;
  },
};
function createBaseMsgClaimStream(): MsgClaimStream {
  return {
    sender: "",
    receiver: "",
  };
}
export const MsgClaimStream = {
  typeUrl: "/mainchain.stream.v1.MsgClaimStream",
  encode(message: MsgClaimStream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimStream {
    const obj = createBaseMsgClaimStream();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    return obj;
  },
  toJSON(message: MsgClaimStream): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaimStream>, I>>(object: I): MsgClaimStream {
    const message = createBaseMsgClaimStream();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};
function createBaseMsgClaimStreamResponse(): MsgClaimStreamResponse {
  return {
    totalClaimed: Coin.fromPartial({}),
    streamPayment: Coin.fromPartial({}),
    validatorFee: Coin.fromPartial({}),
    remainingDeposit: Coin.fromPartial({}),
  };
}
export const MsgClaimStreamResponse = {
  typeUrl: "/mainchain.stream.v1.MsgClaimStreamResponse",
  encode(message: MsgClaimStreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalClaimed !== undefined) {
      Coin.encode(message.totalClaimed, writer.uint32(18).fork()).ldelim();
    }
    if (message.streamPayment !== undefined) {
      Coin.encode(message.streamPayment, writer.uint32(26).fork()).ldelim();
    }
    if (message.validatorFee !== undefined) {
      Coin.encode(message.validatorFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.remainingDeposit !== undefined) {
      Coin.encode(message.remainingDeposit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.totalClaimed = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.streamPayment = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.validatorFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.remainingDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimStreamResponse {
    const obj = createBaseMsgClaimStreamResponse();
    if (isSet(object.totalClaimed)) obj.totalClaimed = Coin.fromJSON(object.totalClaimed);
    if (isSet(object.streamPayment)) obj.streamPayment = Coin.fromJSON(object.streamPayment);
    if (isSet(object.validatorFee)) obj.validatorFee = Coin.fromJSON(object.validatorFee);
    if (isSet(object.remainingDeposit)) obj.remainingDeposit = Coin.fromJSON(object.remainingDeposit);
    return obj;
  },
  toJSON(message: MsgClaimStreamResponse): unknown {
    const obj: any = {};
    message.totalClaimed !== undefined &&
      (obj.totalClaimed = message.totalClaimed ? Coin.toJSON(message.totalClaimed) : undefined);
    message.streamPayment !== undefined &&
      (obj.streamPayment = message.streamPayment ? Coin.toJSON(message.streamPayment) : undefined);
    message.validatorFee !== undefined &&
      (obj.validatorFee = message.validatorFee ? Coin.toJSON(message.validatorFee) : undefined);
    message.remainingDeposit !== undefined &&
      (obj.remainingDeposit = message.remainingDeposit ? Coin.toJSON(message.remainingDeposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaimStreamResponse>, I>>(object: I): MsgClaimStreamResponse {
    const message = createBaseMsgClaimStreamResponse();
    if (object.totalClaimed !== undefined && object.totalClaimed !== null) {
      message.totalClaimed = Coin.fromPartial(object.totalClaimed);
    }
    if (object.streamPayment !== undefined && object.streamPayment !== null) {
      message.streamPayment = Coin.fromPartial(object.streamPayment);
    }
    if (object.validatorFee !== undefined && object.validatorFee !== null) {
      message.validatorFee = Coin.fromPartial(object.validatorFee);
    }
    if (object.remainingDeposit !== undefined && object.remainingDeposit !== null) {
      message.remainingDeposit = Coin.fromPartial(object.remainingDeposit);
    }
    return message;
  },
};
function createBaseMsgTopUpDeposit(): MsgTopUpDeposit {
  return {
    receiver: "",
    sender: "",
    deposit: Coin.fromPartial({}),
  };
}
export const MsgTopUpDeposit = {
  typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
  encode(message: MsgTopUpDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpDeposit();
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
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTopUpDeposit {
    const obj = createBaseMsgTopUpDeposit();
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    return obj;
  },
  toJSON(message: MsgTopUpDeposit): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTopUpDeposit>, I>>(object: I): MsgTopUpDeposit {
    const message = createBaseMsgTopUpDeposit();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    return message;
  },
};
function createBaseMsgTopUpDepositResponse(): MsgTopUpDepositResponse {
  return {
    depositAmount: Coin.fromPartial({}),
    currentDeposit: Coin.fromPartial({}),
    depositZeroTime: Timestamp.fromPartial({}),
  };
}
export const MsgTopUpDepositResponse = {
  typeUrl: "/mainchain.stream.v1.MsgTopUpDepositResponse",
  encode(message: MsgTopUpDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositAmount !== undefined) {
      Coin.encode(message.depositAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentDeposit !== undefined) {
      Coin.encode(message.currentDeposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.depositZeroTime !== undefined) {
      Timestamp.encode(message.depositZeroTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.depositAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.currentDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.depositZeroTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTopUpDepositResponse {
    const obj = createBaseMsgTopUpDepositResponse();
    if (isSet(object.depositAmount)) obj.depositAmount = Coin.fromJSON(object.depositAmount);
    if (isSet(object.currentDeposit)) obj.currentDeposit = Coin.fromJSON(object.currentDeposit);
    if (isSet(object.depositZeroTime)) obj.depositZeroTime = fromJsonTimestamp(object.depositZeroTime);
    return obj;
  },
  toJSON(message: MsgTopUpDepositResponse): unknown {
    const obj: any = {};
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount ? Coin.toJSON(message.depositAmount) : undefined);
    message.currentDeposit !== undefined &&
      (obj.currentDeposit = message.currentDeposit ? Coin.toJSON(message.currentDeposit) : undefined);
    message.depositZeroTime !== undefined &&
      (obj.depositZeroTime = fromTimestamp(message.depositZeroTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTopUpDepositResponse>, I>>(object: I): MsgTopUpDepositResponse {
    const message = createBaseMsgTopUpDepositResponse();
    if (object.depositAmount !== undefined && object.depositAmount !== null) {
      message.depositAmount = Coin.fromPartial(object.depositAmount);
    }
    if (object.currentDeposit !== undefined && object.currentDeposit !== null) {
      message.currentDeposit = Coin.fromPartial(object.currentDeposit);
    }
    if (object.depositZeroTime !== undefined && object.depositZeroTime !== null) {
      message.depositZeroTime = Timestamp.fromPartial(object.depositZeroTime);
    }
    return message;
  },
};
function createBaseMsgUpdateFlowRate(): MsgUpdateFlowRate {
  return {
    receiver: "",
    sender: "",
    flowRate: BigInt(0),
  };
}
export const MsgUpdateFlowRate = {
  typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
  encode(message: MsgUpdateFlowRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(24).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlowRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFlowRate();
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
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateFlowRate {
    const obj = createBaseMsgUpdateFlowRate();
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.flowRate)) obj.flowRate = BigInt(object.flowRate.toString());
    return obj;
  },
  toJSON(message: MsgUpdateFlowRate): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    message.flowRate !== undefined && (obj.flowRate = (message.flowRate || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateFlowRate>, I>>(object: I): MsgUpdateFlowRate {
    const message = createBaseMsgUpdateFlowRate();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    if (object.flowRate !== undefined && object.flowRate !== null) {
      message.flowRate = BigInt(object.flowRate.toString());
    }
    return message;
  },
};
function createBaseMsgUpdateFlowRateResponse(): MsgUpdateFlowRateResponse {
  return {
    flowRate: BigInt(0),
  };
}
export const MsgUpdateFlowRateResponse = {
  typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRateResponse",
  encode(message: MsgUpdateFlowRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowRate !== BigInt(0)) {
      writer.uint32(16).int64(message.flowRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlowRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFlowRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.flowRate = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateFlowRateResponse {
    const obj = createBaseMsgUpdateFlowRateResponse();
    if (isSet(object.flowRate)) obj.flowRate = BigInt(object.flowRate.toString());
    return obj;
  },
  toJSON(message: MsgUpdateFlowRateResponse): unknown {
    const obj: any = {};
    message.flowRate !== undefined && (obj.flowRate = (message.flowRate || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateFlowRateResponse>, I>>(
    object: I,
  ): MsgUpdateFlowRateResponse {
    const message = createBaseMsgUpdateFlowRateResponse();
    if (object.flowRate !== undefined && object.flowRate !== null) {
      message.flowRate = BigInt(object.flowRate.toString());
    }
    return message;
  },
};
function createBaseMsgCancelStream(): MsgCancelStream {
  return {
    receiver: "",
    sender: "",
  };
}
export const MsgCancelStream = {
  typeUrl: "/mainchain.stream.v1.MsgCancelStream",
  encode(message: MsgCancelStream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelStream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelStream {
    const obj = createBaseMsgCancelStream();
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgCancelStream): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelStream>, I>>(object: I): MsgCancelStream {
    const message = createBaseMsgCancelStream();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgCancelStreamResponse(): MsgCancelStreamResponse {
  return {};
}
export const MsgCancelStreamResponse = {
  typeUrl: "/mainchain.stream.v1.MsgCancelStreamResponse",
  encode(_: MsgCancelStreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelStreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelStreamResponse();
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
  fromJSON(_: any): MsgCancelStreamResponse {
    const obj = createBaseMsgCancelStreamResponse();
    return obj;
  },
  toJSON(_: MsgCancelStreamResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelStreamResponse>, I>>(_: I): MsgCancelStreamResponse {
    const message = createBaseMsgCancelStreamResponse();
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
  typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
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
  typeUrl: "/mainchain.stream.v1.MsgUpdateParamsResponse",
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
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateStream defines a method to create a new stream */
  CreateStream(request: MsgCreateStream): Promise<MsgCreateStreamResponse>;
  /** ClaimStream defines a method for a receiver to claim from a stream using the sender and receiver */
  ClaimStream(request: MsgClaimStream): Promise<MsgClaimStreamResponse>;
  /** TopUpDeposit defines a method for senders to top up their streams */
  TopUpDeposit(request: MsgTopUpDeposit): Promise<MsgTopUpDepositResponse>;
  /** UpdateFlowRate defines a method to update a stream flow rate */
  UpdateFlowRate(request: MsgUpdateFlowRate): Promise<MsgUpdateFlowRateResponse>;
  /** CancelStream defines a method to cancel a stream */
  CancelStream(request: MsgCancelStream): Promise<MsgCancelStreamResponse>;
  /**
   * UpdateParams defines an operation for updating the x/stream module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateStream = this.CreateStream.bind(this);
    this.ClaimStream = this.ClaimStream.bind(this);
    this.TopUpDeposit = this.TopUpDeposit.bind(this);
    this.UpdateFlowRate = this.UpdateFlowRate.bind(this);
    this.CancelStream = this.CancelStream.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateStream(request: MsgCreateStream): Promise<MsgCreateStreamResponse> {
    const data = MsgCreateStream.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "CreateStream", data);
    return promise.then((data) => MsgCreateStreamResponse.decode(new BinaryReader(data)));
  }
  ClaimStream(request: MsgClaimStream): Promise<MsgClaimStreamResponse> {
    const data = MsgClaimStream.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "ClaimStream", data);
    return promise.then((data) => MsgClaimStreamResponse.decode(new BinaryReader(data)));
  }
  TopUpDeposit(request: MsgTopUpDeposit): Promise<MsgTopUpDepositResponse> {
    const data = MsgTopUpDeposit.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "TopUpDeposit", data);
    return promise.then((data) => MsgTopUpDepositResponse.decode(new BinaryReader(data)));
  }
  UpdateFlowRate(request: MsgUpdateFlowRate): Promise<MsgUpdateFlowRateResponse> {
    const data = MsgUpdateFlowRate.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "UpdateFlowRate", data);
    return promise.then((data) => MsgUpdateFlowRateResponse.decode(new BinaryReader(data)));
  }
  CancelStream(request: MsgCancelStream): Promise<MsgCancelStreamResponse> {
    const data = MsgCancelStream.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "CancelStream", data);
    return promise.then((data) => MsgCancelStreamResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("mainchain.stream.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
