import type { SpecTable as SpecTableData } from "@/content/products";
import { Label } from "./Label";

type SpecTableProps = {
  table: SpecTableData;
  /** Hide the caption visually when the section label already names the table. */
  captionHidden?: boolean;
};

/** Two-column specification table: mono label, body value. */
export function SpecTable({ table, captionHidden = false }: SpecTableProps) {
  return (
    <table className="w-full border-collapse text-left">
      <caption className={captionHidden ? "sr-only" : "pb-4 text-left"}>
        <Label>{table.title}</Label>
      </caption>
      <tbody className="border-t border-rule">
        {table.rows.map((row) => (
          <tr key={row.label} className="border-b border-rule">
            <th scope="row" className="w-2/5 py-4 pr-6 align-top font-normal md:w-1/3">
              <Label>{row.label}</Label>
            </th>
            <td className="py-4 align-top">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
