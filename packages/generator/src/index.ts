import CRC32 from 'crc-32';

import {GeneratorData, MetadataPayload} from './types/generators';
import TEAEncrypt, {TEAMaterial} from './utilities/TEAEncrypt';

import * as generators from './generators';

const METADATA_IDENTIFIER = 'ECdITeCs';

const TEA_ENCRYPTION_MATERIAL: TEAMaterial = [1888420705, 2576816180, 2347232058, 874813317];

export const generate = (generatorData: GeneratorData): MetadataPayload =>
  Object.values(generators).reduce(
    (generatedData, generator) => Object.assign(generatedData, generator.generate(generatorData)),
    {} as MetadataPayload
  );

export const encrypt = (metadataPayload: MetadataPayload): string => {
  const payload = JSON.stringify(metadataPayload);

  // eslint-disable-next-line no-bitwise
  const payloadSum = (CRC32.str(payload) >>> 0).toString(16).toUpperCase();

  const encryptPayload = `${payloadSum}#${payload}`;

  const encrypted = TEAEncrypt(encryptPayload, TEA_ENCRYPTION_MATERIAL);

  return `${METADATA_IDENTIFIER}:${Buffer.from(encrypted, 'binary').toString('base64')}`;
};
