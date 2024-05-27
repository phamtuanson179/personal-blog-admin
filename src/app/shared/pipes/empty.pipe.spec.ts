import { EmptyPipe } from "./empty.pipe";

describe("EmptyPipe", () => {
  const pipe = new EmptyPipe();

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("transforms '' to ''", () => {
    const res = pipe.transform("");
    expect(res).toEqual("");
  });

  it("transforms null to '---'", () => {
    const res = pipe.transform(null);
    expect(res).toEqual("---");
  });

  it("transforms undefined to '---'", () => {
    const res = pipe.transform(undefined);
    expect(res).toEqual("---");
  });
});
