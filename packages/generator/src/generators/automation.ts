export interface AutomationData {
  automation: {
    wd: {
      properties: {
        document: true[];
        window: true[];
        navigator: true[];
      };
    };
    phantom: {properties: {window: true[]}};
  };
}

export const generate = (): AutomationData => ({
  automation: {
    phantom: {properties: {window: []}},
    wd: {properties: {document: [], navigator: [], window: []}},
  },
});
