/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "mainchain.stream.v1";
/** Params defines the parameters for the module. */
export interface Params {
  /** validator_fee is the chain-wide fee validators will receive from stream payments. A percentage value from 0 to 1 */
  validatorFee: string;
}
function createBaseParams(): Params {
  return {
    validatorFee: "",
  };
}
export const Params = {
  typeUrl: "/mainchain.stream.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorFee !== "") {
      writer.uint32(10).string(message.validatorFee);
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
          message.validatorFee = reader.string();
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
    if (isSet(object.validatorFee)) obj.validatorFee = String(object.validatorFee);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.validatorFee !== undefined && (obj.validatorFee = message.validatorFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.validatorFee = object.validatorFee ?? "";
    return message;
  },
};
