import dynamic from "next/dynamic";

const RegisterClient = dynamic(() => import("./RegisterClient"), {
  ssr: false,
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RegisterPage() {
  return <RegisterClient />;
}
