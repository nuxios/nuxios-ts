import { AccountCreate } from "../account/summon";
import ProtocolSummon from "../protocol/protocol";


/** SummonProtocol can be used to search username as signatureCheck */
export function SummonProtocol(signatureCheck: string) {
  const protocol = new ProtocolSummon(signatureCheck);
  return protocol;
}

/** signatureSummon provide to create new username known as signature user with the wallet address */
export async function signatureSummon() {
  return await AccountCreate();
}