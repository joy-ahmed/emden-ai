import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: " bg-[#720BDA]",
        },
      }}
    />
  );
}
