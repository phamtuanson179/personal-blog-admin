import moment from "moment";
import { RelativeTimePipe } from "./relative-time.pipe";

describe("RelativeTimePipe", () => {
  const pipe = new RelativeTimePipe();

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("transforms string to null", () => {
    const res = pipe.transform("");
    expect(res).toBeNull();
  });

  it("transforms yesterday to a day ago", () => {
    const yesterday = moment().subtract(1, "days").format("x");

    const res = pipe.transform(parseInt(yesterday));

    expect(res).toEqual("a day ago");
  });
});
