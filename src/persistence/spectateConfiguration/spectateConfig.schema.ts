import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SpectateConfigDocument = HydratedDocument<SpectateConfig>;

@Schema()
export class SpectateConfig {
  @Prop()
  id: string;

  @Prop()
  devices: { deviceId: string; projectionMatrix: number[] }[];
}

export const SpectateConfigSchema = new mongoose.Schema({
  id: String,
  devices: [{ deviceId: String, projectionMatrix: [Number] }],
});
