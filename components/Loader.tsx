import Image from "next/image";

export const Loader = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-16 h-16 relative animate-bounce">
      <Image src="/brandicon.svg" fill alt="brandicon" />
    </div>
    <p className="text-sm text-muted-foreground">
      Sit tight Emden is Cooking😋
    </p>
  </div>
);
