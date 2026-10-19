import type { ComparisonTable as ComparisonTableData } from "@/content/products";
import { Label } from "./Label";

type ComparisonTableProps = {
  table: ComparisonTableData;
  /** Hide the caption visually when the section label already names the table. */
  captionHidden?: boolean;
};

/** Multi-column table: models or series across, specifications down. Scrolls sideways on narrow screens. */
export function ComparisonTable({ table, captionHidden = false }: ComparisonTableProps) {
  const captionId = `table-${table.title.toLowerCase().replace(/\W+/g, "-")}`;
  const [corner, ...columns] = table.headers;

  return (
    <div role="region" aria-labelledby={captionId} tabIndex={0} className="overflow-x-auto">
      <table className="w-full min-w-[40rem] border-collapse text-left">
        <caption id={captionId} className={captionHidden ? "sr-only" : "pb-4 text-left"}>
          <Label>{table.title}</Label>
        </caption>
        <thead className="border-y border-rule">
          <tr>
            <th scope="col" className="py-4 pr-6 align-bottom font-normal">
              <Label tone="secondary">{corner}</Label>
            </th>
            {columns.map((header) => (
              <th key={header} scope="col" className="py-4 pr-6 align-bottom font-normal">
                <Label tone="secondary">{header}</Label>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.label} className="border-b border-rule">
              <th scope="row" className="py-4 pr-6 align-top font-normal">
                <Label>{row.label}</Label>
              </th>
              {row.values.map((value, column) => (
                <td key={columns[column] ?? column} className="py-4 pr-6 align-top">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
