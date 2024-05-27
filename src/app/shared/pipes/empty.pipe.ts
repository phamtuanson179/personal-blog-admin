import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "empty",
  standalone: true,
})
export class EmptyPipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (value == null || value == undefined) return "---";

    return value;
  }
}
