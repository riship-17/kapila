import { z } from "zod";

export const ATTACHMENT_MAX_BYTES = 5 * 1024 * 1024;
export const ATTACHMENT_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
];
export const ATTACHMENT_ACCEPT = ".pdf,.jpg,.jpeg,.png,.xlsx,.xls";

export const PRODUCT_OTHER = "Several products, or not sure";

/** Shared by the form (client) and /api/enquiry (server). */
export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(120, "Use 120 characters or fewer"),
  company: z.string().trim().max(160, "Use 160 characters or fewer"),
  phone: z
    .string()
    .trim()
    .max(40, "Use 40 characters or fewer")
    .regex(/^[+\d\s().-]*$/, "Use digits, spaces, brackets and + only"),
  email: z.string().trim().pipe(z.email("Enter an email address such as name@company.com")),
  product: z.string().min(1, "Choose a product"),
  requirement: z
    .string()
    .trim()
    .min(10, "Describe the requirement in a sentence or two")
    .max(5000, "Use 5,000 characters or fewer"),
});

export type Enquiry = z.infer<typeof enquirySchema>;

/** Returns an error message, or null when the file is acceptable. */
export function attachmentError(file: { size: number; type: string }): string | null {
  if (file.size > ATTACHMENT_MAX_BYTES) return "Attach a file of 5 MB or less";
  if (!ATTACHMENT_TYPES.includes(file.type)) return "Attach a PDF, JPG, PNG or Excel file";
  return null;
}
