import { redirect } from "next/navigation";

// Contact details now live on the homepage sidebar and at the end of the About page.
export default function ContactPage() {
  redirect("/about#contact");
}
