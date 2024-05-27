import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment";

@Pipe({
  name: "relativeTime",
  standalone: true,
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (typeof value == "number") return moment(value).fromNow();

    return null;
  }
}
