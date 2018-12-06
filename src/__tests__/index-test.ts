import * as DataService from "../";

describe("API", () => {
  it("exposes recompose", () => {
    expect(DataService.componentFromStream).toBeDefined();
    expect(DataService.createEventHandler).toBeDefined();
  });

  it("exposes graphqlObservable", () => {
    expect(DataService.graphqlObservable).toBeDefined();
  });
});
