import Image from "next/image";

interface EmtyLabelProps {
  label: string;
}

export const EmtyDataState = ({ label }: EmtyLabelProps) => (
  <div className="flex flex-col items-center justify-center space-y-12">
    <div className="w-[472px] h-72 relative">
      <Image src="/nodata.png" fill alt="nodata" />
    </div>
    <p className="text-xl text-muted-foreground font-bold">{label}</p>
  </div>
);
