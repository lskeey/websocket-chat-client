import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AuthCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              {children}
              <div className="bg-muted relative hidden md:block">
                <Image
                  src="/images/woman-texting-on-phone.jpg"
                  alt="woman texting on phone"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                  className="absolute inset-0"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
