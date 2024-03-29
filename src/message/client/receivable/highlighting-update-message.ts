export const HIGHLIGHTING_UPDATE_EVENT = 'highlighting_update';

export type HighlightingUpdateMessage = {
  appId: string;
  entityType: string;
  entityId: string;
  isHighlighted: boolean;
  multiSelected: boolean;
};
